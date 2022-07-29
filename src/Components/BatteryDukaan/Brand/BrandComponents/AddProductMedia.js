import React, { useEffect, useState } from "react";
import axios from "../../../../Axios/AxiosConfig";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import {
  CreateProductMedia,
  GetProductMedia,
  EditProductMedia,
  DeleteProductMedia,
} from "../../../../Store/Actions";
import { connect } from "react-redux";

function AddMedia(props) {
  console.log(props);
  const [state, setstate] = useState({
    ProductImages: "",
    productVideos: "",
  });

  useEffect(() => {
    props.GetProductMedia();
  }, []);

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const _id = props.match.params.id;
    if (props.match.path === "/EditProductMedia/:id") {
      props.GetBatteryModel();
      const ProductMedia = props.ProductMedia.data.map((data) => {
        if (data.id === _id) {
          return data;
        }
      });
      let filtered = ProductMedia.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/productMedia") {
      props.CreateProductMedia(state);
      setstate({
        ProductImages: "",
        productVideos: "",
      });
    } else {
      props.EditProductMedia(_id, state);
      props.history.push("/ViewBatteryMedia");
    }
  };

  return (
    <div className="content-wrapper" style={{ backgroundColor: "white" }}>
      {" "}
      <div className={styles.main}>
        <span>Add Product Media</span>
        <div className={styles.form}>
          <label htmlFor="ProductImages">Product Images</label>
          <input
            onChange={OnCHangeHandler}
            value={state.ProductImages}
            name="ProductImages"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="productVideos">Product Videos</label>
          <input
            onChange={OnCHangeHandler}
            value={state.productVideos}
            name="productVideos"
            type="text"
          />
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
  ProductMedia: CreateProductMedia,
});

const mapDispatchToProps = {
  CreateProductMedia,
  EditProductMedia,
  GetProductMedia,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMedia);
