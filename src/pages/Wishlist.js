import React from "react";
import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import Container from "../components/Container.js";

function Wishlist() {
	return (
		<>
			<Meta title={"Wishlist"} />
			<BreadCrumb title="Wishlist" />
			<Container class1="wishlist-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-3">
						<div className="wishlist-card position-relative">
							<img
								src="images/cancel-48px.png"
								alt="cancel"
								className="cancel position-absolute img-fluid"
							/>
							<div className="wishlist-card-image">
								<img
									src="images/Anker soundcore life 2 neo-1.png"
									className="img-256 img-fluid"
									alt=""
								/>
							</div>
							<div className="px-3 py-3">
								<h5 className="title">
									title title title title
								</h5>
								<h6 className="price">200 EGP</h6>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="wishlist-card position-relative">
							<img
								src="images/cancel-48px.png"
								alt="cancel"
								className="cancel position-absolute img-fluid"
							/>
							<div className="wishlist-card-image">
								<img
									src="images/Anker soundcore life 2 neo-1.png"
									className="img-256 img-fluid"
									alt=""
								/>
							</div>
							<div className="px-3 py-3">
								<h5 className="title">
									title title title title
								</h5>
								<h6 className="price">200 EGP</h6>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="wishlist-card position-relative">
							<img
								src="images/cancel-48px.png"
								alt="cancel"
								className="cancel position-absolute img-fluid"
							/>
							<div className="wishlist-card-image">
								<img
									src="images/Anker soundcore life 2 neo-1.png"
									className="img-256 img-fluid"
									alt=""
								/>
							</div>
							<div className="px-3 py-3">
								<h5 className="title">
									title title title title
								</h5>
								<h6 className="price">200 EGP</h6>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
export default Wishlist;
