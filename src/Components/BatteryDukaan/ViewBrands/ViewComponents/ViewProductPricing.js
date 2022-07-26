import React, { useEffect, useState } from "react";
import styles from "../ViewScss/ViewGlobal.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../../../Axios/AxiosConfig";
import {
  DeleteProductPricing,
  GetProductPricing,
} from "../../../../Store/Actions";
import { connect } from "react-redux";

function ViewProductPricing(props) {
  console.log(props);
  const [state, setstate] = useState("");

  useEffect(() => {
    props.GetProductPricing();
  }, []);

  const onDeleteAction = (id) => {
    props.DeleteProductPricing(id);
  };

  let ProductPricingTable;
  console.log(props.ProductPricing);
  if (props.ProductPricing) {
    console.log(state);
    ProductPricingTable = props.ProductPricing.data.map((details, index) => {
      return (
        <tr key={index}>
          <td scope="row" style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {index + 1}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
              {" "}
              <a href={details.mrpIcon} target="_blank">
                {details.mrpIcon
                  ? details.mrpIcon.substring(0, 80)
                  : details.mrpIcon}
              </a>
            </td>
            {/* {details.PricingName} */}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.mrpUnit}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.mrpValue}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
              {" "}
              <a href={details.mopIcon} target="_blank">
                {details.mopIcon
                  ? details.mopIcon.substring(0, 80)
                  : details.mopIcon}
              </a>
            </td>
            {/* {details.PricingName} */}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.mopUnit}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.mopValue}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
              {" "}
              <a href={details.dpIcon} target="_blank">
                {details.dpIcon
                  ? details.dpIcon.substring(0, 80)
                  : details.dpIcon}
              </a>
            </td>
            {/* {details.PricingName} */}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.dpUnit}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.dpValue}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
              {" "}
              <a href={details.nlcIcon} target="_blank">
                {details.nlcIcon
                  ? details.nlcIcon.substring(0, 80)
                  : details.nlcIcon}
              </a>
            </td>
            {/* {details.PricingName} */}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.nlcUnit}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            {details.nlcValue}
          </td>
          <td style={{ border: "1px solid rgb(206, 206, 206)" }}>
            <svg
              onClick={() =>
                props.history.push(`/EditProductPricing/${details.id}`)
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
                <th>Mrp Icon</th>
                <th>Mrp Unit</th>
                <th>Mrp Value</th>
                <th>Mop Icon</th>
                <th>Mop Unit</th>
                <th>Mop Value</th>
                <th>dp Icon</th>
                <th>dp Unit</th>
                <th>dp Value</th>
                <th>nlc Icon</th>
                <th>nlc Unit</th>
                <th>nlc Value</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{ProductPricingTable}</tbody>
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
  hello: console.log(
    "state.CreateProductPricing:: ",
    state.CreateProductPricing
  ),
  ProductPricing: state.CreateProductPricing,
});

const mapDispatchToProps = {
  GetProductPricing: GetProductPricing,
  DeleteProductPricing: DeleteProductPricing,
};

export default connect(MapStateToProps, mapDispatchToProps)(ViewProductPricing);
