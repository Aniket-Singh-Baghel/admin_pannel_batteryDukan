import React from "react";
import styles from "./AlertBox.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { GetBatteryBrand, CreateBatteryBrand } from "../../../Store/Actions";

function AlertBox(props) {
  console.log(props);
  const [state, setstate] = useState("");

  useEffect(() => {
    props.CreateBatteryBrand();
  }, []);

  const onDeleteAction = (id) => {
    props.DeleteBatteryBrand(id);
  };

  let brandsTable;
  if (props.BatteryBrand.data && props.BatteryBrand.data.length > 0) {
    console.log(state);
    brandsTable = props.BatteryBrand.data.map((details, index) => {
      return (
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>{brandsTable}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      );
    });
  }

  const multiple = () => {
    return (
      <div className="col-md-6">
        <div className="form-group">
          <label>Multiple</label>
          <select
            className="select2"
            multiple="multiple"
            data-placeholder="Select a State"
            style={{ width: "100%" }}
          >
            <option>Alabama</option>
            <option>Alaska</option>
            <option>California</option>
            <option>Delaware</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Washington</option>
          </select>
        </div>
      </div>
    );
  };

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
          OEMModelName: body["OEMModelName"],
          FuelType: body["FuelType"],
          OEMModelImage: body["OEMModelImage"],
          OEMModelPosition: body["OEMModelPosition"],
          OEMBrandId: body["OEMBrandId"],
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
    let files = removeDuplicates(arr, "OEMModelName");
    console.log(files);
    axios
      .post("/bulkInsertOemModel", {
        JSONData: files,
      })
      .then((suc) => console.log(suc))
      .catch((err) => console.log(err));
  };

  //bulk upload code above

  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog"></div>
    </div>
  );
}

const MapStateToProps = (state) => ({
  hello: console.log("state.createBatteryBrand ::", state.CreateBatteryBrand),
  BatteryBrand: state.CreateBatteryBrand,
});

const mapDispatchToProps = {
  CreateBatteryBrand: CreateBatteryBrand,
};

export default connect(MapStateToProps, mapDispatchToProps)(AlertBox);
