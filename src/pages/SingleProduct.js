import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import ProductCard from "../components/ProductCard.js";
import Color from "../components/Colors.js";
import Container from "../components/Container.js";

function SingleProduct() {
	const props = {
		width: 600,
		height: 600,
		zoomWidth: 600,
		img: "https://images.samsung.com/eg/galaxy-watch6/feature/galaxy-watch6-kv-pc.jpg",
	};
	const copyToClipboard = (text) => {
		console.log("text", text);
		var textField = document.createElement("textarea");
		textField.innerText = text;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand("copy");
		textField.remove();
	};
	const [orderedProduct, setOrderedProduct] = useState(true);
	return (
		<>
			<Meta title={"Product Name"} />
			<BreadCrumb title="Product Name" />
			<Container class1="main-product-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-6">
						<div className="main-product-image">
							<div>
								<ReactImageZoom {...props} />
							</div>
						</div>
						<div className="other-product-images d-flex flex-wrap gap-15">
							<div>
								<img
									src="https://images.samsung.com/eg/galaxy-watch6/feature/galaxy-watch6-kv-pc.jpg"
									className="img-fluid"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://images.samsung.com/eg/galaxy-watch6/feature/galaxy-watch6-kv-pc.jpg"
									className="img-fluid"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://images.samsung.com/eg/galaxy-watch6/feature/galaxy-watch6-kv-pc.jpg"
									className="img-fluid"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://images.samsung.com/eg/galaxy-watch6/feature/galaxy-watch6-kv-pc.jpg"
									className="img-fluid"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="main-product-details">
							<div className="border-bottom">
								<h3 className="title">
									Kids Headphones Bulk 10 Pack Multi Colored
									For Students
								</h3>
							</div>
							<div className="border-bottom py-3">
								<p className="price">200 EGP</p>
								<div className="d-flex align-items-center gap-10">
									<ReactStars
										count={5}
										size={24}
										value={4}
										edit={false}
										activeColor="#ffd700"
									/>
									<p className="mb-0 t-review">(2 Reviews)</p>
								</div>
								<a href="#review" className="review-btn">
									Write a Review
								</a>
							</div>
							<div className="py-3">
								<div className="d-flex gap-10 align-items-center my-2">
									<h3 className="product-heading">Type :</h3>
									<p className="product-data">Headphone</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-2">
									<h3 className="product-heading">Brand :</h3>
									<p className="product-data">Havels</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-2">
									<h3 className="product-heading">
										Category :
									</h3>
									<p className="product-data">Headphone</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-2">
									<h3 className="product-heading">Tags :</h3>
									<p className="product-data">Headphone</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-2">
									<h3 className="product-heading">
										Availablity :
									</h3>
									<p className="product-data">In Stock</p>
								</div>
								<div className="d-flex gap-10 flex-column mt-2 mb-3">
									<h3 className="product-heading">Size :</h3>
									<div className="d-flex flex-wrap gap-15">
										<span className="badge border border-1 text-dark border-secondary">
											S
										</span>
										<span className="badge border border-1 text-dark border-secondary">
											M
										</span>
										<span className="badge border border-1 text-dark border-secondary">
											XL
										</span>
										<span className="badge border border-1 text-dark border-secondary">
											XXL
										</span>
									</div>
								</div>
								<div className="d-flex gap-10 flex-column mt-2 mb-3">
									<h3 className="product-heading">Color :</h3>
									<Color />
								</div>
								<div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
									<h3 className="product-heading">
										Quantitiy :
									</h3>
									<div className="">
										<input
											type="number"
											name=""
											min={1}
											max={10}
											className="form-control"
											style={{ width: "70px" }}
											id=""
										/>
									</div>
									<div className="d-flex align-items-center gap-30 ms-5">
										<button
											className="button border-0"
											type="submit"
										>
											Add To Card
										</button>
										<button className="button signup">
											By In Now
										</button>
									</div>
								</div>
								<div className="d-flex align-items-center gap-15">
									<div>
										<a href="">
											<IoIosGitCompare className="fs-5 me-2" />
											Add to Compare
										</a>
									</div>
									<div>
										<a href="">
											<FaRegHeart className="fs-5 me-2" />
											Add to Wishlist
										</a>
									</div>
								</div>
								<div className="d-flex gap-10 flex-column my-3">
									<h3 className="product-heading">
										Shipping & Returns :
									</h3>
									<p className="product-data">
										Free shipping and returns available on
										all orders! <br />
										We ship all egy domestic orders within{" "}
										<b>5-10 dusiness days!</b>
									</p>
								</div>
								<div className="d-flex gap-10 align-items-center my-3">
									<h3 className="product-heading">
										Product Link :
									</h3>
									<a
										href="javascript:void(0);"
										onClick={() => {
											copyToClipboard(
												"https://images.samsung.com/eg/galaxy-watch6/feature/galaxy-watch6-kv-pc.jpg",
											);
										}}
									>
										Copy Product Link
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="description-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-12">
						<h4>Description</h4>
						<div className="bg-white p-3">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing, elit. Nihil nulla hic placeat
								exercitationem quam? Eius similique, expedita
								adipisci dolorem commodi, impedit qui omnis
								magnam quidem, ipsa sit deserunt repudiandae
								placeat.
							</p>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="reviews-wrapper home-wrapper-2">
				<div className="row">
					<div className="col-12">
						<h3 id="review">Reviews</h3>
						<div className="review-inner-wrapper">
							<div className="review-head d-flex justify-content-between align-items-end">
								<div>
									<h4 className="mb-2">Customer Reviews</h4>
									<div className="d-flex align-items-center gap-10">
										<ReactStars
											count={5}
											size={24}
											value={4}
											edit={false}
											activeColor="#ffd700"
										/>
										<p className="mb-0">
											Based on 2 Reviews
										</p>
									</div>
								</div>
								{orderedProduct && (
									<div>
										<a
											href=""
											className="text-dark text-decoration-underline"
										>
											Write a Review
										</a>
									</div>
								)}
							</div>
							<div className="review-form py-4">
								<h4>Write a Review</h4>
								<form
									action=""
									className="d-flex flex-column gap-15"
								>
									<div>
										<ReactStars
											count={5}
											size={24}
											value={4}
											edit={true}
											activeColor="#ffd700"
										/>
									</div>
									<div>
										<textarea
											name=""
											id=""
											cols="30"
											rows="4"
											placeholder="Comments"
											className="w-100 form-control"
										></textarea>
									</div>
									<div className="d-flex justify-content-end">
										<button className="button border-0">
											Submit Review
										</button>
									</div>
								</form>
							</div>
							<div className="reviews mt-4">
								<div className="review">
									<div className="d-flex gap-10 align-items-center">
										<h6 className="mb-0">Navdeep</h6>
										<ReactStars
											count={5}
											size={24}
											value={4}
											edit={false}
											activeColor="#ffd700"
										/>
									</div>
									<p className="mt-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Ex ab eius ut quae,
										odio dicta expedita nihil ullam
										voluptate repudiandae facilis dolorum
										sapiente obcaecati sequi autem possimus
										laudantium quas aperiam.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container class1="popular-wrapper home-wrappr-2 py-5">
				<div className="row">
					<div className="col-12">
						<h3 className="section-heading">
							Our Popular Products
						</h3>
					</div>
				</div>
				<div className="row">
					<ProductCard />
				</div>
			</Container>
		</>
	);
}
export default SingleProduct;
