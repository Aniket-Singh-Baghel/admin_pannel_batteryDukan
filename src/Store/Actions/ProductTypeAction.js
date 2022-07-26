import { CREATE_PRODUCT_TYPE, SHOW_PRODUCT_TYPE } from "../ActionType";

import axios from "../../Axios/AxiosConfig";

export const CreateProductType = (data) => (dispatch) => {
  axios
    .post("/createProductType", data)
    .then((success) => {
      console.log("success", success);
      return dispatch({
        type: CREATE_PRODUCT_TYPE,
        payload: success.data,
      });
    })
    .catch((err) => console.log("err", err));
};

export const GetProductType = () => (dispatch) => {
  axios
    .get("/getProductType")
    .then((success) => {
      console.log("object,hibibo", success);
      return dispatch({
        type: SHOW_PRODUCT_TYPE,
        payload: success.data,
      });
    })
    .catch((err) => console.error(err));
};

export const EditProductType = (id, data) => (dispatch) => {
  axios
    .put(`/update/productType${id}`, data)
    .then((success) => {
      console.log(success);
      return dispatch(GetProductType());
    })
    .catch((err) => console.error(err));
};

export const DeleteProductType = (id) => (dispatch) => {
  axios
    .delete(`delete/productType/${id}`)
    .then((success) => {
      return dispatch(GetProductType());
    })
    .catch((err) => console.error(err));
};
