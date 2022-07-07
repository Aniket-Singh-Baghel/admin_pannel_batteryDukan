import { CREATE_OEM_MODEL, SHOW_OEM_MODEL, DELETE_OEM_MODEL } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateOemModel = (data) => dispatch => {
    axios
      .post("/createOemModel", data)
      .then((success) => {
        alert(success);
        return dispatch({
          type: CREATE_OEM_MODEL,
          payload: success.data,
        });
      })
      .catch((err) => console.error("err",err));
}

export const GetOemModel = () => dispatch => {
    axios.get("/getOemModel")
    .then(success => {
        console.log("OEM Model",success);
        return dispatch({
          type: SHOW_OEM_MODEL,
          payload: success.data,
        });
    })
    .catch(err => console.error(err))
}

export const EditOemModel = (id, data) => dispatch => {
    axios.put(`/oemModel/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetOemModel()); 
    })
    .catch(err => console.error(err))
}

export const DeleteOemModel = (id) => dispatch => {
    axios.delete(`/oemModel/delete/${id}`)
    .then(success => {
        return dispatch(GetOemModel());
    })
    .catch(err => console.error(err))
}