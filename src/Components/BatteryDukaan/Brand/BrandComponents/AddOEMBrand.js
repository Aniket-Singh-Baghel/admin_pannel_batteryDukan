import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { CreateOemBrand, EditOemBrand, GetOemBrand } from "../../../../Store/Actions";
import { connect } from "react-redux";
import axios from '../../../../Axios/AxiosConfig'

function AddOEM(props) {
  const [state, setstate] = useState({
    "OEM-Brand": "",
    "Oem-Brand-Images": "",
    oemb: "",
  });

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => { 
    const _id = props.match.params.id
    if(props.match.path === "/EditOEMBrand/:id"){
      props.GetOemBrand()
      const OemBrand = props.OemBrand.data.map(data => {
       if(data.id == _id){
         return data;
       }  
      })
      let filtered = OemBrand.filter(e => typeof e !== "undefined");
      setstate(...filtered)
    }
  }, [])

  const callToAction = () => {
    const _id = props.match.params.id
		if(props.match.url === "/oem") {
    props.CreateOemBrand(state)
    setstate({
      "OEM-Brand": "",
    "Oem-Brand-Images": "",
    oemb: "",
    })
  } else {
    props.EditOemBrand(_id, state)
    props.history.push("/ViewOemBrand")
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
					"OEM-Brand": body["OEM-Brand"],
				  "Oem-Brand-Images": body["Oem-Brand-Images"],
				  oemb: body["oemb"],
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
		let files = removeDuplicates(arr, "OEM-Brand");
		console.log(files);
		axios
			.post("/bulkInsertOemBrand", {
				JSONData: files,
			})
			.then(suc => console.log(suc))
			.catch(err => console.log(err));
	};

  return (
    <div className={styles.main}>
      <span>Add OEM</span>

      <div className={styles.form}>
        <label htmlFor="OEM-Brand">OEM Brand</label>
        <input
          onChange={OnCHangeHandler}
          value={state["OEM-Brand"]}
          name="OEM-Brand"
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="Oem-Brand-Images">OEM Brand Images (url)</label>
        <input
          onChange={OnCHangeHandler}
          value={state["Oem-Brand-Images"]}
          name="Oem-Brand-Images"
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="oemb">oemb</label>
        <input
          onChange={OnCHangeHandler}
          value={state["oemb"]}
          name="oemb"
          type="text"
        />
      </div>

      <div className={cx(styles.form, styles.submit)}>
        <input onClick={callToAction} type="submit" value="create" />
      </div>

      {/* bulk upload */}
			<input type="file" name="files" onChange={e => handleChange(e)} />
			<input onClick={submitHandler} type="submit" />
    </div>
  );
}

const mapStateToProps = (state) => ({
	OemBrand: state.CreateOemBrand
})

const mapDispatchToProps = {
  CreateOemBrand,
  EditOemBrand,
  GetOemBrand
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOEM);
