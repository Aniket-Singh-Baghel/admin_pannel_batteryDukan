import { CREATE_BATTERY_MODEL, DELETE_BATTERY_MODEL, SHOW_BATTERY_MODEL } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateBatteryModel = (data) => dispatch => {
    axios.post("/createBatteryModel", data)
    .then(success => {
        console.log(success)
        return dispatch({
            type: CREATE_BATTERY_MODEL,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const GetBatteryModel = () => dispatch => {
    axios.get("/getBatteryModel")
    .then(success =>{
        return dispatch({
            type: SHOW_BATTERY_MODEL,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const EditBatteryModel = (id, data) => dispatch => {
    axios.put(`/batteryModel/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetBatteryModel()); 
    })
    .catch(err => console.error(err))
}

export const DeleteBatteryModel = (id) => dispatch => {
    axios.delete(`/batteryModel/delete/${id}`)
    .then(success => {
        return dispatch(GetBatteryModel());
    })
    .catch(err => console.error(err))
}