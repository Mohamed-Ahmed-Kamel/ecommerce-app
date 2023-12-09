import React from "react";
import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import Container from "../components/Container.js";

function RefundPolicy() {
	return (
		<>
			<Meta title={"Refund Policy"} />
			<BreadCrumb title="Refund Policy" />
			<Container class1="policy-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-12">
						<div className="policy"></div>
					</div>
				</div>
			</Container>
		</>
	);
}
export default RefundPolicy;
