import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import axios from "../../../../Axios/AxiosConfig";
import { CreateBatteryBrand, EditBatteryBrand, GetBatteryBrand } from '../../../../Store/Actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
// import AlertBox from "../../AlertBox/AlertBox";



function AddBrand(props) {
	const history = useHistory()
	const [state, setstate] = useState({
		brandName: "",
		brandLogo: "",
		brandPosition: "",
		brandIcon: "",
		brandDesc: "",
		// secondaryName:""
	});
	// const [alertbox, setalertbox] = useState({
	// 	message:" ",
	// 	isLoading: false,
	// })

	const OnCHangeHandler = e => {
		setstate({ ...state, [e.target.name]: e.target.value });
	};

	useEffect(() => { 	
        const _id = props.match.params.id
        if(props.match.path === "/EditBatteryBrand/:id"){
          props.GetBatteryBrand()
          const BatteryBrand = props.BatteryBrand.data.map(data => {
           if(data.id == _id){
             return data;
           }  
          })
          let filtered = BatteryBrand.filter(e => typeof e !== "undefined");
          setstate(...filtered)
        }
      }, [])

	const callToAction =()=>{
		const _id = props.match.params.id
		if(props.match.url === "/brand") {
	    props.CreateBatteryBrand(state)
		setstate({
			brandName: "",
		    "brandLogo": "",
		    brandPosition: "",
		    brandIcon: "",
		    brandDesc: "",
		})
		// setalertbox({
		// 	message:"",
		// 	isLoading:true
		// })
	} else {
		props.EditBatteryBrand(_id, state)
		history.push("/ViewBatteryBrand");
	}
	}

	


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
					brandName: body["brandName"],
					"brandLogo": body["brandLogo"],
					brandDesc: body["brandDesc"],
					brandIcon: body["brandIcon"],
					brandPosition: body["brandPosition"],
				});
			});
		};
	};

// 	function alert() {
//     const alert = document.createElement("ion-alert");
//     alert.header = "Something Went Wrong";
//     alert.message = "Please Enter Right Contact Number";
//     alert.buttons = ["OK"];

//     document.body.appendChild(alert);
//     return alert.present();
//   }

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
		let files = removeDuplicates(arr, "brandName");
		console.log(files);
		axios
			.post("/bulkInsertBatteryBrand", {
				JSONData: files,
			})
			.then(suc => console.log(suc))
			.catch(err => console.log(err));
	};

	// console.log(state);

	return (
		<div className={styles.main}>
			{/* two */}
			<span>Add Brand</span>

			<div className={styles.form}>
				<label htmlFor="brandName">brand Name</label>
				<input
					name="brandName"
					value={state.brandName}
					onChange={OnCHangeHandler}
					type="text"
				/>
			</div>
			<div className={styles.form}>
				<label htmlFor="brandLogo">brandLogo</label>
				<input
					name="brandLogo"
					value={state["brandLogo"]}
					onChange={OnCHangeHandler}
					type="text"
				/>
			</div>
			<div className={styles.form}>
				<label htmlFor="brandDesc">brand Desc</label>
				<input
					name="brandDesc"
					value={state.brandDesc}
					onChange={OnCHangeHandler}
					type="text"
				/>
			</div>
			<div className={styles.form}>
				<label htmlFor="brandIcon">brand Icon (url)</label>
				<input
					name="brandIcon"
					value={state.brandIcon}
					onChange={OnCHangeHandler}
					type="text"
				/>
			</div>
			<div className={styles.form}>
				<label htmlFor="brandPosition">brand Position</label>
				<input
					name="brandPosition"
					value={state.brandPosition}
					onChange={OnCHangeHandler}
					type="number"
				/>
			</div>

			<div
				onClick={callToAction}
				className={cx(styles.form, styles.submit)}
			>
				<input type="submit" value="create" />
			</div>

			{/* bulk upload */}
			<input type="file" name="files" onChange={e => handleChange(e)} />
			<input onClick={submitHandler} type="submit" />
			{/* {alertbox.isLoading &&(<AlertBox/>)} */}
		</div>
	);
}

const mapStateToProps = state => ({
	BatteryBrand: state.CreateBatteryBrand,
});

const mapDispatchToProps = {
	CreateBatteryBrand,
	EditBatteryBrand,
	GetBatteryBrand
  };


export default connect(mapStateToProps, mapDispatchToProps)(AddBrand);
