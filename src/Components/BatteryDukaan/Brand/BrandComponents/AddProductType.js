import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";
import {
  CreateProductType,
  EditProductType,
  GetProductType,
} from "../../../../Store/Actions";

function AddProductType(props) {
  // console.log(props)
  const [state, setstate] = useState({
    typeName: "",
    typeDesc: "",
    typeIcon: "",
    typePosition: "",
  });

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const _id = props.match.params.id;
    if (props.match.path === "/EditProductType/:id") {
      props.GetProductType();
      const ProductType = props.ProductType.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = ProductType.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);
  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/productType") {
      props.CreateProductType(state);
      console.log("payload :: state", state);
      setstate({
        typeName: "",
        typeDesc: "",
        typeIcon: "",
        typePosition: "",
      });
    } else {
      props.EditProductType(_id, state);
      props.history.push("/ViewProductType");
    }
  };

  const [files, setFiles] = useState(null);
  let arr = [];
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result:= ", e);

      JSON.parse(e.target.result).map((body) => {
        arr.push({
          typeName: body["typeName"],
          typeDesc: body["typeDesc"],
          typeIcon: body["typeIcon"],
          typePosition: body["typePosition"],
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

  return (
    <>
      <div className={styles.main}>
        <span>Add Product Type</span>

        <div className={styles.form}>
          <label htmlFor="typeName">Type Name</label>
          <input
            onChange={OnCHangeHandler}
            value={state["typeName"]}
            name="typeName"
            type="text"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="typeDesc">Type Desc</label>
          <input
            onChange={OnCHangeHandler}
            value={state["typeDesc"]}
            name="typeDesc"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="typeIcon">Type Icon (url)</label>
          <input
            onChange={OnCHangeHandler}
            value={state["typeIcon"]}
            name="typeIcon"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="typePosition">Type Position</label>
          <input
            onChange={OnCHangeHandler}
            value={state["typePosition"]}
            name="typePosition"
            type="number"
          />
        </div>
        <div className={cx(styles.form, styles.submit)}>
          <input onClick={callToAction} type="submit" value="create" />
        </div>
        {/* bulk upload */}
        {/* <input type="file" name="files" onChange={e => handleChange(e)} />
		      	<input onClick={submitHandler} type="submit" /> */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  ProductType: state.CreateProductType,
});

const MapDispatchToProps = {
  CreateProductType,
  EditProductType,
  GetProductType,
};

export default connect(mapStateToProps, MapDispatchToProps)(AddProductType);
