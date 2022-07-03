import React from 'react'
import axios from "../Axios/AxiosConfig"


function AlertBox(data) {
     axios
      .post("/categoryCreate", data)
      .then((success) => {
        alert(success.data.message+" "+success.status);
      })
      .catch((err) =>
        alert(err.response.data.message+" "+err.response.status)
      )

  return 
}

export default AlertBox