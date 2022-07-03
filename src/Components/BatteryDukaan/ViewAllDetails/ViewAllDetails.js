import React from 'react'
import styles from "./ViewAllDetails.module.scss"
import property from "../../../../src/bulk.json"
import { withRouter } from 'react-router';

function ViewAllDetails(props) {
  const stopShow = (e, address) => {
    e.preventDefault();
    props.history.push(address);
  };
  return (
    <>
      <div className={styles.main}>
        <span className={styles.title}> View All Details </span>
        <div className={styles.allProperty}>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <p>Primary name</p>
              <p className={styles.value}>{property[0].primaryName}</p>
            </div>
            <div className={styles.inner}>
              <p>Secondary Name</p>
              <p className={styles.value}>{property[0].secondaryName}</p>
            </div>
          </div>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <p>Brand Name</p>
              <p className={styles.value}>{property[0].brandName}</p>
            </div>
            <div className={styles.inner}>
              <p>Model Name</p>
              <p className={styles.value}>{property[0].modelName}</p>
            </div>
          </div>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <p>Category Name</p>
              <p className={styles.value}>{property[0].categoryName}</p>
            </div>
            <div className={styles.inner}>
              <p>Segment Name</p>
              <p className={styles.value}>{property[0].segmentName}</p>
            </div>
          </div>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <p>MRP Value</p>
              <p className={styles.value}>
                {"₹ " + property[0]["mrp (value)"]}
              </p>
            </div>
            <div className={styles.inner}>
              <p>Warranty Period</p>
              <p className={styles.value}>
                {property[0]["warranty (value)"]}
                <span> {property[0]["warranty (unit)"]}</span>
              </p>
            </div>
          </div>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <p>Size</p>
              <p className={styles.value}>
                ({property[0]["width (value)"]}*
                <span>{property[0]["height (value)"]}</span>*
                {property[0]["length (value)"]}) {property[0]["width( unti)"]}
              </p>
            </div>
            <div className={styles.inner}>
              <p>Brand Position </p>
              <p className={styles.value}>{property[0].brandPosition}</p>
            </div>
          </div>
        </div>
        <button onClick={(e) => stopShow(e, "/showAll")}>
          Show All Details
        </button>
      </div>
    </>
  );
}

export default withRouter(ViewAllDetails)