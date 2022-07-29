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
  GetGroup,
} from "../../../../Store/Actions";
import { connect } from "react-redux";

function AddModel(props) {
  console.log(props);
  const [state, setstate] = useState({
    modelName: "",
    modelType: "",
    modelDesc: "",
    modelUrl: "",
    brandId: "",
    groupId: "",
  });

  useEffect(() => {
    props.GetBatteryBrand();
    props.GetOemModel();
    props.GetSubcategory();
    props.GetSegment();
    props.GetSecondaryName();
    props.GetScheme();
    props.GetGroup();
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
        modelType: "",
        modelDesc: "",
        modelUrl: "",
        brandId: "",
        groupId: "",
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
        <option key={data.id} value={data.id}>
          {data.brandName}
        </option>
      );
    });
  }

  let BatteryGroup;
  console.log("objectprops", props);
  if (props.BatteryGroup.data) {
    BatteryGroup = props.BatteryGroup.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.groupName}
        </option>
      );
    });
  }

  //bulk upload ---
  //for bulk upload  -------------

  return (
    <div className="content-wrapper" style={{ backgroundColor: "white" }}>
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
          <label htmlFor="modelType">model Type</label>
          <input
            onChange={OnCHangeHandler}
            value={state.modelType}
            name="modelType"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="modelDesc">model Desc</label>
          <input
            onChange={OnCHangeHandler}
            value={state.modelDesc}
            name="modelDesc"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="modelUrl">model Icon</label>
          <input
            onChange={OnCHangeHandler}
            value={state.modelUrl}
            name="modelUrl"
            type="text"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="brandId">model Brand</label>
          <select onChange={OnCHangeHandler} name="brandId" id="">
            {BatteryBrand}
          </select>
        </div>
        <div className={styles.form}>
          <label htmlFor="groupId">model Group</label>
          <select onChange={OnCHangeHandler} name="groupId" id="">
            <option value="" selected hidden>
              Select Battery Brand
            </option>
            {BatteryGroup}
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  BatteryModel: state.CreateBatteryModel,
  BatteryBrand: state.CreateBatteryBrand,
  BatteryGroup: state.CreateGroupReducer,
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
  GetGroup,
  GetSecondaryName,
  GetScheme,
  EditBatteryModel,
  GetBatteryModel,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModel);
