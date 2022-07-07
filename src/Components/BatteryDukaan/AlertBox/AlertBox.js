// import React from 'react'
// import styles from "./AlertBox.scss"
// import { IonContent } from "@ionic/react";
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';

// function AlertBox(props) {
//     const [state, setState] = useState({
//         success:"",
//         error:"",
//         status:""
//     })

//     useEffect(()  =>{
//      	axios
//         .post("/batteryBrandCreate", {
//         })
//         .then((suc) => console.log(suc))
//         .catch((err) => console.log(err));
//     }, [])

    
//   return (
//     <div className={styles.dada}>
//         <h4>{state.status}</h4>
//         <h1>{state.error}</h1>
//     </div>
//   )
// }

// export default AlertBox