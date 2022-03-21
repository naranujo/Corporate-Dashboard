import React from "react";

function PrimaryRow(props) {
	return (
		<div className="row">
			{props.row.title.map(function (data, idx) {
				return (
					<div className="col-md-4 mb-4" key={data + idx}>
						<div className={`card border-left-${props.row.cardBorder[idx]} shadow h-100 py-2`} key={props.row.cardBorder[idx] + idx}>
							<div className="card-body">
								<div className="row no-gutters align-items-center">
									<div className="col mr-2">
										<div className={`text-xs font-weight-bold text-${props.row.cardBorder[idx]} text-uppercase mb-1`} key={props.row.cardBorder[idx] + idx}>
											{props.row.title[idx]}
										</div>
										<div className="h5 mb-0 font-weight-bold text-gray-800" key={props.row.amount[idx] + idx}>
											{props.row.amount[idx]}
										</div>
									</div>
									<div className="col-auto" key={props.row.icon[idx] + idx}>
										<i className={`fas ${props.row.icon[idx]} fa-2x text-gray-300`} key={props.row.icon[idx] + idx}></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	);
};

export default PrimaryRow;