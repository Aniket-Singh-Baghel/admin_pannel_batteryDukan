import { CREATE_SCHEME, SHOW_SCHEME, DELETE_SCHEME } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateScheme = (data) => dispatch => {
    axios.post("/createScheme", data)
    .then(success => {
        console.log(success)
        return dispatch({
            type: CREATE_SCHEME,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const GetScheme = () => dispatch => {
    axios.get("/getScheme")
    .then(success => {
        return dispatch({
            type: SHOW_SCHEME,
            payload: success.data,
          })
    })
    .catch(err => console.error(err))
}

export const EditScheme = (id, data) => dispatch => {
    axios.put(`/scheme/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetScheme()); 
    })
    .catch(err => console.error(err))
}

export const DeleteScheme = (id) => dispatch => {
    axios.delete(`/scheme/delete/${id}`)
    .then(success => {
        return dispatch(GetScheme());
    })
    .catch(err => console.error(err))
}