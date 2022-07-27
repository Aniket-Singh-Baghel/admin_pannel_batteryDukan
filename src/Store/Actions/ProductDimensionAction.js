import {
  CREATE_PRODUCT_DIMENSION,
  SHOW_PRODUCT_DIMENSION,
} from "../ActionType";

import axios from "../../Axios/AxiosConfig";

export const CreateProductDimension = (data) => (dispatch) => {
  axios
    .post("/createModelDimension", data)
    .then((success) => {
      console.log("success", success);
      return dispatch({
        type: CREATE_PRODUCT_DIMENSION,
        payload: success.data,
      });
    })
    .catch((err) => console.log(err.response.data));
};

export const GetProductDimension = () => (dispatch) => {
  axios
    .get("/getModelDimension")
    .then((success) => {
      console.log("object,hibibo", success);
      return dispatch({
        type: SHOW_PRODUCT_DIMENSION,
        payload: success.data,
      });
    })
    .catch((err) => console.error(err));
};

export const EditProductDimension = (id, data) => (dispatch) => {
  axios
    .put(`/update/modelDimension/${id}`, data)
    .then((success) => {
      console.log(success);
      return dispatch(GetProductDimension());
    })
    .catch((err) => console.error(err));
};

export const DeleteProductDimension = (id) => (dispatch) => {
  axios
    .delete(`delete/ModelDimension/${id}`)
    .then((success) => {
      return dispatch(GetProductDimension());
    })
    .catch((err) => console.error(err));
};
