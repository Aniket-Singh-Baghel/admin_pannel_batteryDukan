import {
  CREATE_PRODUCT_MEDIA,
  SHOW_PRODUCT_MEDIA,
  DELETE_PRODUCT_MEDIA,
} from "../ActionType";

import axios from "../../Axios/AxiosConfig";

export const CreateProductMedia = (data) => (dispatch) => {
  axios
    .post("/createProductMedia", data)
    .then((success) => {
      console.log("success", success);
      return dispatch({
        type: CREATE_PRODUCT_MEDIA,
        payload: success.data,
      });
    })
    .catch((err) => console.log(err));
};

export const GetProductMedia = () => (dispatch) => {
  axios
    .get("/getProductMedia")
    .then((success) => {
      console.log("object,hibibo", success);
      return dispatch({
        type: SHOW_PRODUCT_MEDIA,
        payload: success.data,
      });
    })
    .catch((err) => console.error(err));
};

export const EditProductMedia = (id, data) => (dispatch) => {
  axios
    .put(`/update/productMedia/${id}`, data)
    .then((success) => {
      console.log(success);
      return dispatch(GetProductMedia());
    })
    .catch((err) => console.error(err));
};

export const DeleteProductMedia = (id) => (dispatch) => {
  axios
    .delete(`delete/productMedia/${id}`)
    .then((success) => {
      return dispatch(GetProductMedia());
    })
    .catch((err) => console.error(err));
};
