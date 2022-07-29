import React, { useEffect, useState } from "react";
import styles from "../BrandScss/BrandGlobal.module.scss";
import cx from "classnames";
import axios from "../../../../Axios/AxiosConfig";
import { connect } from "react-redux";
import { CreateGroup, EditGroup, GetGroup } from "../../../../Store/Actions";
import { useHistory } from "react-router";

function AddGroup(props) {
  console.log(props);
  const history = useHistory();
  const [state, setstate] = useState({
    groupName: "",
    groupIcon: "",
    groupDesc: "",
    groupBasedOn: "",
  });

  const OnCHangeHandler = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const _id = props.match.params.id;
    if (props.match.path === "/EditGroup/:id") {
      props.GetGroup();
      const Group = props.Group.data.map((data) => {
        if (data.id == _id) {
          return data;
        }
      });
      let filtered = Group.filter((e) => typeof e !== "undefined");
      setstate(...filtered);
    }
  }, []);

  const callToAction = () => {
    const _id = props.match.params.id;
    if (props.match.url === "/group") {
      props.CreateGroup(state);
      setstate({
        groupName: "",
        groupIcon: "",
        groupDesc: "",
        groupBasedOn: "",
      });
    } else {
      props.EditGroup(_id, state);
      history.push("/ViewGroup");
    }
  };

  let arr = [];
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result:= ", e);

      JSON.parse(e.target.result).map((body) => {
        arr.push({
          groupName: body["groupName"],
          groupIcon: body["groupIcon"],
          groupDesc: body["groupDesc"],
          groupBasedOn: body["groupBasedOn"],
          // brandPosition: body["brandPosition"],
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
      .then((suc) => console.log(suc))
      .catch((err) => console.log(err));
  };
  return (
    <div className="content-wrapper" style={{ backgroundColor: "white" }}>
      <div className={styles.main}>
        <span>Add Group</span>

        <div className={styles.form}>
          <label htmlFor="groupName">Group Name</label>
          <input
            onChange={OnCHangeHandler}
            value={state.groupName}
            name="groupName"
            type="text"
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="groupIcon">Group Icon (Url)</label>
          <input
            onChange={OnCHangeHandler}
            value={state["groupIcon"]}
            name="groupIcon"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="groupDesc">Group Description</label>
          <input
            onChange={OnCHangeHandler}
            value={state["groupDesc"]}
            name="groupDesc"
            type="text"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="groupBasedOn">
            Group Based <br /> On
          </label>
          <select onChange={OnCHangeHandler} name="groupBasedOn" id="">
            <option value="" selected hidden>
              Select Group Based On
            </option>
            <option value="Country">Country</option>
            <option value="State">State</option>
            <option value="Religion">Religion</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

        <div className={cx(styles.form, styles.submit)}>
          <input onClick={callToAction} type="submit" value="create" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  Group: state.CreateGroupReducer,
});

const MapDispatchToProps = {
  CreateGroup,
  EditGroup,
  GetGroup,
};

export default connect(mapStateToProps, MapDispatchToProps)(AddGroup);
