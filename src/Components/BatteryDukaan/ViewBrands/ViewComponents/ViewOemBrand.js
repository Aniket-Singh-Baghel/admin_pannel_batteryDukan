import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../ViewScss/ViewGlobal.module.scss";
import axios from "../../../../Axios/AxiosConfig";
import { connect } from 'react-redux'
import { GetOemBrand, DeleteOemBrand } from '../../../../Store/Actions'

function ViewOemBrand(props) {
	console.log(props.OemBrand.data)
	    const [state, setstate] = useState();

	

	useEffect(() => {
		props.GetOemBrand()
	}, [])

	const onDeleteAction = (id) => {
		props.DeleteOemBrand(id)
	}
	

	let oemBrandTable;
	if (props.OemBrand.data){
	    oemBrandTable = props.OemBrand.data.map((details, index) =>{
	        return (
	            <tr key={index}>
	                <th scope="row">{index + 1}</th>
	                <td>{details["OEM-Brand"]}</td>
	                <td>
	                    {" "}
	                    <a href={details["Oem-Brand-Images"]} target="_blank">
	                        {details["Oem-Brand-Images"]}
	                    </a>
	                </td>
	                <td>{details["oemb"]}</td>
	                <td>
	                    <svg
						onClick={() => props.history.push(`/EditOEMBrand/${details.id}`)}
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
						<th scope="col">OEM Brand</th>
						<th scope="col">OEM Brand Images (url)</th>
						<th scope="col">oemb</th>
						<th scope="col">Action</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>{oemBrandTable}</tbody>
			</table>
		</div>
	);
}

const MapStateToProps = (state) => ({
	OemBrand: state.CreateOemBrand
})

const mapDispatchToProps = {
	GetOemBrand: GetOemBrand,
	DeleteOemBrand: DeleteOemBrand
  };

export default connect(MapStateToProps, mapDispatchToProps)(ViewOemBrand);
