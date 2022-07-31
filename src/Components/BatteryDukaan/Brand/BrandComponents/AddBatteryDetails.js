import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import axios from "../../../../Axios/AxiosConfig";
import {
  CreateBatteryDetail,
  EditBatteryDetail,
  getbatteryDetail,
  DeleteBatteryDetail,
  GetBatteryBrand,
  GetBatteryModel,
  GetGroup,
  GetCategory,
  GetOemModel,
  GetScheme,
  GetSegment,
  GetProductMedia,
  GetProductPricing,
  GetProductDimension,
  GetProductType,
} from "../../../../Store/Actions";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";

function AddBatteryDetail(props) {
  console.log("object", props);
  // const history = useHistory();
  const [state, setstate] = useState({
    primaryName: "",
    secondaryName: "",
    productImage: "",
    brandId: "",
    modelId: "",
    groupId: "",
    categoryId: "",
    oemModelId: "",
    schemeId: "",
    segmentId: "",
    productMediaId: "",
    productPricingId: "",
    productTypeId: "",
    modelDimensionId: "",
  });
  useEffect(() => {
    props.GetBatteryBrand();
    props.GetBatteryModel();
    props.GetGroup();
    props.GetCategory();
    props.GetOemModel();
    props.GetScheme();
    props.GetSegment();
    props.GetProductMedia();
    props.GetProductPricing();
    props.GetProductType();
    props.GetProductDimension();
  }, []);

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const _id = props.match.params.id;
    if (props.match.path === "/EditBatteryDetails/:id") {
      console.log(
        "edit check from battery brand :: ",
        props.BatteryDetail.data
      );
      props.getbatteryDetail();
      const BatteryDetails = props.BatteryDetail.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = BatteryDetails.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const callToAction = async () => {
    const _id = props.match.params.id;
    if (props.match.url === "/batteryDetails") {
      props.CreateBatteryDetail(state);
      setstate({
        primaryName: "",
        secondaryName: "",
        productImage: "",
        brandId: "",
        modelId: "",
        groupId: "",
        categoryId: "",
        oemModelId: "",
        schemeId: "",
        segmentId: "",
        productMediaId: "",
        productPricingId: "",
        productTypeId: "",
        modelDimensionId: "",
      });
    } else {
      props.EditBatteryBrand(_id, state);
      props.history.push("/ViewBatteryDetails");
    }
  };

  let BatteryBrand;
  console.log("Brand Props", props.BatteryBrand);
  if (props.BatteryBrand.data) {
    BatteryBrand = props.BatteryBrand.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.brandName}
        </option>
      );
    });
  }

  let BatteryModel;
  console.log("Model props", props.BatteryModel);
  if (props.BatteryModel.data) {
    BatteryModel = props.BatteryModel.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.modelName}
        </option>
      );
    });
  }

  let BatteryGroup;
  console.log("Group props", props.BatteryGroup);
  if (props.BatteryGroup.data) {
    BatteryGroup = props.BatteryGroup.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.groupName}
        </option>
      );
    });
  }

  let BatteryCategory;
  console.log("Category props", props.BatteryCategory);
  if (props.BatteryCategory.data) {
    BatteryCategory = props.BatteryCategory.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.categoryName}
        </option>
      );
    });
  }

  let BatteryOem;
  console.log("Oem props", props.batteryOem);
  if (props.batteryOem.data) {
    BatteryOem = props.batteryOem.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.OEMModelName}
        </option>
      );
    });
  }

  let BatteryScheme;
  console.log("Scheme props", props.batteryScheme);
  if (props.batteryScheme.data) {
    BatteryScheme = props.batteryScheme.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.schemeName}
        </option>
      );
    });
  }
  let batterySegment;
  console.log("Segment props", props.batterySegment);
  if (props.batterySegment.data) {
    batterySegment = props.batterySegment.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.segmentName}
        </option>
      );
    });
  }

  let batteryProductVideo;
  console.log("Media props", props.batteryProductVideo);
  if (props.batteryProductVideo.data) {
    batteryProductVideo = props.batteryProductVideo.data.map((data) => {
      return (
        <>
          <option value="" selected hidden>
            {" "}
            Select Video
          </option>
          <option key={data.id} value={data.id}>
            {data.productVideos}
          </option>
        </>
      );
    });
  }

  let batteryProductType;
  console.log("type props", props);
  if (props.batteryProductType.data) {
    batteryProductType = props.batteryProductType.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.typeName}
        </option>
      );
    });
  }

  let batteryLength;
  console.log("Length Props", props.batteryDimension);
  if (props.batteryDimension.data) {
    batteryLength = props.batteryDimension.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.lengthValue} {data.lengthUnit}
        </option>
      );
    });
  }
  let batteryWidth;
  console.log("Width Props", props.batteryDimension);
  if (props.batteryDimension.data) {
    batteryWidth = props.batteryDimension.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.widthValue} {data.widthUnit}
        </option>
      );
    });
  }

  let batteryHeight;
  console.log("Height Props", props.batteryDimension);
  if (props.batteryDimension.data) {
    batteryHeight = props.batteryDimension.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.heightValue} {data.heigthUnit}
        </option>
      );
    });
  }

  let batteryLayout;
  console.log("Layout Props", props.batteryDimension);
  if (props.batteryDimension.data) {
    batteryLayout = props.batteryDimension.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.lengthValue}
        </option>
      );
    });
  }

  let batteryWeigth;
  console.log("Weight Props", props.batteryDimension);
  if (props.batteryDimension.data) {
    batteryWeigth = props.batteryDimension.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.weightValue} {data.weightUnit}
        </option>
      );
    });
  }

  let batteryCurrentCapacity;
  console.log("Current Capacity Props", props.batteryDimension);
  if (props.batteryDimension.data) {
    batteryCurrentCapacity = props.batteryDimension.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.currentCapacityValue} {data.currentCapacityUnit}
        </option>
      );
    });
  }

  let batteryAcidIndicator;
  console.log("Acid Indicator Props", props.batteryDimension);
  if (props.batteryDimension.data) {
    batteryAcidIndicator = props.batteryDimension.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.acidIndicatorValue} {data.acidIndicatorUnit}
        </option>
      );
    });
  }

  let batteryWarranty;
  console.log("battery Warranty Props", props.batteryDimension);
  if (props.batteryDimension.data) {
    batteryWarranty = props.batteryDimension.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.warrantyValue} {data.warrantyUnit}
        </option>
      );
    });
  }

  let batteryMrp;
  console.log("Mrp props", props);
  if (props.batteryProductPricing.data) {
    batteryMrp = props.batteryProductPricing.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.mrpValue} {data.mrpUnit}
        </option>
      );
    });
  }

  let batteryMop;
  console.log("Pricing props", props);
  if (props.batteryProductPricing.data) {
    batteryMop = props.batteryProductPricing.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.mopValue} {data.mopUnit}
        </option>
      );
    });
  }

  let batteryDp;
  console.log("Pricing props", props);
  if (props.batteryProductPricing.data) {
    batteryDp = props.batteryProductPricing.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.dpValue} {data.dpUnit}
        </option>
      );
    });
  }

  let batteryNlc;
  console.log("Pricing props", props);
  if (props.batteryProductPricing.data) {
    batteryNlc = props.batteryProductPricing.data.map((data) => {
      return (
        <option key={data.id} value={data.id}>
          {data.nlcValue} {data.nlcUnit}
        </option>
      );
    });
  }

  return (
    <>
      <div className="content-wrapper" style={{ backgroundColor: "white" }}>
        <div className={styles.main}>
          {/* two */}
          <span className={styles.span}>Add Battery Details</span>
          <div className={styles.form}>
            <labal htmlFor="primaryName">Primary Name</labal>
            <input
              name="primaryName"
              value={state.primaryName}
              onChange={OnCHangeHandler}
              type="text"
            />
          </div>
          <div className={styles.form}>
            <labal htmlFor="secondaryName">secondary Name</labal>
            <input
              name="secondaryName"
              value={state["secondaryName"]}
              onChange={OnCHangeHandler}
              type="text"
            />
          </div>
          <div className={styles.form}>
            <labal htmlFor="productImage">Product Image</labal>
            <input
              name="productImage"
              value={state["productImage"]}
              onChange={OnCHangeHandler}
              type="text"
            />
          </div>
          <div className={styles.form}>
            <labal htmlFor="brandId">Battery Brand</labal>
            <select onChange={OnCHangeHandler} name="brandId" id="">
              <option value="" selected hidden>
                Select Battery brand
              </option>
              {BatteryBrand}
            </select>
          </div>
          <div className={styles.form}>
            <labal htmlFor="modelId">Battery Model</labal>
            <select onChange={OnCHangeHandler} name="modelId" id="">
              <option value="" selected hidden>
                Select Battery Model
              </option>
              {BatteryModel}
            </select>
          </div>
          <div className={styles.form}>
            <labal htmlFor="groupId">Battery Group</labal>
            <select onChange={OnCHangeHandler} name="groupId" id="">
              <option value="" selected hidden>
                Select Battery Group
              </option>
              {BatteryGroup}
            </select>
          </div>
          <div className={styles.form}>
            <labal htmlFor="categoryId">Battery Category</labal>
            <select onChange={OnCHangeHandler} name="categoryId" id="">
              <option value="" selected hidden>
                Select Battery Category
              </option>
              {BatteryCategory}
            </select>
          </div>
          <div className={styles.form}>
            <labal htmlFor="oemModelId">Battery OEM Model</labal>
            <select onChange={OnCHangeHandler} name="oemModelId" id="">
              <option value="" selected hidden>
                Select Battery Oem
              </option>
              {BatteryOem}
            </select>
          </div>
          <div className={styles.form}>
            <labal htmlFor="schemeId">Battery Scheme</labal>
            <select onChange={OnCHangeHandler} name="schemeId" id="">
              <option value="" selected hidden>
                Select Battery Scheme
              </option>
              {BatteryScheme}
            </select>
          </div>
          <div className={styles.form}>
            <labal htmlFor="segmentId">Battery Segment</labal>
            <select onChange={OnCHangeHandler} name="segmentId" id="">
              <option value="" selected hidden>
                Select Battery Segment
              </option>
              {batterySegment}
            </select>
          </div>
          <div className={styles.form}>
            <labal htmlFor="productMediaId">Battery Video</labal>
            <select onChange={OnCHangeHandler} name="productMediaId" id="">
              <option value="" selected hidden>
                Select Battery Video
              </option>
              {batteryProductVideo}
            </select>
          </div>
          <div className={styles.form}>
            <labal htmlFor="productTypeId">Battery Product Type</labal>
            <select onChange={OnCHangeHandler} name="productTypeId" id="">
              <option value="" selected hidden>
                Select Battery Type
              </option>
              {batteryProductType}
            </select>
          </div>
          <div className={styles.dimensionPricing}>
            <div className="dimension">
              <labal htmlFor="modelDimensionId" className={styles.titleLabel}>
                Battery Product Dimension
              </labal>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="modelDimensionId">Battery Length</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="modelDimensionId"
                  id=""
                >
                  <option value="" selected hidden>
                    Battery Length
                  </option>
                  {batteryLength}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="modelDimensionId">Battery Width</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="modelDimensionId"
                  id=""
                >
                  <option value="" selected hidden>
                    Battery Width
                  </option>
                  {batteryWidth}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="modelDimensionId">Battery Height</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="modelDimensionId"
                  id=""
                >
                  <option value="" selected hidden>
                    Battery Height
                  </option>
                  {batteryHeight}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="modelDimensionId">Battery Weight</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="modelDimensionId"
                  id=""
                >
                  <option value="" selected hidden>
                    Battery Weight
                  </option>
                  {batteryWeigth}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="modelDimensionId">Battery Layout</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="modelDimensionId"
                  id=""
                >
                  <option value="" selected hidden className={styles.option}>
                    Battery Layout
                  </option>
                  {batteryLayout}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="modelDimensionId">
                  Battery Acid Indiactor Value
                </labal>
                <select
                  onChange={OnCHangeHandler}
                  name="modelDimensionId"
                  id=""
                >
                  <option value="" selected hidden className={styles.option}>
                    Acid Indiactor
                  </option>
                  {batteryAcidIndicator}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="modelDimensionId">
                  Battery Current Capacity Value
                </labal>
                <select
                  onChange={OnCHangeHandler}
                  name="modelDimensionId"
                  id=""
                >
                  <option value="" selected hidden className={styles.option}>
                    Current Capacity
                  </option>
                  {batteryCurrentCapacity}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="modelDimensionId">Battery Warranty Value</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="modelDimensionId"
                  id=""
                >
                  <option value="" selected hidden className={styles.option}>
                    Battery Warranty
                  </option>
                  {batteryWarranty}
                </select>
              </div>
            </div>
            <div className="Pricing">
              <labal
                htmlFor="modelPricingId"
                className={styles.titleLabel}
                style={{ marginLeft: "8vmax" }}
              >
                Battery Product Pricing
              </labal>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="productPricingId">Mrp Value</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="productPricingId"
                  id=""
                >
                  <option value="" selected hidden className={styles.option}>
                    Battery Mrp
                  </option>
                  {batteryMrp}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="productPricingId">Mop Value</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="productPricingId"
                  id=""
                >
                  <option value="" selected hidden className={styles.option}>
                    Battery Mop
                  </option>
                  {batteryMop}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="productPricingId">Dp Value</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="productPricingId"
                  id=""
                >
                  <option value="" selected hidden className={styles.option}>
                    Battery Dp
                  </option>
                  {batteryDp}
                </select>
              </div>
              <div className={styles.dimensioniForm}>
                <labal htmlFor="productPricingId">Nlc</labal>
                <select
                  onChange={OnCHangeHandler}
                  name="productPricingId"
                  id=""
                >
                  <option value="" selected hidden className={styles.option}>
                    Battery Nlc
                  </option>
                  {batteryNlc}
                </select>
              </div>
            </div>
          </div>
          <div
            onClick={callToAction}
            className={cx(styles.form, styles.submit)}
            type="button"
            data-toggle="modal"
            data-target="#centralModalSm"
          >
            <input type="submit" value="create" />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  BatteryDetail: state.CreateBatteryDetail,
  BatteryBrand: state.CreateBatteryBrand,
  BatteryModel: state.CreateBatteryModel,
  BatteryGroup: state.CreateGroupReducer,
  BatteryCategory: state.CreateCategory,
  batteryOem: state.CreateOemModel,
  batteryScheme: state.CreateScheme,
  batterySegment: state.CreateSegment,
  batteryProductVideo: state.CreateProductMedia,
  batteryProductType: state.CreateProductType,
  batteryDimension: state.CreateProductDimension,
  batteryProductPricing: state.CreateProductPricing,
});

const mapDispatchToProps = {
  CreateBatteryDetail,
  getbatteryDetail,
  EditBatteryDetail,
  DeleteBatteryDetail,
  GetBatteryBrand,
  GetBatteryModel,
  GetGroup,
  GetCategory,
  GetOemModel,
  GetScheme,
  GetSegment,
  GetProductMedia,
  GetProductDimension,
  GetProductPricing,
  GetProductType,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBatteryDetail);
