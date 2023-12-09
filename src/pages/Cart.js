import React from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import headphone1 from "../images/Anker soundcore life 2 neo-1.png";
import Container from "../components/Container.js";

function Cart() {
	return (
		<>
			<Meta title={"Cart"} />
			<BreadCrumb title="Cart" />
			<Container class1="cart-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-12">
						<div className="cart-header py-3 d-flex justify-content-between align-items-center">
							<h4 className="cart-col-1">Product</h4>
							<h4 className="cart-col-2">Price</h4>
							<h4 className="cart-col-3">Quantity</h4>
							<h4 className="cart-col-4">Total</h4>
						</div>
						<div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
							<div className="cart-col-1 d-flex gap-15 align-items-center">
								<div className="w-25">
									<img
										src={headphone1}
										className="img-fluid"
										alt="Product"
									/>
								</div>
								<div className="w-75">
									<p>title</p>
									<p>color: ddd</p>
									<p>size: ddd</p>
								</div>
							</div>
							<div className="cart-col-2">
								<h5 className="price">200 EGP</h5>
							</div>
							<div className="cart-col-3 d-flex align-items-center gap-15">
								<div>
									<input
										type="number"
										name=""
										id=""
										min={1}
										max={10}
										className="form-control"
									/>
								</div>
								<div>
									<MdDelete className="text-danger" />
								</div>
							</div>
							<div className="cart-col-4">
								<h5 className="price">200 EGP</h5>
							</div>
						</div>
					</div>
					<div className="col-12 py-2 mt-4">
						<div className="d-flex justify-content-between align-items-baseline">
							<Link to="/product" className="button">
								Continue To Shopping
							</Link>
							<div className="d-flex align-items-end flex-column">
								<h4>SubTotal: 1200 EGP</h4>
								<p>Taxes and shipping calculated</p>
								<Link to="/checkout" className="button">
									Checkout
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
export default Cart;
