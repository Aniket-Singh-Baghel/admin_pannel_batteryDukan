import React, { useEffect, useState } from "react";
import axios from "../../../../Axios/AxiosConfig";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import {
  CreateBatteryModel,
  GetBatteryBrand,
  GetOemModel,
  GetSubcategory,
  GetSegment,
  GetSecondaryName,
  GetScheme,
  EditBatteryModel,
  GetBatteryModel,
} from "../../../../Store/Actions";
import { connect } from "react-redux";

function AddModel(props) {
  console.log(props);
  const [state, setstate] = useState({
    modelName: "",
    modelBrand: "",
    // modelDesc: "",
    modelIcon: "",
    modelPosition: "",
    // "OEM-Model Name": "",
    // subcategoryName: "",
    // segmentName: "",
    // schemeName: "",
    // "modelGroupIds (comma separated)": "",
    // "length (value)": "",
    // "width (value)": "",
    // "height (value)": "",
    // "layout (value)": "",
    // "acidIndicator (value)": "",
    // "currentCapaCity (value)": "",
    // "mrp (value)": "",
    // "mop (value)": "",
    // "dp (value)": "",
    // "nlc (value)": "",
    // "warranty (value)": "",
    // "warranty (description)": "",
    // "Weight (value)": "",
  });

  useEffect(() => {
    props.GetBatteryBrand();
    props.GetOemModel();
    props.GetSubcategory();
    props.GetSegment();
    props.GetSecondaryName();
    props.GetScheme();
  }, []);

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const _id = props.match.params.id;
    if (props.match.path === "/EditBatteryModel/:id") {
      props.GetBatteryModel();
      const BatteryModel = props.BatteryModel.data.map((data) => {
        if (data.id === _id) {
          return data;
        }
      });
      let filtered = BatteryModel.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/") {
      props.CreateBatteryModel(state);
      setstate({
        modelName: "",
        modelBrand: "",
        modelDesc: "",
        modelIcon: "",
        modelPosition: "",
        // secondaryName: "",
        // "OEM-Model-Name": "",
        // subcategoryName: "",
        // segmentName: "",
        // schemeName: "",
        // "modelGroupIds (comma separated)": "",
        // "length (value)": "",
        // "width (value)": "",
        // "height (value)": "",
        // "layout (value)": "",
        // "acidIndicator (value)": "",
        // "currentCapaCity (value)": "",
        // "mrp (value)": "",
        // "mop (value)": "",
        // "dp (value)": "",
        // "nlc (value)": "",
        // "warranty (value)": "",
        // "warranty (description)": "",
        // "Weight (value)": "",
      });
    } else {
      props.EditBatteryModel(_id, state);
      props.history.push("/ViewBatteryModel");
    }
  };

  let BatteryBrand;
  console.log("objectprops", props);
  if (props.BatteryBrand.data) {
    BatteryBrand = props.BatteryBrand.data.map((data) => {
      return (
        <option key={data.id} value={data.brandName}>
          {data.brandName}
        </option>
      );
    });
  }

  let OemModel;
  if (props.OemModel.data) {
    OemModel = props.OemModel.data.map((data) => {
      return (
        <option key={data.id} value={data.OEMModelName}>
          {data.OEMModelName}
        </option>
      );
    });
  }

  let segment;
  if (props.Segment.data) {
    segment = props.Segment.data.map((data) => {
      return (
        <option key={data.id} value={data.segmentName}>
          {data.segmentName}
        </option>
      );
    });
  }

  let SubCategory;
  console.log(props);
  if (props.SubCategory.data) {
    SubCategory = props.SubCategory.data.map((data) => {
      return (
        <option key={data.id} value={data.subcategoryName}>
          {data.subcategoryName}
        </option>
      );
    });
  }

  let SecondaryName;
  if (props.SecondaryName.data) {
    SecondaryName = props.SecondaryName.data.map((data) => {
      return (
        <option key={data.id} value={data.secondaryName}>
          {data.secondaryName}
        </option>
      );
    });
  }

  let Scheme;
  if (props.Scheme.data) {
    Scheme = props.Scheme.data.map((data) => {
      return <option value={data.id}>{data.id}</option>;
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
          modelName: body["modelName"],
          modelBrand: body["modelBrand"],
          // modelDesc: body["modelDesc"],
          modelIcon: body["ProductImg"],
          modelPosition: body["modelPosition"],
          // secondaryName: body["secondaryName"],
          // "OEM-Model Name": body["OEM-Model Name"],
          // subcategoryName: body["subcategoryName"],
          // segmentName: body["segmentName"],
          // schemeName: body["schemeName"],
          // "modelGroupIds (comma separated)":
          //   body["modelGroupIds (comma separated)"],
          // "length (value)": body["length (value)"],
          // "width (value)": body["width (value)"],
          // "height (value)": body["height (value)"],
          // "layout (value)": body["layout (value)"],
          // "acidIndicator (value)": body["acidIndicator (value)"],
          // "currentCapaCity (value)": body["currentCapaCity (value)"],
          // "mrp (value)": body["mrp (value)"],
          // "mop (value)": body["mop (value)"],
          // "dp (value)": body["dp (value)"],
          // "nlc (value)": body["nlc (value)"],
          // "warranty (value)": body["warranty (value)"],
          // "warranty (description)": body["warranty (description)"],
          // "Weight (value)": body["Weight (value)"],
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
    let files = removeDuplicates(arr, "modelName");
    console.log(files);
    axios
      .post("/bulkInsertBatteryModel", {
        JSONData: files,
      })
      .then((suc) => console.log(suc))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.main}>
      <span>Add Battery Model</span>

      <div className={styles.form}>
        <label htmlFor="modelName">model Name</label>
        <input
          onChange={OnCHangeHandler}
          value={state.modelName}
          name="modelName"
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="modelPosition">model Position</label>
        <input
          onChange={OnCHangeHandler}
          value={state.modelPosition}
          name="modelPosition"
          type="text"
        />
      </div>
      <div className={styles.form}>
        <label htmlFor="modelIcon">model Icon</label>
        <input
          onChange={OnCHangeHandler}
          value={state.modelIcon}
          name="modelIcon"
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="modelBrand">model Brand</label>
        <select onChange={OnCHangeHandler} name="modelBrand" id="">
          {BatteryBrand}
        </select>
      </div>

      <div className={cx(styles.form, styles.submit)}>
        <input onClick={callToAction} type="submit" value="create" />
      </div>

      {/* bulk upload */}
      {/* <input type="file" name="files" onChange={(e) => handleChange(e)} />
      <input
        onClick={submitHandler}
        type="submit"
        className={styles.fileSubmit}
        style={{padding:".2vmax .7vmax",marginLeft:"-4vmax"}}
      /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  BatteryModel: state.CreateBatteryModel,
  BatteryBrand: state.CreateBatteryBrand,
  OemModel: state.CreateOemModel,
  SubCategory: state.CreateSubCategory,
  Segment: state.CreateSegment,
  SecondaryName: state.CreateSecondaryName,
  Scheme: state.CreateScheme,
});

const mapDispatchToProps = {
  CreateBatteryModel,
  GetBatteryBrand,
  GetOemModel,
  GetSubcategory,
  GetSegment,
  GetSecondaryName,
  GetScheme,
  EditBatteryModel,
  GetBatteryModel,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModel);
