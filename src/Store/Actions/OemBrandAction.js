import { CREATE_OEM_BRAND, SHOW_OEM_BRAND, DELETE_OEM_BRAND } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateOemBrand = (data) => dispatch => {
    axios.post("/createOemBrand", data)
    .then(success => {
        console.log(success)
        return dispatch({
            type: CREATE_OEM_BRAND,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const GetOemBrand = (data) => dispatch => {
    axios.get("/getOemBrand")
    .then(success => {
        console.log(success.data)
        return dispatch({
            type: SHOW_OEM_BRAND,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const EditOemBrand = (id, data) => dispatch => {
    axios.put(`/oemBrand/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetOemBrand()); 
    })
    .catch(err => console.error(err))
}

export const DeleteOemBrand = (id) => dispatch => {
    axios.delete(`/oemBrand/delete/${id}`)
    .then(success => {
        return dispatch(GetOemBrand());
    })
    .catch(err => console.error(err))
}