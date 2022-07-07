import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../ViewScss/ViewGlobal.module.scss";
import { GetSegment, DeleteSegment } from "../../../../Store/Actions";
import { connect } from "react-redux";
import axios from "../../../../Axios/AxiosConfig";

function ViewSegment(props) {
	const [state, setstate] = useState();

	useEffect(() => {
		props.GetSegment();
	}, []);

	const onDeleteAction = id => {
		props.DeleteSegment(id);
	};

	let SegmentTable;
	console.log(props);
	if (props.Segment.data) {
		console.log(props.Segment.data.data);
		SegmentTable = props.Segment.data.map((details, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{details.segmentName}</td>
					<td>{details.segmentDesc}</td>
					<td> <a target="_blank" href={details.segmentIcon}>{details.segmentIcon}</a> </td>
					<td>{details.segmentPosition}</td>
					<td>{details.batteryBrand.brandName}</td>
					<td>
						<svg
							onClick={() =>
								props.history.push(`/EditSegment/${details.id}`)
							}
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
			<div className="card">
				<div className="card-header">
					<h3 className="card-title">
						Segment Details
					</h3>
				</div>

				<div className="card-body">
					<div
						id="example2_wrapper"
						className="dataTables_wrapper dt-bootstrap4"
					>
						<div className="row">
							<div className="col-sm-12 col-md-6"></div>
							<div className="col-sm-12 col-md-6"></div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<table
									id="example2"
									className="table table-bordered table-hover dataTable dtr-inline table-striped"
									aria-describedby="example2_info"
								>
									<thead>
										<tr>
											<th>S.No</th>
											<th>segment Name</th>
											<th>segment Desc</th>
											<th>segment Icon(url)</th>
											<th>segment Position</th>
											<th>segment brandName</th>
											<th>Action</th>
											<th>Delete</th>
										</tr>
									</thead>
									<tbody>
										{SegmentTable}
									</tbody>
									<tfoot>
										<tr>
											<th rowSpan="1" colSpan="1">
												Rendering engine
											</th>
											<th rowSpan="1" colSpan="1">
												Browser
											</th>
											<th rowSpan="1" colSpan="1">
												Platform(s)
											</th>
											<th rowSpan="1" colSpan="1">
												Engine version
											</th>
											<th rowSpan="1" colSpan="1">
												CSS grade
											</th>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-5">
								<div
									className="dataTables_info"
									id="example2_info"
									role="status"
									aria-live="polite"
								>
									Showing 1 to 10 of 57 entries
								</div>
							</div>
							<div className="col-sm-12 col-md-7">
								<div
									className="dataTables_paginate paging_simple_numbers"
									id="example2_paginate"
								>
									<ul className="pagination">
										<li
											className="paginate_button page-item previous disabled"
											id="example2_previous"
										>
											<a
												href="#"
												aria-controls="example2"
												data-dt-idx="0"
												tabI="0"
												className="page-link"
											>
												Previous
											</a>
										</li>
										<li className="paginate_button page-item active">
											<a
												href="#"
												aria-controls="example2"
												data-dt-idx="1"
												tabI="0"
												className="page-link"
											>
												1
											</a>
										</li>
										<li className="paginate_button page-item ">
											<a
												href="#"
												aria-controls="example2"
												data-dt-idx="2"
												tabI="0"
												className="page-link"
											>
												2
											</a>
										</li>
										<li className="paginate_button page-item ">
											<a
												href="#"
												aria-controls="example2"
												data-dt-idx="3"
												tabI="0"
												className="page-link"
											>
												3
											</a>
										</li>
										<li className="paginate_button page-item ">
											<a
												href="#"
												aria-controls="example2"
												data-dt-idx="4"
												tabI="0"
												className="page-link"
											>
												4
											</a>
										</li>
										<li className="paginate_button page-item ">
											<a
												href="#"
												aria-controls="example2"
												data-dt-idx="5"
												tabI="0"
												className="page-link"
											>
												5
											</a>
										</li>
										<li className="paginate_button page-item ">
											<a
												href="#"
												aria-controls="example2"
												data-dt-idx="6"
												tabI="0"
												className="page-link"
											>
												6
											</a>
										</li>
										<li
											className="paginate_button page-item next"
											id="example2_next"
										>
											<a
												href="#"
												aria-controls="example2"
												data-dt-idx="7"
												tabI="0"
												className="page-link"
											>
												Next
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const MapStateToProps = state => ({
	Segment: state.CreateSegment,
});

const mapDispatchToProps = {
	GetSegment: GetSegment,
	DeleteSegment: DeleteSegment,
};

export default connect(MapStateToProps, mapDispatchToProps)(ViewSegment);
