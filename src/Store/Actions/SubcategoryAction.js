import {
  CREATE_SUBCATEGORY,
  SHOW_SUBCATEGORY,
  DELETE_SUBCATEGORY,
} from "../ActionType";
import axios from "../../Axios/AxiosConfig";

export const CreateSubCategory = (data) => (dispatch) => {
  axios
    .post("/createSubCategory", data)
    .then((success) => {
      console.log("success ::", success);
      return dispatch({
        type: CREATE_SUBCATEGORY,
        payload: success.data,
      });
    })
    .catch(
      (err) => console.log(err.response)
      // alert(err.response.data.message + " " + err.response.status)
    );
};

export const GetSubcategory = () => (dispatch) => {
  axios
    .get("/getSubCategory")
    .then((success) => {
      console.log("subCategory", success);
      return dispatch({
        type: SHOW_SUBCATEGORY,
        payload: success.data,
      });
    })
    .catch((err) => console.error(err));
};

export const EditSubCategory = (id, data) => (dispatch) => {
  axios
    .put(`/subCategory/update/${id}`, data)
    .then((success) => {
      console.log(success);
      return dispatch(GetSubcategory());
    })
    .catch((err) => console.error(err));
};

export const DeleteSubCategory = (id) => (dispatch) => {
  axios
    .delete(`/subCategory/delete/${id}`)
    .then((success) => {
      return dispatch(GetSubcategory());
    })
    .catch((err) => console.error(err));
};
