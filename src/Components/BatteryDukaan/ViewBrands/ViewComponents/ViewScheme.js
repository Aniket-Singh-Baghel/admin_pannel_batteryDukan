import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../ViewScss/ViewGlobal.module.scss";
import axios from '../../../../Axios/AxiosConfig';
import { GetScheme, DeleteScheme } from '../../../../Store/Actions'
import { connect } from 'react-redux'

function ViewScheme(props) {
    const [state, setstate] = useState();

	

	useEffect(() => {
		props.GetScheme()
	}, [])

	const onDeleteAction = (id) => {
		props.DeleteScheme(id)
	}
	

	let SchemeTable;
	if (props.Scheme.data){
	    SchemeTable = props.Scheme.data.map((details, index) =>{
	        return (
	            <tr key={index}>
	                <th scope="row">{index + 1}</th>
	                <td>{details["schemeName"]}</td>
	                <td>{details["schemeType"]}</td>
	                <td>{details["scheme description"]}</td>
	                <td>
	                    {" "}
	                    <a href={details["scheme url"]} target="_blank">
	                        {details["scheme url"]}
	                    </a>
	                </td>
	                <td>{details["scheme groups (comma seperated ids)"]}</td>
	                <td>
	                    <svg
						onClick={() => props.history.push(`/EditScheme/${details.id}`)}
	                       
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
        <div className={styles.main}>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">scheme Name</th>
                    <th scope="col">scheme Type</th>
                    <th scope="col">scheme description</th>
                    <th scope="col">scheme url</th>
                    <th scope="col">scheme groups</th>
					<th scope="col">Action</th>
					<th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>{SchemeTable}</tbody>
        </table>
    </div>
    )
}

const MapStateToProps = (state) => ({
	Scheme: state.CreateScheme
})

const mapDispatchToProps = {
	GetScheme: GetScheme,
	DeleteScheme: DeleteScheme
  };

export default connect(MapStateToProps, mapDispatchToProps)(ViewScheme)
