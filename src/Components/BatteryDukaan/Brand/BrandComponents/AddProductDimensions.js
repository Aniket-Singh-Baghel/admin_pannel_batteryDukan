import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";
import {
  CreateProductDimension,
  EditProductDimension,
  GetProductDimension,
} from "../../../../Store/Actions";

function AddProductDimension(props) {
  // console.log(props)
  const [state, setstate] = useState({
    lengthUnit: "",
    lengthValue: "",
    widthUnit: "",
    widthValue: "",
    heightUnit: "",
    heightValue: "",
    layoutUnit: "",
    layoutValue: "",
    acidIndicatorUnit: "",
    acidIndicatorValue: "",
    currentCapacityUnit: "",
    currentCapacityValue: "",
    weightUnit: "",
    weightValue: "",
    warrantyUnit: "",
    warrantyValue: "",
    warrantyDesc: "",
  });

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const _id = props.match.params.id;
    if (props.match.path === "/EditProductDimension/:id") {
      props.GetProductDimension();
      const ProductDimension = props.ProductDimension.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = ProductDimension.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);
  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/productDimension") {
      props.CreateProductDimension(state);
      console.log("payload :: state", state);
      setstate({
        lengthUnit: "",
        lengthValue: "",
        widthUnit: "",
        widthValue: "",
        heightUnit: "",
        heightValue: "",
        layoutUnit: "",
        layoutValue: "",
        acidIndicatorUnit: "",
        acidIndicatorValue: "",
        currentCapacityUnit: "",
        currentCapacityValue: "",
        weightUnit: "",
        weightValue: "",
        warrantyUnit: "",
        warrantyValue: "",
        warrantyDesc: "",
      });
    } else {
      props.EditProductDimension(_id, state);
      props.history.push("/ViewProductDimension");
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
          lengthUnit: body["lengthUnit"],
          lengthUnit: body["lengthUnit"],
          lengthValue: body["lengthValue"],
          lengthUnit: body["lengthUnit"],
          lengthUnit: body["lengthUnit"],
          lengthValue: body["lengthValue"],
          lengthUnit: body["lengthUnit"],
          lengthUnit: body["lengthUnit"],
          lengthValue: body["lengthValue"],
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
        <span>Add Product Dimesion</span>

        <div className={styles.form}>
          <label htmlFor="lengthUnit">length Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["lengthUnit"]}
            name="lengthUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="lengthValue">length Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["lengthValue"]}
            name="lengthValue"
            type="number"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="widthUnit">width Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["widthUnit"]}
            name="widthUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="widthValue">width Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["widthValue"]}
            name="widthValue"
            type="number"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="heightUnit">height Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["heightUnit"]}
            name="heightUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="heightValue">height Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["heightValue"]}
            name="heightValue"
            type="number"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="layoutValue">layout Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["layoutValue"]}
            name="layoutValue"
            type="text"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="acidIndicatorUnit">acid Indicator Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["acidIndicatorUnit"]}
            name="acidIndicatorUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="acidIndicatorValue">acid Indicator Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["acidIndicatorValue"]}
            name="acidIndicatorValue"
            type="number"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="currentCapacityUnit">current Capacity Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["currentCapacityUnit"]}
            name="currentCapacityUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="currentCapacityValue">current Capacity Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["currentCapacityValue"]}
            name="currentCapacityValue"
            type="number"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="weightUnit">weight Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["weightUnit"]}
            name="weightUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="weightValue">weight Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["weightValue"]}
            name="weightValue"
            type="number"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="warrantyUnit">warranty Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["warrantyUnit"]}
            name="warrantyUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="warrantyValue">warranty Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["warrantyValue"]}
            name="warrantyValue"
            type="number"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="warrantyDesc">warranty Desc</label>
          <input
            onChange={OnCHangeHandler}
            value={state["warrantyDesc"]}
            name="warrantyDesc"
            type="text"
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
  ProductDimension: state.CreateProductDimension,
});

const MapDispatchToProps = {
  CreateProductDimension,
  EditProductDimension,
  GetProductDimension,
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(AddProductDimension);
