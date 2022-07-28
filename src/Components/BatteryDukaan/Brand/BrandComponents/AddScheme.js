import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import {
  CreateScheme,
  EditScheme,
  GetScheme,
  GetGroup,
} from "../../../../Store/Actions";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";

function AddScheme(props) {
  const [state, setstate] = useState({
    schemeName: "",
    schemeType: "",
    schemeDesc: "",
    schemeUrl: "",
    schemeGroupId: "",
  });

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  let SchemeGroup;
  console.log("props", props);
  if (props.SchemeGroupName.data) {
    SchemeGroup = props.SchemeGroupName.data.map((data, i) => {
      return (
        <option key={i} value={data.id}>
          {data.groupName}
        </option>
      );
    });
  }

  useEffect(() => {
    props.GetGroup();
    const _id = props.match.params.id;
    if (props.match.path === "/EditScheme/:id") {
      props.GetScheme();
      const Scheme = props.Scheme.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = Scheme.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/scheme") {
      props.CreateScheme(state);
      setstate({
        schemeName: "",
        schemeType: "",
        schemeDesc: "",
        schemeUrl: "",
        schemeGroupId: "",
      });
    } else {
      props.EditScheme(_id, state);
      props.history.push("/ViewScheme");
    }
  };

  return (
    <div className={styles.main}>
      <span>Add Scheme</span>

      <div className={styles.form}>
        <label htmlFor="schemeName">scheme Name</label>
        <input
          onChange={OnCHangeHandler}
          value={state["schemeName"]}
          name="schemeName"
          type="text"
        />
      </div>

      <div className={styles.form}>
        <label htmlFor="schemeType">scheme Type</label>
        <input
          onChange={OnCHangeHandler}
          value={state["schemeType"]}
          name="schemeType"
          type="text"
        />
      </div>
      <div className={styles.form}>
        <label htmlFor="schemeDesc">scheme description</label>
        <input
          onChange={OnCHangeHandler}
          value={state["schemeDesc"]}
          name="schemeDesc"
          type="text"
        />
      </div>
      <div className={styles.form}>
        <label htmlFor="schemeUrl">scheme url</label>
        <input
          onChange={OnCHangeHandler}
          value={state["schemeUrl"]}
          name="schemeUrl"
          type="text"
        />
      </div>
      <div className={styles.form}>
        <label htmlFor="schemeGroupId">Scheme Group Name</label>
        <select onChange={OnCHangeHandler} name="schemeGroupId" id="">
          {SchemeGroup}
        </select>
      </div>
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
  Scheme: state.CreateScheme,
  SchemeGroupName: state.CreateGroupReducer,
});

const mapDispatchToProps = {
  CreateScheme,
  EditScheme,
  GetScheme,
  GetGroup,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddScheme);
