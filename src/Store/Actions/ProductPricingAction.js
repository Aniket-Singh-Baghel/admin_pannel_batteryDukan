import {
  CREATE_PRODUCT_PRICING,
  SHOW_PRODUCT_PRICING,
  DELETE_PRODUCT_PRICING,
} from "../ActionType";

import axios from "../../Axios/AxiosConfig";

export const CreateProductPricing = (data) => (dispatch) => {
  axios
    .post("/createProductPricing", data)
    .then((success) => {
      console.log("success", success);
      return dispatch({
        type: CREATE_PRODUCT_PRICING,
        payload: success.data,
      });
    })
    .catch((err) => console.log(err));
};

export const GetProductPricing = () => (dispatch) => {
  axios
    .get("/getProductPricing")
    .then((success) => {
      console.log("object,hibibo");
      return dispatch({
        type: SHOW_PRODUCT_PRICING,
        payload: success.data,
      });
    })
    .catch((err) => console.error(err));
};

export const EditProductPricing = (id, data) => (dispatch) => {
  axios
    .put(`/update/productPricing/${id}`, data)
    .then((success) => {
      console.log(success);
      return dispatch(GetProductPricing());
    })
    .catch((err) => console.error(err));
};

export const DeleteProductPricing = (id) => (dispatch) => {
  axios
    .delete(`delete/productPricing/${id}`)
    .then((success) => {
      return dispatch(GetProductPricing());
    })
    .catch((err) => console.error(err));
};
