import React from "react";
import PrimaryRow from "./PrimaryRow";
import Tarjetas from "./Tarjetas";

function Main() {
	let categorias = [];
	for (let i = 1; i <= 6; i++) {
		categorias.push("Category " + i);
	}
	let row = {
		cardBorder : ["primary","success","warning"], /* sirve para titleColor */
		title : ["Products in Data Base","Amount in products","Users quantity"],
		amount : ["135","$546.456","38"],
		icon : ["fa-clipboard-list","fa-dollar-sign","fa-user-check"]
	}
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

				<PrimaryRow row={row} />
			

			<div className="row">
				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">
								Last product in Data Dase
							</h6>
						</div>
						<div className="card-body">
							<div className="text-center">
								<img
									className="img-fluid px-3 px-sm-4 mt-3 mb-4"
									src="./Images/product_dummy.svg"
									alt="producto dummy"
								/>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Dolores, consequatur explicabo officia inventore libero
								veritatis iure voluptate reiciendis a magnam, vitae, aperiam
								voluptatum non corporis quae dolorem culpa exercitationem
								ratione?
							</p>
							<a target="_blank" rel="nofollow" href="/">
								View product detail
							</a>
						</div>
					</div>
				</div>

				<div className="col-lg-6 mb-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h6 className="m-0 font-weight-bold text-primary">
								Categories in Data Base
							</h6>
						</div>
						<div className="card-body">
							<Tarjetas category={categorias} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
