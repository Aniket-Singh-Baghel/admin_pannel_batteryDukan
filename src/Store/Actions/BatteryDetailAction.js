import {
  CREATE_BATTERY_DETAIL,
  SHOW_BATTERY_DETAIL,
  DELETE_BATTERY_DETAIL,
  EDIT_BATTERY_DETAIL,
} from "../ActionType";
import axios from "../../Axios/AxiosConfig";

export const CreateBatteryDetail = (data) => (dispatch) => {
  axios
    .post("/createbatteryDetails", data)
    .then((success) => {
      console.log("success from Battery detail Action", success);
      return dispatch({
        type: CREATE_BATTERY_DETAIL,
        payload: success.data,
      });
    })
    .catch((err) => {
      console.log(
        "err from Battery detail Action ::",
        err.response.data.message,
        err.response.status
      );
      // alert(err.response.data.message + " " + err.response.status);
    });
};

export const getbatteryDetail = () => (dispatch) => {
  axios
    .get("/getbatteryDetails")
    .then((success) => {
      console.log("success from battery details Get ::", success);
      return dispatch({
        type: SHOW_BATTERY_DETAIL,
        payload: success.data,
      });
    })
    .catch((err) => console.error(err));
};

export const EditBatteryDetail = (id, data) => (dispatch) => {
  axios.put(`/batteryDetail/update/${id}`, data).then((success) => {
    console.log(success);
    return dispatch(getbatteryDetail());
  });
  // .catch((err) => console.error(err.response.message));
};

export const DeleteBatteryDetail = (id) => (dispatch) => {
  axios.delete(`/batteryDetail/delete/${id}`).then((success) => {
    return dispatch(getbatteryDetail());
  });
  // .catch((err) => console.error(err.response.message));
};
