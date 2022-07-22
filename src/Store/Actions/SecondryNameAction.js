import { CREATE_SECONDARY_NAME, SHOW_SECONDARY_NAME } from '../ActionType'
import axios from '../../Axios/AxiosConfig'

export const CreateSecondaryName = (data) => dispatch => {
    axios
      .post("/createSecondaryName", data)
      .then((success) => {
        console.log("data from :: ", success);
        return dispatch({
          type: CREATE_SECONDARY_NAME,
          payload: success.data,
        });
      })
      .catch((err) => console.error(err));
}

export const GetSecondaryName = () => dispatch => {
    axios.get("/getSecondaryName")
    .then(success =>{
        return dispatch({
            type: SHOW_SECONDARY_NAME,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const EditSecondaryName = (id, data) => dispatch => {
    axios.put(`/secondaryName/update/${id}`, data)
    .then(success =>{
        console.log(success)
        return dispatch(GetSecondaryName()); 
    })
    .catch(err => console.error(err))
}

export const DeleteSecondaryName = (id) => dispatch => {
    axios.delete(`/secondaryName/delete/${id}`)
    .then(success => {
        return dispatch(GetSecondaryName());
    })
    .catch(err => console.error(err))
}