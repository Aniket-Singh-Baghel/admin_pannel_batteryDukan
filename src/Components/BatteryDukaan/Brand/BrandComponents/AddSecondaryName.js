import React, { useEffect, useState } from 'react';
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { connect } from 'react-redux'
import { CreateSecondaryName, GetBatteryBrand, EditSecondaryName, GetSecondaryName } from '../../../../Store/Actions';
import axios from "../../../../Axios/AxiosConfig";

function AddSecondaryName(props) {
    const [state, setstate] = useState({
		"secondaryName": "",
		"brandName": "",
	});

    useEffect(() => {
        props.GetBatteryBrand()
        const _id = props.match.params.id
        if(props.match.path === "/EditSecondaryName/:id"){
          props.GetSecondaryName()
          const SecondaryName = props.SecondaryName.data.map(data => {
           if(data.id == _id){
             return data;
           }  
          })
          let filtered = SecondaryName.filter(e => typeof e !== "undefined");
          setstate(...filtered)
        }
    }, [])

    const OnCHangeHandler = (e) => {
		setstate({ ...state, [e.target.name]: e.target.value });
	  };
	
	  const callToAction = () => {
        const _id = props.match.params.id
		if(props.match.url === "/secondaryName") {
		props.CreateSecondaryName(state);
        setstate({
            "secondaryName": "",
            "brandName": "",
		})
       } else {
		props.EditSecondaryName(_id, state)
        props.history.push("/ViewSecondaryName")
	}
	  };


	  let BatteryBrand;
     if(props.BatteryBrand.data) {
        //  console.log(props.BatteryBrand.data)
         BatteryBrand =  props.BatteryBrand.data.map((data ,i) =>{
             return <option key={i} value={data["brandName"]}> {data["brandName"]}</option>
         })
     }

   //for bulk upload  --------------
   const [files, setFiles] = useState(null);
   let arr = [];
   const handleChange = e => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        console.log("e.target.result:= ", e);
         
        JSON.parse(e.target.result).map(Filedata =>{
          arr.push({secondaryName : Filedata.secondaryName , brandName : Filedata.brandName})
        })      
      };
    };
    
    function removeDuplicates(originalArray, prop) {
      var newArray = [];
      var lookupObject = {};
  
      for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
      }
  
      for (i in lookupObject) {
        newArray.push(lookupObject[i]);
      }
      return newArray;
    }


    const submitHandler =()=>{
      let files = removeDuplicates(arr, "secondaryName");
      console.log(files);
      axios.post('/secondaryNameBulkInsertion',{
          JSONData:files
      })
      .then(suc => console.log(suc))
      .catch(err => console.log(err))
    }
    
    return (
        <div className={styles.main}>
            <span>Add Secondary Name</span>

            <div className={styles.form}>
                <label htmlFor="secondaryName">Secondary Name</label>
                <input onChange={OnCHangeHandler} value={state["secondaryName"]} name="secondaryName" type="text" />
            </div> 
           
            <div className={styles.form}>
                <label htmlFor="modelBrand">modelBrand</label>
                <select onChange={OnCHangeHandler} value={state["brandName"]} name="brandName" id="">
                  {BatteryBrand}
                </select>
            </div> 
            <div className={cx(styles.form , styles.submit)}>
                <input onClick={callToAction} type="submit" value="create"/>
            </div>
            <div>
            {/* bulk */}
          <input type="file"  name='files' onChange={(e)=>handleChange(e)}/>
          <input  onClick={submitHandler} type="submit" className={styles.fileSubmit}/>
        </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    BatteryBrand : state.CreateBatteryBrand,
    SecondaryName: state.CreateSecondaryName
})

const mapDispatchToProps = {
    CreateSecondaryName,
    GetBatteryBrand,
    EditSecondaryName,
    GetSecondaryName
  };


export default connect(mapStateToProps, mapDispatchToProps)(AddSecondaryName);



// e.target.result.map(data=>{
//   setFiles(JSON.parse([...files,{"secondaryName" :data.secondaryName , "brandName" : data.brandName}]))
// })