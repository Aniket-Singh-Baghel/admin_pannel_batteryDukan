import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <>
      {/* //{" "}
      <nav className={styles.nav}>
        // <h3>MyBatteryDukan</h3>
        //{" "}
      </nav> */}
      {/* <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="javascript:void(0)"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
      </nav> */}

      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="javascript:void(0)"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="javascript:void(0)" className="nav-link">
              <b> My Battery Dukan </b>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
