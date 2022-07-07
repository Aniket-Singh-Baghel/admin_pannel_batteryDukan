import React from "react";
import { withRouter } from "react-router-dom";


function Panel(props,history) {


    const stopShow = (e,address)=>{
        e.preventDefault();
		props.history.push(address)
    }

    return (
      <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{minHeight: "165vh"}}>
          <a
            href="javascript:"
            className="brand-link"
            style={{ textDecoration: "none" }}
          >
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span
              className="brand-text font-weight-light"
              style={{
                fontSize: "20px",
                pointerEvents: "none",
                color: "white",
              }}
            >
              Admin Panel
            </span>
          </a>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a
                  href="javascript:"
                  className="d-block"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    pointerEvents: "none",
                    color: "white",
                  }}
                >
                  Battery
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
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                      Masters
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/charts/chartjs.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Battery Brand</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/brand")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create Brand</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewBatteryBrand")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View Brand</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/charts/flot.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Battery Model</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/model")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create Model</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewBatteryModel")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View Model</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/charts/inline.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Secondary Name</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/secondaryName")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create Secondary</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewSecondaryName")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View Secondary</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/charts/uplot.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>OEM Brand</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/oem")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create OEM</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewOemBrand")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View OEM</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/charts/uplot.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>OEM Model</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/Oem_model")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create OEM Model</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewOemModel")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View OEM Model</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Category</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/category")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create Category</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewCategory")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View Category</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/icons.html" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>SubCategory</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/subcategory")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create SubCategory</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewSubcategory")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View SubCategory</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Scheme</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/scheme")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create Scheme</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewScheme")}
                        >
                          <a href="javasccript:" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View Scheme</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Group</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/group")}
                        >
                          <a href="pages/UI/sliders.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create Group</p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewGroup")}
                        >
                          <a href="pages/UI/sliders.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View Group</p>
                          </a>
                        </li>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:" className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Segment</p>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/segment")}
                        >
                          <a href="pages/UI/sliders.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Create Segment </p>
                          </a>
                        </li>
                        <li
                          className="nav-item"
                          onClick={(e) => stopShow(e, "/ViewSegment")}
                        >
                          <a href="pages/UI/sliders.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>View Segment</p>
                          </a>
                        </li>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="nav-item"
                  onClick={(e) => stopShow(e, "/AllDetails")}
                >
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie" />
                    <p>
                      View All Details
                    </p>
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
