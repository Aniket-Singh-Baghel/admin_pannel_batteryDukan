import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../ViewScss/ViewGlobal.module.scss";
import { GetSegment, DeleteSegment } from '../../../../Store/Actions'
import { connect } from 'react-redux'
import axios from '../../../../Axios/AxiosConfig';

function ViewSegment(props) {
    const [state, setstate] = useState();

	

	useEffect(() => {
		props.GetSegment()
	}, [])

	const onDeleteAction = (id) => {
		props.DeleteSegment(id)
	}
	

	let SegmentTable;
	if (props.Segment.data){
	    SegmentTable = props.Segment.data.map((details, index) =>{
	        return (
	            <tr key={index}>
	                <th scope="row">{index + 1}</th>
	                <td>{details["segmentName"]}</td>
	                <td>{details["segmentDesc"]}</td>
	                <td>
	                    {" "}
	                    <a href={details["segmentIcon"]} target="_blank">
	                        {details["segmentIcon"]}
	                    </a>
	                </td>
	                <td>{details["segmentPosition"]}</td>
	                <td>{details["segment brandName"]}</td>
	                <td>
	                    <svg
	                        onClick={() => props.history.push(`/EditSegment/${details.id}`)}
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
                    <th scope="col">segment Name</th>
                    <th scope="col">segment Desc</th>
                    <th scope="col">segment Icon(url)</th>
                    <th scope="col">segment Position</th>
                    <th scope="col">segment brandName</th>
					<th scope="col">Action</th>
					<th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>{SegmentTable}</tbody>
        </table>
    </div>
    )
}

const MapStateToProps = (state) => ({
	Segment: state.CreateSegment
})

const mapDispatchToProps = {
	GetSegment: GetSegment,
	DeleteSegment: DeleteSegment
  };

export default connect(MapStateToProps, mapDispatchToProps)(ViewSegment)
