import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../ViewScss/ViewGlobal.module.scss";
import { DeleteBatteryModel, GetBatteryModel } from "../../../../Store/Actions";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";

function ViewBatteryModel(props) {
  const [state, setstate] = useState();

  useEffect(() => {
    props.GetBatteryModel();
  }, []);

  const onDeleteAction = (id) => {
    props.DeleteBatteryModel(id);
  };

  let BatteryModelTable;
  console.log(props);
  if (props.BatteryModel.data && props.BatteryModel.data.length > 0) {
    BatteryModelTable = props.BatteryModel.data.map((details, index) => {
      return (
        <tr key={index}>
          <td scope="row" style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {index + 1}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.modelName}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.modelType}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.modelDesc}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.modelUrl}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.batteryBrand.brandName}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.group.groupName}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            <svg
              onClick={() =>
                props.history.push(`/EditBatteryModel/${details.id}`)
              }
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
            </svg>
          </td>
          <td>
            <svg
              onClick={() => onDeleteAction(details.id)}
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
            </svg>
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="content-wrapper" style={{ backgroundColor: "white" }}>
      <div className={styles.main}>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Model Name</th>
                <th>Model Type</th>
                <th>Model Desc</th>
                <th>Model Url</th>
                <th>Model Brand Name</th>
                <th>Model Group Name</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{BatteryModelTable}</tbody>
          </table>
          {/* <div className="row mt-3">
            <div className="col-sm-12 col-md-5">
              <div
                className="dataTables_info"
                id="example2_info"
                role="status"
                aria-live="polite"
              >
                Showing 1 to 10 of 57 entries
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div
                className="dataTables_paginate paging_simple_numbers"
                id="example2_paginate"
              >
                <ul className="pagination">
                  <li
                    className="paginate_button page-item previous disabled"
                    id="example2_previous"
                  >
                    <a
                      href="#"
                      aria-controls="example2"
                      data-dt-idx="0"
                      tabI="0"
                      className="page-link"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="paginate_button page-item active">
                    <a
                      href="#"
                      aria-controls="example2"
                      data-dt-idx="1"
                      tabI="0"
                      className="page-link"
                    >
                      1
                    </a>
                  </li>
                  <li className="paginate_button page-item ">
                    <a
                      href="#"
                      aria-controls="example2"
                      data-dt-idx="2"
                      tabI="0"
                      className="page-link"
                    >
                      2
                    </a>
                  </li>
                  <li className="paginate_button page-item ">
                    <a
                      href="#"
                      aria-controls="example2"
                      data-dt-idx="3"
                      tabI="0"
                      className="page-link"
                    >
                      3
                    </a>
                  </li>
                  <li className="paginate_button page-item ">
                    <a
                      href="#"
                      aria-controls="example2"
                      data-dt-idx="4"
                      tabI="0"
                      className="page-link"
                    >
                      4
                    </a>
                  </li>
                  <li className="paginate_button page-item ">
                    <a
                      href="#"
                      aria-controls="example2"
                      data-dt-idx="5"
                      tabI="0"
                      className="page-link"
                    >
                      5
                    </a>
                  </li>
                  <li className="paginate_button page-item ">
                    <a
                      href="#"
                      aria-controls="example2"
                      data-dt-idx="6"
                      tabI="0"
                      className="page-link"
                    >
                      6
                    </a>
                  </li>
                  <li
                    className="paginate_button page-item next"
                    id="example2_next"
                  >
                    <a
                      href="#"
                      aria-controls="example2"
                      data-dt-idx="7"
                      tabI="0"
                      className="page-link"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => ({
  BatteryModel: state.CreateBatteryModel,
});

const mapDispatchToProps = {
  GetBatteryModel: GetBatteryModel,
  DeleteBatteryModel: DeleteBatteryModel,
};

export default connect(MapStateToProps, mapDispatchToProps)(ViewBatteryModel);
