import { CREATE_BATTERY_BRAND, DELETE_BATTERY_BRAND, SHOW_BATTERY_BRAND } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateBatteryBrand = (data) => dispatch => {
    axios
      .post("/batteryBrandCreate", data)
      .then((success) => {
        alert(success.data.message + " " + success.status);
        return dispatch({
          type: CREATE_BATTERY_BRAND,
          payload: success.data,
        });
      })
      .catch((err) =>
        alert(err.response.data.message + " " + err.response.status)
      );
}

export const GetBatteryBrand = () => dispatch => {
    axios.get("/getBatteryBrand")
    .then(success =>{
        return dispatch({
            type: SHOW_BATTERY_BRAND,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const EditBatteryBrand = (id, data) => dispatch => {
    axios.put(`/batteryBrand/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetBatteryBrand()); 
    })
    .catch(err => console.error(err))
}

export const DeleteBatteryBrand = (id) => dispatch => {
    axios.delete(`/batteryBrand/delete/${id}`)
    .then(success => {
        return dispatch(GetBatteryBrand());
    })
    .catch(err => console.error(err))
}