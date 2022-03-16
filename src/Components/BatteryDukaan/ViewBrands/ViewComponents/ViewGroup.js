import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../ViewScss/ViewGlobal.module.scss";
import { GetGroup, DeleteGroup } from '../../../../Store/Actions'
import { connect } from "react-redux";

function ViewGroup(props) {
	console.log(props)
    const [state, setstate] = useState("");

	
	useEffect(() => {
		props.GetGroup()
        setstate(props.Group.data)
	}, [])

    if(state){
        console.log(state)
    }

	const onDeleteAction = (id) => {
		props.DeleteGroup(id)
	}

	
	let GroupTable;
	if (props.Group.data){
	    GroupTable = props.Group.data.map((details, index) =>{
	        return (
	            <tr key={index}>
	                <th scope="row">{index + 1}</th>
	                <td>{details.GroupName}</td>
	                <td>{details["GroupDesc"]}</td>
	                <td>
	                    {" "}
	                    <a href={details.GroupIcon} target="_blank">
	                        {details.GroupIcon}
	                    </a>
	                </td>
	                <td>{details.GroupBasedOn}</td>
	                <td>
	                    <svg
						onClick={() => props.history.push(`/EditGroup/${details.id}`)}
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
                    <th scope="col">Group Name</th>
                    <th scope="col">Group Description</th>
                    <th scope="col">Group Icon(Url)</th>
                    <th scope="col">Group Based On</th>
                    <th scope="col">Action</th>
					<th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>{GroupTable}</tbody>
        </table>
    </div>
    )
}

const MapStateToProps = (state) => ({
	Group: state.CreateGroupReducer
})

const mapDispatchToProps = {
	GetGroup,
	DeleteGroup
  };

export default connect(MapStateToProps, mapDispatchToProps)(ViewGroup)
