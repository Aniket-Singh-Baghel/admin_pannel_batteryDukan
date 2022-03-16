import React, { useEffect, useState } from 'react';
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import axios from '../../../../Axios/AxiosConfig'
import { CreateCategory, EditCategory, GetCategory } from '../../../../Store/Actions'

function AddCategory(props) {
  console.log(props)
      const [state, setstate] = useState({
        "categoryName": "",
        "categoryDesc": "",
        "categoryIcon": "",
        "categoryPosition": ""
      })

      const OnCHangeHandler = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
      };
      
      useEffect(() => { 
        const _id = props.match.params.id
        if(props.match.path === "/EditCategory/:id"){
          props.GetCategory()
          const Category = props.Category.data.map(data => {
           if(data.id == _id){
             return data;
           }  
          })
          let filtered = Category.filter(e => typeof e !== "undefined");
          setstate(...filtered)
        }
      }, [])

      const callToAction = () => {
        const _id = props.match.params.id
		    if(props.match.url === "/category") {
        props.CreateCategory(state);
        setstate({
          "categoryName": "",
        "categoryDesc": "",
        "categoryIcon": "",
        "categoryPosition": ""
        })
      } else {
        props.EditCategory(_id, state)
        props.history.push("/ViewCategory")
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
					"categoryName": body["categoryName"],
				  "categoryDesc": body["categoryDesc"],
				  "categoryIcon": body["categoryIcon"],
				  "categoryPosition": body["categoryPosition"],
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
		let files = removeDuplicates(arr, "categoryName");
		console.log(files);
		axios
			.post("/bulkInsertCategory", {
				JSONData: files,
			})
			.then(suc => console.log(suc))
			.catch(err => console.log(err));
	};

    return (
        <div className={styles.main}>
            <span>Add Category</span>

            <div className={styles.form}>
                <label htmlFor="categoryName">category Name</label>
                <input onChange={OnCHangeHandler} value={state["categoryName"]} name="categoryName" type="text" />
            </div>    

            <div className={styles.form}>
                <label htmlFor="categoryDesc">category Desc</label>
                <input onChange={OnCHangeHandler} value={state["categoryDesc"]} name="categoryDesc" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="categoryIcon">category Icon (url)</label>
                <input onChange={OnCHangeHandler} value={state["categoryIcon"]} name="categoryIcon" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="categoryPosition">category Position</label>
                <input onChange={OnCHangeHandler} value={state["categoryPosition"]} name="categoryPosition" type="number" />
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
	Category: state.CreateCategory
})

const MapDispatchToProps = {
  CreateCategory,
  EditCategory,
  GetCategory
  };

export default connect(mapStateToProps, MapDispatchToProps)(AddCategory);
