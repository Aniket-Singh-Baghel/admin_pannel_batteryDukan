import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";
import {
  CreateProductPricing,
  EditProductPricing,
  GetProductPricing,
} from "../../../../Store/Actions";

function AddProductPricing(props) {
  // console.log(props)
  const [state, setstate] = useState({
    mrpIcon: "",
    mrpUnit: "",
    mrpValue: "",
    mopIcon: "",
    mopUnit: "",
    mopValue: "",
    dpIcon: "",
    dpIcon: "",
    dpIcon: "",
    nlcIcon: "",
    nlcIcon: "",
    nlcIcon: "",
  });

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const _id = props.match.params.id;
    if (props.match.path === "/EditProductPricing/:id") {
      props.GetProductPricing();
      const ProductPricing = props.ProductPricing.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = ProductPricing.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/productPricing") {
      props.CreateProductPricing(state);
      console.log("payload :: state", state);
      setstate({
        mrpIcon: "",
        mrpUnit: "",
        mrpValue: "",
        mopIcon: "",
        mopUnit: "",
        mopValue: "",
        dpIcon: "",
        dpUnit: "",
        dpValue: "",
        nlcIcon: "",
        nlcUnit: "",
        nlcValue: "",
      });
    } else {
      props.EditProductPricing(_id, state);
      props.history.push("/ViewProductPricing");
    }
  };

  return (
    <>
    <div className="content-wrapper" style={{ backgroundColor: "white" }}>
      <div className={styles.main}>
        <span>Add Product Pricing</span>

        <div className={styles.form}>
          <label htmlFor="mrpIcon">Mrp Icon (url)</label>
          <input
            onChange={OnCHangeHandler}
            value={state["mrpIcon"]}
            name="mrpIcon"
            type="text"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="mrpUnit">Mrp Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["mrpUnit"]}
            name="mrpUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="mrpValue">Mrp Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["mrpValue"]}
            name="mrpValue"
            type="number"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="mopIcon">mop Icon (url)</label>
          <input
            onChange={OnCHangeHandler}
            value={state["mopIcon"]}
            name="mopIcon"
            type="text"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="mopUnit">mop Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["mopUnit"]}
            name="mopUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="mopValue">mop Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["mopValue"]}
            name="mopValue"
            type="number"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="dpIcon">dp Icon (url)</label>
          <input
            onChange={OnCHangeHandler}
            value={state["dpIcon"]}
            name="dpIcon"
            type="text"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="dpUnit">dp Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["dpUnit"]}
            name="dpUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="dpValue">dp Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["dpValue"]}
            name="dpValue"
            type="number"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="nlcIcon">nlc Icon (url)</label>
          <input
            onChange={OnCHangeHandler}
            value={state["nlcIcon"]}
            name="nlcIcon"
            type="text"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="nlcUnit">nlc Unit</label>
          <input
            onChange={OnCHangeHandler}
            value={state["nlcUnit"]}
            name="nlcUnit"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="nlcValue">nlc Value</label>
          <input
            onChange={OnCHangeHandler}
            value={state["nlcValue"]}
            name="nlcValue"
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
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  ProductPricing: state.CreateProductPricing,
});

const MapDispatchToProps = {
  CreateProductPricing,
  EditProductPricing,
  GetProductPricing,
};

export default connect(mapStateToProps, MapDispatchToProps)(AddProductPricing);
