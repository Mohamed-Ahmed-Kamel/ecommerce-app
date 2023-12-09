import React from "react";
import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import Color from "../components/Colors.js";
import Container from "../components/Container.js";

function CompareProduct() {
	return (
		<>
			<Meta title={"Compare Product"} />
			<BreadCrumb title="Compare Product" />
			<Container class1="compare-product-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-3">
						<div className="compare-product-card position-relative">
							<img
								src="images/cancel-48px.png"
								alt="cancel"
								className="cancel position-absolute img-fluid"
							/>
							<div className="product-card-image">
								<img
									src="images/Anker soundcore life 2 neo-1.png"
									className="img-256"
									alt=""
								/>
							</div>
							<div className="compare-product-details">
								<h5 className="title">
									title title title title
								</h5>
								<h6 className="price mb-3 mt-3">200 EGP</h6>
								<div>
									<div className="product-detail">
										<h5>Brand:</h5>
										<p>Havels</p>
									</div>
									<div className="product-detail">
										<h5>Type:</h5>
										<p>Head Phone</p>
									</div>
									<div className="product-detail">
										<h5>Availablity:</h5>
										<p>In Stock</p>
									</div>
									<div className="product-detail">
										<h5>Color:</h5>
										<Color />
									</div>
									<div className="product-detail">
										<h5>Size:</h5>
										<div className="d-flex gap-10">
											<p>S</p>
											<p>M</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-3">
						<div className="compare-product-card position-relative">
							<img
								src="images/cancel-48px.png"
								alt="cancel"
								className="cancel position-absolute img-fluid"
							/>
							<div className="product-card-image">
								<img
									src="images/Anker soundcore life 2 neo-1.png"
									className="img-256"
									alt=""
								/>
							</div>
							<div className="compare-product-details">
								<h5 className="title">
									title title title title
								</h5>
								<h6 className="price mb-3 mt-3">200 EGP</h6>
								<div>
									<div className="product-detail">
										<h5>Brand:</h5>
										<p>Havels</p>
									</div>
									<div className="product-detail">
										<h5>Type:</h5>
										<p>Head Phone</p>
									</div>
									<div className="product-detail">
										<h5>Availablity:</h5>
										<p>In Stock</p>
									</div>
									<div className="product-detail">
										<h5>Color:</h5>
										<Color />
									</div>
									<div className="product-detail">
										<h5>Size:</h5>
										<div className="d-flex gap-10">
											<p>S</p>
											<p>M</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
export default CompareProduct;
