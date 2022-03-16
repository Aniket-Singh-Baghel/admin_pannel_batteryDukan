import React, { useEffect, useState } from 'react';
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { CreateScheme, EditScheme, GetScheme } from '../../../../Store/Actions'
import { connect } from 'react-redux'
import axios from '../../../../Axios/AxiosConfig'

function AddScheme(props) {
    const [state, setstate] = useState({
		"schemeName": "",
		"schemeType": "",
		"scheme description": "",
		"scheme url": "",
		"scheme groups (comma seperated ids)": "",
	});

    const OnCHangeHandler = (e) => {
		setstate({ ...state, [e.target.name]: e.target.value });
	  };

      useEffect(() => { 
        const _id = props.match.params.id
        if(props.match.path === "/EditScheme/:id"){
          props.GetScheme()
          const Scheme = props.Scheme.data.map(data => {
           if(data.id == _id){
             return data;
           }  
          })
          let filtered = Scheme.filter(e => typeof e !== "undefined");
          setstate(...filtered)
        }
      }, [])
	
	  const callToAction = () => {
        const _id = props.match.params.id
		if(props.match.url === "/scheme") {
		props.CreateScheme(state);
        setstate({
			"schemeName": "",
		"schemeType": "",
		"scheme description": "",
		"scheme url": "",
		"scheme groups (comma seperated ids)": "",
		})
       } else {
        props.EditScheme(_id, state)
        props.history.push("/ViewScheme")
       } 
	  };

      //bulk upload ---
	//for bulk upload  --------------
	const [files, setFiles] = useState(null);
	let arr = [];
	const handleChange = e => {
		const fileReader = new FileReader();
		fileReader.readAsText(e.target.files[0], "UTF-8");
		fileReader.onload = e => {
			console.log("e.target.result:= ", e);

			JSON.parse(e.target.result).map(body => {
				arr.push({
					"schemeName": body["schemeName"],
				    "schemeType": body["schemeType"],
				    "scheme description": body["scheme description"],
				    "scheme url": body["scheme url"],
				    "scheme groups (comma seperated ids)": body["scheme groups (comma seperated ids)"],
				});
			});
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

	const submitHandler = () => {
		let files = removeDuplicates(arr, "schemeName");
		console.log(files);
		axios
			.post("/bulkInsertionScheme", {
				JSONData: files,
			})
			.then(suc => console.log(suc))
			.catch(err => console.log(err));
	};

	  console.log(state)

    return (
        <div className={styles.main}>
            <span>Add Scheme</span>

            <div className={styles.form}>
                <label htmlFor="schemeName">scheme Name</label>
                <input onChange={OnCHangeHandler} value={state["schemeName"]} name="schemeName" type="text" />
            </div>    

            <div className={styles.form}>
                <label htmlFor="schemeType">scheme Type</label>
                <input onChange={OnCHangeHandler} value={state["schemeType"]} name="schemeType" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="scheme description">scheme description</label>
                <input onChange={OnCHangeHandler} value={state["scheme description"]} name="scheme description" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="scheme url">scheme url</label>
                <input onChange={OnCHangeHandler} value={state["scheme url"]} name="scheme url" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="scheme groups (comma seperated ids)">scheme groups (comma seperated ids)</label>
                <input onChange={OnCHangeHandler} value={state["scheme groups (comma seperated ids)"]} name="scheme groups (comma seperated ids)" type="Number" />

                {/* <select onChange={OnCHangeHandler} name="scheme groups (comma seperated ids)" id="">
                    <option value="">Groups`1</option>
                    <option value="">Groups`2</option>
                </select> */}
            </div> 
            <div className={cx(styles.form , styles.submit)}>
                <input onClick={callToAction} type="submit" value="create"/>
            </div>

            {/* bulk upload */}
            <input type="file" name="files" onChange={e => handleChange(e)} />
			<input onClick={submitHandler} type="submit" />
        </div>
    )
}

const mapStateToProps = (state) => ({
	Scheme: state.CreateScheme
})

const mapDispatchToProps = {
	CreateScheme,
    EditScheme,
    GetScheme
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddScheme);
