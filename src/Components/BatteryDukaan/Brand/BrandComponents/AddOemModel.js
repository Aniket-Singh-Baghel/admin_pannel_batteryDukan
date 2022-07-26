import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import {
  CreateOemModel,
  GetOemBrand,
  EditOemModel,
  GetOemModel,
} from "../../../../Store/Actions";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";

function AddOemModel(props) {
  console.log(props);
  const [state, setstate] = useState({
    OEMModelName: "",
    FuelType: "",
    OEMModelImage: "",
    OEMModelPosition: "",
    OEMBrandId: "",
  });

  useEffect(() => {
    props.GetOemBrand();
    const _id = props.match.params.id;
    if (props.match.path === "/EditOemModel/:id") {
      props.GetOemModel();
      const OemModel = props.OemModel.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = OemModel.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/Oem_model") {
      props.CreateOemModel(state);
      console.log(" payload :: state ", state);
      setstate({
        OEMModelName: "",
        FuelType: "",
        OEMModelImage: "",
        OEMModelPosition: "",
        OEMBrandId: "",
      });
    } else {
      props.EditOemModel(_id, state);
      props.history.push("/ViewOemModel");
    }
  };

  let oemBrand;
  console.log("props", props.OemBrand.data);
  if (props.OemBrand.data) {
    oemBrand = props.OemBrand.data.map((data, i) => {
      return (
        <option key={i} value={data.OEMBrand}>
          {data.OEMBrand}
        </option>
      );
    });
  }

  //bulk upload ---
  //for bulk upload  --------------
  const [files, setFiles] = useState(null);
  let arr = [];
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result:= ", e);

      JSON.parse(e.target.result).map((body) => {
        arr.push({
          OEMModelName: body["OEMModelName"],
          FuelType: body["FuelType"],
          OEMModelImage: body["OEMModelImage"],
          OEMModelPosition: body["OEMModelPosition"],
          OEMBrandId: body["OEMBrandId"],
        });
      });
    };
  };

  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  const submitHandler = () => {
    let files = removeDuplicates(arr, "OEMModelName");
    console.log(files);
    axios
      .post("/bulkInsertOemModel", {
        JSONData: files,
      })
      .then((suc) => console.log(suc))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.main}>
      <span>Add OEM Model</span>

      <div className={styles.form}>
        <label htmlFor="OEMModelName">OEM Model Name</label>
        <input
          name="OEMModelName"
          value={state["OEMModelName"]}
          onChange={OnCHangeHandler}
          type="text"
        />
      </div>
      <div className={styles.form}>
        <label htmlFor="FuelType">FUEL TYPE</label>
        <input
          name="FuelType"
          value={state["FuelType"]}
          onChange={OnCHangeHandler}
          type="text"
        />
      </div>
      <div className={styles.form}>
        <label htmlFor="OEMModelImage">OEM Model Images (url)</label>
        <input
          name="OEMModelImage"
          value={state["OEMModelImage"]}
          onChange={OnCHangeHandler}
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="OEMModelPosition">Oem-Model-position</label>
        <input
          name="OEMModelPosition"
          value={state["OEMModelPosition"]}
          onChange={OnCHangeHandler}
          type="number"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="OEMBrandId">OEM Brand Name</label>
        <select onChange={OnCHangeHandler} name="OEMBrandId" id="">
          {oemBrand}
        </select>
      </div>

      <div className={cx(styles.form, styles.submit)}>
        <input onClick={callToAction} type="submit" value="create" />
      </div>

      {/* bulk upload */}
      {/* <input type="file" name="files" onChange={e => handleChange(e)} />
			<input onClick={submitHandler} type="submit" /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  OemBrand: state.CreateOemBrand,
  OemModel: state.CreateOemModel,
});

const mapDispatchToProps = {
  CreateOemModel,
  GetOemModel,
  GetOemBrand,
  EditOemModel,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOemModel);
