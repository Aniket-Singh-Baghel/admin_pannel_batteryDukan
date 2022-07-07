import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../ViewScss/ViewGlobal.module.scss";
import { GetCategory, DeleteCategory } from "../../../../Store/Actions";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";

function ViewCategory(props) {
  console.log(props);
  const [state, setstate] = useState();

  useEffect(() => {
    props.GetCategory();
  }, []);

  const onDeleteAction = (id) => {
    props.DeleteCategory(id);
  };

  console.log(state);
  let CategoryTable;
  console.log(props.Category.data);
  if (props.Category.data) {
    CategoryTable = props.Category.data.map((details, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{details.categoryName}</td>
          <td>{details.categoryDesc}</td>
          <td>
            {" "}
            <a href={details.categoryIcon} target="_blank">
              {details.categoryIcon}
            </a>
          </td>
          <td>{details.categoryPosition}</td>
          <td>
            <svg
              onClick={() => props.history.push(`/EditCategory/${details.id}`)}
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
    <div class="content-wrapper" style={{backgroundColor:"white"}}>
      <div className={styles.main}>
        {/* <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">category Name</th>
              <th scope="col">category Desc</th>
              <th scope="col">category Icon (url)</th>
              <th scope="col">category Position</th>
              <th scope="col">Action</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{CategoryTable}</tbody>
        </table> */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">View Brand Category</h3>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">category Name</th>
                      <th scope="col">category Desc</th>
                      <th scope="col">category Icon (url)</th>
                      <th scope="col">category Position</th>
                      <th scope="col">Action</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CategoryTable}
                    {/* <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-success">Approved</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>219</td>
                      <td>Alexander Pierce</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-warning">Pending</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>657</td>
                      <td>Bob Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-primary">Approved</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>175</td>
                      <td>Mike Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-danger">Denied</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>134</td>
                      <td>Jim Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-success">Approved</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>494</td>
                      <td>Victoria Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-warning">Pending</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>832</td>
                      <td>Michael Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-primary">Approved</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr>
                    <tr>
                      <td>982</td>
                      <td>Rocky Doe</td>
                      <td>11-7-2014</td>
                      <td>
                        <span className="tag tag-danger">Denied</span>
                      </td>
                      <td>
                        Bacon ipsum dolor sit amet salami venison chicken flank
                        fatback doner.
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = (state) => ({
  Category: state.CreateCategory,
});

const mapDispatchToProps = {
  GetCategory: GetCategory,
  DeleteCategory: DeleteCategory,
};

export default connect(MapStateToProps, mapDispatchToProps)(ViewCategory);
