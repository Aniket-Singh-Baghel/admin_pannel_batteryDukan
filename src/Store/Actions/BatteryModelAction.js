import {
  CREATE_BATTERY_MODEL,
  DELETE_BATTERY_MODEL,
  SHOW_BATTERY_MODEL,
} from "../ActionType";
import axios from "../../Axios/AxiosConfig";

export const CreateBatteryModel = (data) => (dispatch) => {
  axios
    .post("/createProductModel", data)
    .then((success) => {
      console.log(success.data.message + " " + success.status);
      return dispatch({
        type: CREATE_BATTERY_MODEL,
        payload: success.data,
      });
    })
    .catch((err) =>
      console.log(err.response.data.message + " " + err.response.status)
    );
};

export const GetBatteryModel = () => (dispatch) => {
  axios
    .get("/getProductModel")
    .then((success) => {
      console.log("show", success);
      return dispatch({
        type: SHOW_BATTERY_MODEL,
        payload: success.data,
      });
    })
    .catch((err) => console.error(err.response));
};

export const EditBatteryModel = (id, data) => (dispatch) => {
  axios
    .put(`/productModel/update/${id}`, data)
    .then((success) => {
      console.log(success);
      return dispatch(GetBatteryModel());
    })
    .catch((err) => console.error(err));
};

export const DeleteBatteryModel = (id) => (dispatch) => {
  axios
    .delete(`/productModel/delete/${id}`)
    .then((success) => {
      return dispatch(GetBatteryModel());
    })
    .catch((err) => console.error(err));
};
