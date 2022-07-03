import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Panel.module.scss";


function Panel(props,history) {


    const stopShow = (e,address)=>{
        e.preventDefault();
		props.history.push(address)
    }

    return (
      <aside className={styles.aside}>
        <span>Admin Panel</span>

        <div className={styles.parentDiv}>
          <h5>
            <i className="ri-battery-saver-line"></i>
            Battery
          </h5>
        </div>
        <label>
          <input type="checkbox" className={styles.click} />
          <section>
            <i className="ri-edit-circle-line"></i>
            Masters
          </section>
          {/* Brand */}
          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-box-fill"></i>
              Battery Brand
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/brand")}>Create Brand</h4>
              <h4 onClick={(e) => stopShow(e, "/ViewBatteryBrand")}>
                View batteryBrand
              </h4>
            </div>
          </label>

          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-circle-line"></i>
              Battery Model
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/model")}>Create Model</h4>
              <h4 onClick={(e) => stopShow(e, "/ViewBatteryModel")}>
                View Model
              </h4>
            </div>
          </label>

          {/* secondary Name */}
          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-circle-line"></i>
              Secondary Name
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/secondaryName")}>
                Create Secondary Name
              </h4>
              <h4 onClick={(e) => stopShow(e, "/ViewSecondaryName")}>
                View Secondary Name
              </h4>
            </div>
          </label>

          {/* OEM */}
          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-circle-line"></i>
              OEM Brand
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/oem")}>Create OEM</h4>
              <h4 onClick={(e) => stopShow(e, "/ViewOemBrand")}>View OEM</h4>
            </div>
          </label>

          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-circle-line"></i>
              OEM Model
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/Oem_model")}>Create OEM</h4>
              <h4 onClick={(e) => stopShow(e, "/ViewOemModel")}>View OEM</h4>
            </div>
          </label>

          {/* Category */}
          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-user-3-fill"></i>
              Category
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/category")}>Create category</h4>
              <h4 onClick={(e) => stopShow(e, "/ViewCategory")}>
                View category
              </h4>
            </div>
          </label>

          {/* subcategory */}
          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-circle-line"></i>
              Subcategory
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/subcategory")}>
                Create Subcategory
              </h4>
              <h4 onClick={(e) => stopShow(e, "/ViewSubCategory")}>
                View Subcategory
              </h4>
            </div>
          </label>

          {/* scheme */}
          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-box-fill"></i>
              Scheme
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/Scheme")}>Create Scheme</h4>
              <h4 onClick={(e) => stopShow(e, "/ViewScheme")}>View Scheme</h4>
            </div>
          </label>
          {/* Group */}
          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-circle-line"></i>
              Group
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/group")}>Create Group</h4>
              <h4 onClick={(e) => stopShow(e, "/ViewGroup")}>View Group</h4>
            </div>
          </label>
          {/* segment */}
          <label className={styles.opener2}>
            <input type="checkbox" />
            <section>
              <i className="ri-edit-circle-line"></i>
              Segment
            </section>
            <div className={styles.opener}>
              <h4 onClick={(e) => stopShow(e, "/segment")}>Create Segment</h4>
              <h4 onClick={(e) => stopShow(e, "/ViewSegment")}>View Segment</h4>
            </div>
          </label>
        </label>

        <label onClick={(e) => stopShow(e, "/AllDetails")}>
          <input type="checkbox" />
          <section>
            <i className="ri-edit-circle-line"></i>
            View All Details
          </section>
        </label>
      </aside>
    );
}

export default withRouter(Panel);
