import { CREATE_GROUP, SHOW_GROUP, FIND_ONE_GROUP } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateGroup = (data) => dispatch => {
    axios.post("/createGroup", data)
    .then(success => {
        console.log(success)
        return dispatch(GetGroup()); 
    })
    .catch(err => console.error(err))
}

export const GetGroup = () => dispatch => {
    axios.get("/getGroup")
    .then(success =>{
        return dispatch({
            type: SHOW_GROUP,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const EditGroup = (id, data) => dispatch => {
    axios.put(`/group/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetGroup()); 
    })
    .catch(err => console.error(err))
}


export const DeleteGroup = (id) => dispatch => {
    axios.delete(`/group/delete/${id}`)
    .then(success => {
        return dispatch(GetGroup());
    })
    .catch(err => console.error(err))
}

export const GetGroupById = (id) => dispatch => {
    axios.get(`/getGroup/${id}`)
    .then(success =>{
        return dispatch(GetGroup()); 
    })
    .catch(err => console.error(err))
}