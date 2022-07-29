import React, { useEffect, useState } from "react";
import styles from "../ViewScss/ViewGlobal.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../../../Axios/AxiosConfig";
import { DeleteProductType, GetProductType } from "../../../../Store/Actions";
import { connect } from "react-redux";

function ViewProductType(props) {
  console.log(props);
  const [state, setstate] = useState("");

  useEffect(() => {
    props.GetProductType();
  }, []);

  const onDeleteAction = (id) => {
    props.DeleteProductType(id);
  };

  let ProductTypeTable;
  console.log(props);
  if (props.ProductType.data && props.ProductType.data.length > 0) {
    console.log(state);
    ProductTypeTable = props.ProductType.data.map((details, index) => {
      return (
        <tr key={index}>
          <td scope="row" style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {index + 1}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.typeName}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {" "}
            <a href={details.typeIcon} target="_blank">
              {details.typeIcon
                ? details.typeIcon.substring(0, 80)
                : details.typeIcon}
            </a>
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.typeDesc}
          </td>

          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.typePosition}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            <svg
              onClick={() =>
                props.history.push(`/EditProductType/${details.id}`)
              }
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
            </svg>
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
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
                <th>Type Name</th>
                <th>Type Icon</th>
                <th>Type Desc</th>
                <th>Type Position</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{ProductTypeTable}</tbody>
          </table>
          <div className="row mt-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => ({
  ProductType: state.CreateProductType,
});

const mapDispatchToProps = {
  GetProductType: GetProductType,
  DeleteProductType: DeleteProductType,
};

export default connect(MapStateToProps, mapDispatchToProps)(ViewProductType);
