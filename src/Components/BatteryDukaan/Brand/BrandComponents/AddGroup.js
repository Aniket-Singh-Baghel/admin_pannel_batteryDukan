import React, { useEffect, useState } from 'react';
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import { CreateGroup, EditGroup, GetGroup } from '../../../../Store/Actions'

function AddGroup(props) {
    console.log(props)
      const [state, setstate] = useState({
        GroupName: "",
	      "GroupDesc": "",
        GroupBasedOn: "",
        GroupIcon: "",
      })

      const OnCHangeHandler = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
      };

      useEffect(() => { 
        const _id = props.match.params.id
        if(props.match.path === "/EditGroup/:id"){
          props.GetGroup()
          const Group = props.Group.data.map(data => {
           if(data.id == _id){
             return data;
           }  
          })
          let filtered = Group.filter(e => typeof e !== "undefined");
          setstate(...filtered)
        }
      }, [])
      
    
      const callToAction = () => {
        const _id = props.match.params.id
        if(props.match.url === "/group") {
          props.CreateGroup(state)
          setstate({
            GroupName: "",
          "GroupDesc": "",
          GroupBasedOn: "",
          GroupIcon: "",
          })
        } else {
          props.EditGroup(_id, state)
          props.history.push("/ViewGroup")
        }
        
      };
    return (
        <div className={styles.main}>
            <span>Add Group</span>

            <div className={styles.form}>
                <label htmlFor="GroupName">Group Name</label>
                <input onChange={OnCHangeHandler} value={state.GroupName} name="GroupName" type="text" />
            </div>    

            <div className={styles.form}>
                <label htmlFor="GroupDesc">Group Description</label>
                <input onChange={OnCHangeHandler} value={state["GroupDesc"]} name="GroupDesc" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="GroupIcon">Group Icon (Url)</label>
                <input onChange={OnCHangeHandler} value={state.GroupIcon} name="GroupIcon" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="GroupBasedOn">Group Based <br /> On</label>
                <select onChange={OnCHangeHandler} name="GroupBasedOn" id="">
                    <option value="Country">Country</option>
                    <option value="State">State</option>
                    <option value="Religion">Religion</option>
                    <option value="Custom">Custom</option>
                </select>
            </div> 
            
            <div className={cx(styles.form , styles.submit)}>
                <input onClick={callToAction} type="submit" value="create"/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
	Group: state.CreateGroupReducer,
})

const MapDispatchToProps = {
    CreateGroup,
    EditGroup,
    GetGroup
  };

export default connect(mapStateToProps, MapDispatchToProps)(AddGroup);
