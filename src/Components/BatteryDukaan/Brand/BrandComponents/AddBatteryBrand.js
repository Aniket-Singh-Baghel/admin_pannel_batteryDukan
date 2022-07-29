import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import axios from "../../../../Axios/AxiosConfig";
import {
  CreateBatteryBrand,
  EditBatteryBrand,
  GetBatteryBrand,
} from "../../../../Store/Actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import AlertBox from "../../AlertBox/AlertBox";

function AddBrand(props) {
  console.log("object", props);
  const history = useHistory();
  const [state, setstate] = useState({
    brandName: "",
    brandLogo: "",
    brandPosition: "",
    brandIcon: "",
    brandDesc: "",
    // secondaryName:""
  });
  const [alertbox, setalertbox] = useState({
    message: " ",
    isLoading: false,
  });

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    props.CreateBatteryBrand();
    const _id = props.match.params.id;
    if (props.match.path === "/EditBatteryBrand/:id") {
      props.GetBatteryBrand();
      const BatteryBrand = props.BatteryBrand.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = BatteryBrand.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const callToAction = async () => {
    const _id = props.match.params.id;
    if (props.match.url === "/brand") {
      props.CreateBatteryBrand(state);
      setstate({
        brandName: "",
        brandLogo: "",
        brandPosition: "",
        brandIcon: "",
        brandDesc: "",
      });
      // alert(props.BatteryBrand.message);
      // console.log(await props.BatteryBrand.message);
      setalertbox({
        isLoading: true,
      });
    } else {
      props.EditBatteryBrand(_id, state);
      history.push("/ViewBatteryBrand");
    }
  };

  let alertTable;
  console.log("props from conditional Statement:: ", props.BatteryBrand);
  if (props.BatteryBrand && props.BatteryBrand.length > 0) {
    console.log(state);
    alertTable = props.BatteryBrand.map((details, index) => {
      return (
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <i class="ri-check-line"></i>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{details.message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="content-wrapper" style={{ backgroundColor: "white" }}>
      <div className={styles.main}>
        {/* two */}
        <span>Add Brand</span>
        <div className={styles.form}>
          <label htmlFor="brandName">brand Name</label>
          <input
            name="brandName"
            value={state.brandName}
            onChange={OnCHangeHandler}
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="brandLogo">brandLogo</label>
          <input
            name="brandLogo"
            value={state["brandLogo"]}
            onChange={OnCHangeHandler}
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="brandDesc">brand Desc</label>
          <input
            name="brandDesc"
            value={state.brandDesc}
            onChange={OnCHangeHandler}
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="brandIcon">brand Icon (url)</label>
          <input
            name="brandIcon"
            value={state.brandIcon}
            onChange={OnCHangeHandler}
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="brandPosition">brand Position</label>
          <input
            name="brandPosition"
            value={state.brandPosition}
            onChange={OnCHangeHandler}
            type="number"
          />
        </div>
        <div onClick={callToAction} className={cx(styles.form, styles.submit)}>
          <input type="submit" value="create" />
        </div>
        {/* bulk upload */}
        {/* <input type="file" name="files" onChange={e => handleChange(e)} />
			<input onClick={submitHandler} type="submit" /> */}
        {/* {alertbox.isLoading ? (
          <div className="modal" tabindex="-1">
            <div className="modal-dialog">{alertTable}</div>
          </div>
        ) : (
          <div className="modal" tabindex="-1">
            <div className="modal-dialog">something went wrong</div>
          </div>
        )} */}
        {alertbox.isLoading ? <AlertBox /> : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  BatteryBrand: state.CreateBatteryBrand,
});

const mapDispatchToProps = {
  CreateBatteryBrand,
  EditBatteryBrand,
  GetBatteryBrand,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBrand);
