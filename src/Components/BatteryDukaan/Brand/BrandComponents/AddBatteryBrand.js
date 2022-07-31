import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import axios from "../../../../Axios/AxiosConfig";
import {
  CreateBatteryBrand,
  EditBatteryBrand,
  GetBatteryBrand,
  DeleteBatteryBrand,
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
      console.log("edit check from battery brand :: ", props.BatteryBrand.data);
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

  const x = props.BatteryBrand.data;

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
    } else {
      props.EditBatteryBrand(_id, state);
      history.push("/ViewBatteryBrand");
    }
    setalertbox({
      isLoading: true,
    });
  };

  let alertTable;

  const popUp = () => {
    let brandCreate;
    console.log(props);
    if (props.BatteryBrand.data === x) {
      return (
        <div className="container my-5">
          <div
            className="modal fade"
            id="centralModalSm"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title w-100" id="myModalLabel">
                    SuccessFul
                  </h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {props.BatteryBrand.message ==
                  "Brand Data Created Successfully" ? (
                    <p>{props.BatteryBrand.message}</p>
                  ) : (
                    <p> {props.err} </p>
                  )}
                  {/* <p>{props.BatteryBrand.message}</p> */}
                  <br />
                  {/* <p>{props.BatteryBrand.message}</p> */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
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
          <div
            onClick={callToAction}
            className={cx(styles.form, styles.submit)}
            type="button"
            // className="btn btn-primary waves-effect waves-light"
            data-toggle="modal"
            data-target="#centralModalSm"
          >
            <input type="submit" value="create" />
          </div>

          {/* {alertbox.isLoading ? (
          <div className="modal" tabindex="-1">
            <div className="modal-dialog">{alertTable}</div>
          </div>
        ) : (
          <div className="modal" tabindex="-1">
            <div className="modal-dialog">something went wrong</div>
          </div>
        )} */}
        </div>
      </div>{" "}
      <br />
      {alertbox.isLoading ? popUp() : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  BatteryBrand: state.CreateBatteryBrand,
});

const mapDispatchToProps = {
  CreateBatteryBrand,
  EditBatteryBrand,
  GetBatteryBrand,
  DeleteBatteryBrand,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBrand);
