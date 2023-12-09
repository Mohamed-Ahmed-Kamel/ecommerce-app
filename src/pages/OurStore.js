import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import ProductCard from "../components/ProductCard.js";
import Color from "../components/Colors.js";
import Container from "../components/Container.js";

function OurStore() {
	const [grid, setGrid] = useState(4);
	return (
		<>
			<Meta title={"Our Store"} />
			<BreadCrumb title="Our Store" />
			<Container class1="store-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-3">
						<div className="filter-card mb-3">
							<h3 className="filter-title">Shop By Categories</h3>
							<div>
								<ul className="ps-0">
									<li>Watch</li>
									<li>TV</li>
									<li>Camera</li>
									<li>Laptop</li>
								</ul>
							</div>
						</div>
						<div className="filter-card mb-3">
							<h3 className="filter-title">Fillter By</h3>
							<div>
								<h5 className="sub-title">Availablity</h5>

								<div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id=""
										/>
										<lable
											className="form-check-lable"
											htmlFor=""
										>
											In Stock (1)
										</lable>
									</div>

									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value=""
											id=""
										/>
										<lable
											className="form-check-lable"
											htmlFor=""
										>
											Out of Stock (0)
										</lable>
									</div>
								</div>
								<h5 className="sub-title">Price</h5>
								<div className="d-flex align-items-center gap-10">
									<div className="form-floating">
										<input
											type="email"
											className="form-control"
											id="floatingInput"
											placeholder="Form"
										/>
										<label htmlFor="floatingInput">
											Form
										</label>
									</div>
									<div className="form-floating">
										<input
											type="email"
											className="form-control"
											id="floatingInput1"
											placeholder="To"
										/>
										<label htmlFor="floatingInput1">
											To
										</label>
									</div>
								</div>
								<h5 className="sub-title">Colors</h5>
								<div>
									<Color />
								</div>
								<h5 className="sub-title">Size</h5>
								<div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value="color-1"
											id=""
										/>
										<lable
											className="form-check-lable"
											htmlFor="color-1"
										>
											S (2)
										</lable>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											value="color-2"
											id=""
										/>
										<lable
											className="form-check-lable"
											htmlFor="color-2"
										>
											M (2)
										</lable>
									</div>
								</div>
							</div>
						</div>
						<div className="filter-card mb-3">
							<h3 className="filter-title">Products Tags</h3>
							<div>
								<div className="product-tags d-flex align-items-center gap-10">
									<span className="badge bg-light text-secondary rounded-3 py-2 px-3">
										HeadPhone
									</span>
									<span className="badge bg-light text-secondary rounded-3 py-2 px-3">
										Laptop
									</span>
									<span className="badge bg-light text-secondary rounded-3 py-2 px-3">
										Mobile
									</span>
									<span className="badge bg-light text-secondary rounded-3 py-2 px-3">
										Wire
									</span>
								</div>
							</div>
						</div>
						<div className="filter-card mb-3">
							<h3 className="filter-title">Random Product</h3>
							<div>
								<div className="random-products mb-3 d-flex">
									<div className="w-50">
										<img
											className="img-fluid"
											src="images/Apple Watch Ultra.png"
											alt="Watch"
										/>
									</div>
									<div className="w-50">
										<h5>
											Kids headphones bulk 10 pack multi
											colored for students
										</h5>
										<ReactStars
											count={5}
											size={24}
											value={4}
											edit={false}
											activeColor="#ffd700"
										/>
										<p>200 EGP</p>
									</div>
								</div>
								<div className="random-products d-flex">
									<div className="w-50">
										<img
											className="img-fluid"
											src="images/Apple Watch Ultra.png"
											alt="Watch"
										/>
									</div>
									<div className="w-50">
										<h5>
											Kids headphones bulk 10 pack multi
											colored for students
										</h5>
										<ReactStars
											count={5}
											size={24}
											value={4}
											edit={false}
											activeColor="#ffd700"
										/>
										<p>200 EGP</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-9">
						<div className="fillter-sort-grid mb-4">
							<div className="d-flex align-items-center justify-content-between">
								<div className="d-flex align-items-center gap-10">
									<p
										className="mb-0 d-block"
										style={{ width: "100px" }}
									>
										Sort By:
									</p>
									<select
										className="form-control form-select"
										name=""
										id=""
										defaultValue={"manual"}
									>
										<option value="manual">Featured</option>
										<option
											value="best-selling"
										>
											Best selling
										</option>
										<option value="title-ascending">
											Alphabetically, A-Z
										</option>
										<option value="title-descending">
											Alphabetically, Z-A
										</option>
										<option value="price-ascending">
											Price, low to high
										</option>
										<option value="price-descending">
											Price, high ot low
										</option>
										<option value="created-ascending">
											Date, old to new
										</option>
										<option value="created-descending">
											Date, new to old
										</option>
									</select>
								</div>
								<div className="d-flex align-items-center gap-10">
									<p className="totalProducts mb-0">
										21 Products
									</p>
									<div className="d-flex align-items-center gap-10 grid">
										<img
											onClick={() => {
												setGrid(2);
											}}
											src="images/grid4-48px.png"
											alt="grid"
										/>
										<img
											onClick={() => {
												setGrid(4);
											}}
											src="images/grid3-48px.png"
											alt="grid"
										/>
										<img
											onClick={() => {
												setGrid(6);
											}}
											src="images/grid2-48px.png"
											alt="grid"
										/>
										<img
											onClick={() => {
												setGrid(12);
											}}
											src="images/list-48px.png"
											alt="grid"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="products-list pb-5">
							<div className="d-flex gap-10 flex-wrap">
								<ProductCard grid={grid} />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
export default OurStore;
