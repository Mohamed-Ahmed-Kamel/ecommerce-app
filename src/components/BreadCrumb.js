import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb(prop) {
	const { title } = prop;
	return (
		<>
			<div className="breadcrumb py-4 mb-0">
				<div className="container-xxl">
					<div className="row">
						<div className="col-12">
							<p className="text-center mb-0">
								<Link to="/" className="te xt-dark">
									Home &nbsp;
								</Link>
								/ {title}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default BreadCrumb;
