import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import {
  CreateSegment,
  EditSegment,
  GetSegment,
  GetBatteryBrand,
  CreateBatteryBrand,
} from "../../../../Store/Actions";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";

function AddSegment(props) {
  const [state, setstate] = useState({
    segmentName: "",
    segmentIcon: "",
    segmentPosition: "",
    segmentBrandId: "",
  });

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const _id = props.match.params.id;
    if (props.match.path === "/EditSegment/:id") {
      props.GetSegment();
      const Segment = props.Segment.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = Segment.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
    props.GetBatteryBrand();
  }, []);

  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/segment") {
      props.CreateSegment(state);
      setstate({
        segmentName: "",
        segmentIcon: "",
        segmentPosition: "",
        segmentBrandId: "",
      });
    } else {
      props.EditSegment(_id, state);
      props.history.push("/ViewSegment");
    }
  };

  let BatteryBrand;
  console.log("props for BatteryBrand :: ", props);
  if (props.BatteryBrand.data) {
    BatteryBrand = props.BatteryBrand.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.brandName}
        </option>
      );
    });
  }

  return (
    <div className={styles.main}>
      <span>Add Segment</span>

      <div className={styles.form}>
        <label htmlFor="segmentName">segment Name</label>
        <input
          onChange={OnCHangeHandler}
          value={state["segmentName"]}
          name="segmentName"
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="segmentIcon">segment Icon(url)</label>
        <input
          onChange={OnCHangeHandler}
          value={state["segmentIcon"]}
          name="segmentIcon"
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="segmentPosition">segment Position</label>
        <input
          onChange={OnCHangeHandler}
          value={state["segmentPosition"]}
          name="segmentPosition"
          type="number"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="segmentBrandId">model Brand</label>
        <select onChange={OnCHangeHandler} name="segmentBrandId" id="">
          {BatteryBrand}
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
  Segment: state.CreateSegment,
  BatteryBrand: state.CreateBatteryBrand,
});

const mapDispatchToProps = {
  CreateSegment,
  EditSegment,
  GetSegment,
  GetBatteryBrand,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSegment);
