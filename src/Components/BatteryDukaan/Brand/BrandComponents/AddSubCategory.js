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
    subcategoryPosition: "",
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
        subcategoryPosition: "",
      });
    } else {
      props.EditSubCategory(_id, state);
      props.history.push("/ViewSubCategory");
    }
  };
  //bulk upload ---
  //for bulk upload  --------------

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
        <label htmlFor="subcategoryPosition">subcategory Position</label>
        <input
          onChange={OnCHangeHandler}
          value={state["subcategoryPosition"]}
          name="subcategoryPosition"
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
