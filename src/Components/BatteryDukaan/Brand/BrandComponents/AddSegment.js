import React, { useEffect, useState } from 'react'
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { CreateSegment, EditSegment, GetSegment } from '../../../../Store/Actions'
import { connect } from 'react-redux'
import axios from '../../../../Axios/AxiosConfig'

function AddSegment(props) {
    const [state, setstate] = useState({
		"segmentName": "",
		"segmentDesc": "",
		"segmentIcon": "",
		"segmentPosition": "",
		"segment brandName": "",
	});

    const OnCHangeHandler = (e) => {
		setstate({ ...state, [e.target.name]: e.target.value });
	  };
	
      useEffect(() => { 
        const _id = props.match.params.id
        if(props.match.path === "/EditSegment/:id"){
          props.GetSegment()
          const Segment = props.Segment.data.map(data => {
           if(data.id == _id){
             return data;
           }  
          })
          let filtered = Segment.filter(e => typeof e !== "undefined");
          setstate(...filtered)
        }
      }, [])

	  const callToAction = () => {
        const _id = props.match.params.id
		if(props.match.url === "/segment") {
		props.CreateSegment(state);
        setstate({
            "segmentName": "",
            "segmentDesc": "",
            "segmentIcon": "",
            "segmentPosition": "",
            "segment brandName": "",
		})
       } else {
        props.EditSegment(_id, state)
        props.history.push("/ViewSegment")
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
					"segmentName": body["segmentName"],
				    "segmentDesc": body["segmentDesc"],
				    "segmentIcon": body["segmentIcon"],
				    "segmentPosition": body["segmentPosition"],
				    "segment brandName": body["segment brandName"],
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
		let files = removeDuplicates(arr, "segmentName");
		console.log(files);
		axios
			.post("/bulkInsertionSegment", {
				JSONData: files,
			})
			.then(suc => console.log(suc))
			.catch(err => console.log(err));
	};

	  console.log(state)
    return (
        <div className={styles.main}>
            <span>Add Segment</span>

            <div className={styles.form}>
                <label htmlFor="segmentName">segment Name</label>
                <input onChange={OnCHangeHandler} value={state["segmentName"]} name="segmentName" type="text" />
            </div>    

            <div className={styles.form}>
                <label htmlFor="segmentDesc">segment Desc</label>
                <input onChange={OnCHangeHandler} value={state["segmentDesc"]} name="segmentDesc" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="segmentIcon">segment Icon(url)</label>
                <input onChange={OnCHangeHandler} value={state["segmentIcon"]} name="segmentIcon" type="text" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="segmentPosition">segment Position</label>
                <input onChange={OnCHangeHandler} value={state["segmentPosition"]} name="segmentPosition" type="number" />
            </div> 
            <div className={styles.form}>
                <label htmlFor="segment brandName">segment brandName</label>
                <input onChange={OnCHangeHandler} value={state["segment brandName"]} name="segment brandName" type="text" />
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
	Segment: state.CreateSegment
})

const mapDispatchToProps = {
	CreateSegment,
    EditSegment,
    GetSegment
  };

export default connect(null, mapDispatchToProps)(AddSegment);
