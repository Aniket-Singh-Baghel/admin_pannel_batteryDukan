import { SHOW_CATEGORY, CREATE_CATEGORY, DELETE_CATEGORY } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateCategory = (data) => dispatch => {
    axios.post("/categoryCreate", data)
    .then(success => {
        console.log(success)
        return dispatch({
            type: CREATE_CATEGORY,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const GetCategory = () => dispatch => {
    axios.get("/getCategory")
    .then(success =>{
        return dispatch({
            type: SHOW_CATEGORY,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const EditCategory = (id, data) => dispatch => {
    axios.put(`/category/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetCategory()); 
    })
    .catch(err => console.error(err))
}

export const DeleteCategory = (id) => dispatch => {
    axios.delete(`/category/delete/${id}`)
    .then(success => {
        return dispatch(GetCategory());
    })
    .catch(err => console.error(err))
}