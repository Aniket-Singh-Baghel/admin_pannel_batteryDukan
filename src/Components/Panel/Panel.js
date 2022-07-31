import React from "react";
import { withRouter } from "react-router-dom";

function Panel(props, history) {
  const stopShow = (e, address) => {
    e.preventDefault();
    props.history.push(address);
  };

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a
          href="javascript:void(0)"
          className="brand-link"
          style={{ textDecoration: "none" }}
        >
          <img
            src="../../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Admin Panel</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="../../dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a
                href="javascript:void(0)"
                className="d-block"
                style={{ textDecoration: "none" }}
              >
                My Battery
              </a>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <a href="javascript:void(0)" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Masters
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Battery Brand
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/brand")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Battery Brand</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewBatteryBrand")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Battery Brand</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Battery Model
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/model")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Battery Model</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewBatteryModel")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Battery Model Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Secondary Name
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/secondaryName")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Secondary</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewSecondaryName")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Secondary Details</p>
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        OEM Brand
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/oem")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create OEM Brand</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewOemBrand")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View OEM Brand Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        OEM Model
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/Oem_model")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create OEM Model</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewOemModel")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View OEM Model Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Category
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/category")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Category</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/viewCategory")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Category Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        SubCategory
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/SubCategory")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create SubCategory</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewSubCategory")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View SubCategory Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Product Dimension
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/productDimension")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Product Dimension</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewProductDimension")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Product Dimension Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Product Pricing
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/productPricing")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Product Pricing</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewProductPricing")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Product Pricing Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Product Type
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/productType")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Product Type</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewProductType")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Product Type Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Product Media
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/productMedia")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Product Media</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewProductMedia")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Product Media Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Scheme
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/scheme")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Scheme</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewScheme")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Scheme Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Group
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/group")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Group</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewGroup")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Group Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link">
                      <i className="nav-icon fas fa-circle" />
                      <p>
                        Segment
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/segment")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Create Segment</p>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={(e) => stopShow(e, "/ViewSegment")}
                      >
                        <a href="javascript:void(0)" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>View Segment Details</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="javascript:void(0)" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>View All Details</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default withRouter(Panel);
