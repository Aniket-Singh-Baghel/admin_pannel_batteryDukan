import {
  CREATE_BATTERY_MODEL,
  DELETE_BATTERY_MODEL,
  SHOW_BATTERY_MODEL,
} from "../ActionType";
import axios from "../../Axios/AxiosConfig";

export const CreateBatteryModel = (data) => (dispatch) => {
  axios
    .post("/createbatteryDetails", data)
    .then((success) => {
      alert(success.data.message + " " + success.status);
      return dispatch({
        type: CREATE_BATTERY_MODEL,
        payload: success.data,
      });
    })
    .catch((err) =>
      alert(err.response.data.message + " " + err.response.status)
    );
};

export const GetBatteryModel = () => (dispatch) => {
  axios
    .get("/getBatteryDetails")
    .then((success) => {
      console.log('show', success);
      return dispatch({
        type: SHOW_BATTERY_MODEL,
        payload: success.data,
      });
    })
    .catch((err) => console.error(err));
};

export const EditBatteryModel = (id, data) => (dispatch) => {
  axios
    .put(`/batteryModel/update/${id}`, data)
    .then((success) => {
      console.log(success);
      return dispatch(GetBatteryModel());
    })
    .catch((err) => console.error(err));
};

export const DeleteBatteryModel = (id) => (dispatch) => {
  axios
    .delete(`/batteryModel/delete/${id}`)
    .then((success) => {
      return dispatch(GetBatteryModel());
    })
    .catch((err) => console.error(err));
};
