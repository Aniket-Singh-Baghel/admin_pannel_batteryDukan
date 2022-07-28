import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";
import {
  CreateSubCategory,
  GetCategory,
  EditSubCategory,
  GetSubcategory,
} from "../../../../Store/Actions";

function AddSubCategory(props) {
  console.log(props);
  const [state, setstate] = useState({
    subcategoryName: "",
    subcategoryDesc: "",
    subcategoryIcon: "",
    "subcategory Position": "",
  });

  useEffect(() => {
    props.GetCategory();
    props.GetSubcategory();

    const _id = props.match.params.id;
    if (props.match.path === "/EditSubCategory/:id") {
      props.GetSubcategory();
      const SubCategory = props.SubCategory.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = SubCategory.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/SubCategory") {
      props.CreateSubCategory(state);
      setstate({
        subcategoryName: "",
        subcategoryDesc: "",
        subcategoryIcon: "",
        "subcategory Position": "",
      });
    } else {
      props.EditSubCategory(_id, state);
      props.history.push("/ViewSubCategory");
    }
  };

  let category;
  console.log("props", props);
  if (props.SubCategory.data) {
    category = props.SubCategory.data.map((data, i) => {
      return (
        <option key={i} value={data.categoryName}>
          {data.categoryName}
        </option>
      );
    });
  }

  //bulk upload ---
  //for bulk upload  --------------
  const [files, setFiles] = useState(null);
  let arr = [];
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result:= ", e);

      JSON.parse(e.target.result).map((body) => {
        arr.push({
          subcategoryName: body["subcategoryName"],
          subcategoryDesc: body["subcategoryDesc"],
          subcategoryIcon: body["subcategoryIcon"],
          "subcategory Position": body["subcategory Position"],
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
    let files = removeDuplicates(arr, "subcategoryName");
    console.log(files);
    axios
      .post("/bulkInsertionSubCategory", {
        JSONData: files,
      })
      .then((suc) => console.log(suc))
      .catch((err) => console.log(err));
  };

  console.log(state);

  return (
    <div className={styles.main}>
      <span>Add SubCategory</span>

      <div className={styles.form}>
        <label htmlFor="subcategoryName">subcategory Name</label>
        <input
          onChange={OnCHangeHandler}
          value={state["subcategoryName"]}
          name="subcategoryName"
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="subcategoryDesc">subcategory Desc</label>
        <input
          onChange={OnCHangeHandler}
          value={state["subcategoryDesc"]}
          name="subcategoryDesc"
          type="text"
        />
      </div>
      <div className={styles.form}>
        <label htmlFor="subcategoryIcon">subcategory Icon(url)</label>
        <input
          onChange={OnCHangeHandler}
          value={state["subcategoryIcon"]}
          name="subcategoryIcon"
          type="text"
        />
      </div>
      <div className={styles.form}>
        <label htmlFor="subcategory Position">subcategory Position</label>
        <input
          onChange={OnCHangeHandler}
          value={state["subcategory Position"]}
          name="subcategory Position"
          type="number"
        />
      </div>

      {/* <div className={styles.form}>
        <label htmlFor="categoryName">categoryName</label>
        <select onChange={OnCHangeHandler} name="categoryName" id="">
          {category}
        </select>
      </div> */}

      <div className={cx(styles.form, styles.submit)}>
        <input onClick={callToAction} type="submit" value="create" />
      </div>
      {/* bulk upload */}
      {/* <input type="file" name="files" onChange={e => handleChange(e)} />
		    <input onClick={submitHandler} type="submit" /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  Category: state.CreateCategory,
  SubCategory: state.CreateSubCategory,
});

const mapDispatchToProps = {
  CreateSubCategory,
  GetCategory,
  EditSubCategory,
  GetSubcategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSubCategory);
