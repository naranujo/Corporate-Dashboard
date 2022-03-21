import React from "react";

function Tarjetas(props) {
    return (
		<div className="row">
			{props.category.map((data,idx) => {
				return (
					<div className="col-lg-6 mb-4" key={data + idx}>
						<div className="card bg-info text-white shadow" key={data + idx}>
							<div className="card-body" key={data + idx}>
								{data}
							</div>
						</div>
					</div>
				)
			})}					
		</div>
	);
}

export default Tarjetas;