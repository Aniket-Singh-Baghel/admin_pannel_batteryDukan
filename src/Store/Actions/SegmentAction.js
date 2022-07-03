import { CREATE_SEGMENT, SHOW_SEGMENT, DELETE_SEGMENT } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateSegment = (data) => dispatch => {
    axios.post("/createSegment", data)
    .then(success => {
        console.log(success)
        return dispatch({
            type: CREATE_SEGMENT,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const GetSegment = () => dispatch => {
    axios.get("/getSegment")
    .then(success => {
        console.log("segment",success );
        return dispatch({
            type: SHOW_SEGMENT,
            payload: success.data,
          })
    })
    .catch(err => console.error(err))
}

export const EditSegment = (id, data) => dispatch => {
    axios.put(`/segment/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetSegment()); 
    })
    .catch(err => console.error(err))
}

export const DeleteSegment = (id) => dispatch => {
    axios.delete(`/segment/delete/${id}`)
    .then(success => {
        return dispatch(GetSegment());
    })
    .catch(err => console.error(err))
}