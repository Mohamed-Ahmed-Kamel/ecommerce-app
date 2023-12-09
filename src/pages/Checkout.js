import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import headphone1 from "../images/Anker soundcore life 2 neo-1.png";
import Container from "../components/Container.js";

function Checkout() {
	return (
		<>
			<Container class1="checkout-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-7">
						<div className="checkout-left-data">
							<h3 className="website-name">Dev Corner</h3>
							<nav
								style={{ "--bs-breadcrumb-divider": ">" }}
								aria-label="breadcrumb"
							>
								<ol className="breadcrumb">
									<li className="breadcrumb-item total-price">
										<Link to="/cart" className="text-dark">
											Cart
										</Link>
									</li>
									&nbsp; /
									<li
										className="breadcrumb-item total-price active"
										aria-current="page"
									>
										Information
									</li>
									&nbsp; /
									<li className="breadcrumb-item total-price active">
										Shipping
									</li>
									&nbsp; /
									<li
										className="breadcrumb-item total-price active"
										aria-current="page"
									>
										Payment
									</li>
								</ol>
							</nav>
							<h4 className="title total">Contact Information</h4>
							<p className="user-details total">
								Navdeep Dahiya (monud0232@gmail.com)
							</p>
							<h4 className="mb-3">Shipping Address</h4>
							<form
								action=""
								className="d-flex flex-wrap justify-content-between gap-15"
							>
								<div className="w-100">
									<select
										name=""
										className="form-control form-select"
										id=""
									>
										<option value="" selected disabled>
											Select Country
										</option>
									</select>
								</div>
								<div className="flex-grow-1">
									<input
										type="text"
										placeholder="First Name"
										className="form-control"
									/>
								</div>
								<div className="flex-grow-1">
									<input
										type="text"
										placeholder="Last Name"
										className="form-control"
									/>
								</div>
								<div className="w-100">
									<input
										type="text"
										placeholder="Address"
										className="form-control"
									/>
								</div>
								<div className="w-100">
									<input
										type="text"
										placeholder="Apartment, Suite, etc"
										className="form-control"
									/>
								</div>
								<div className="flex-grow-1">
									<input
										type="text"
										placeholder="City"
										className="form-control"
									/>
								</div>
								<div className="flex-grow-1">
									<select
										name=""
										className="form-control form-select"
										id=""
									>
										<option value="" selected disabled>
											Select State
										</option>
									</select>
								</div>
								<div className="flex-grow-1">
									<input
										type="text"
										placeholder="Zipcode"
										className="form-control"
									/>
								</div>
								<div className="w-100">
									<div className="d-flex justify-content-between align-items-center">
										<Link to="/cart" className="text-dark">
											<FaArrowLeftLong className="me-2" />
											Return to Cart
										</Link>
										<Link to="/cart" className="button">
											Continue to Shipping
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-5">
						<div className="border-bottom py-4">
							<div className="d-flex gap-10 mb-2 align-items-center">
								<div className="w-75 d-flex gap-10">
									<div className="w-25 position-relative">
										<span
											style={{
												top: "-10px",
												right: "2px",
											}}
											className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
										>
											1
										</span>
										<img
											src={headphone1}
											className="img-fluid"
											alt="product"
										/>
									</div>
									<div>
										<h5 className="total-price">dddd</h5>
										<p className="total-price">s / #dddd</p>
									</div>
								</div>
								<div className="flex-grow-1">
									<h5 className="total">200 EGP</h5>
								</div>
							</div>
						</div>
						<div className="border-bottom py-4">
							<div className="d-flex justify-content-between align-items-center">
								<p className="total">Subtotal</p>
								<p className="total-price">1200 EGP</p>
							</div>
							<div className="d-flex justify-content-between align-items-center">
								<p className="mb-0 total">Shipping</p>
								<p className="mb-0 total-price">1200 EGP</p>
							</div>
						</div>
						<div className="d-flex justify-content-between align-items-center border-bottom py-4">
							<h4 className="total">Total</h4>
							<h5 className="total-price">1200 EGP</h5>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
export default Checkout;
