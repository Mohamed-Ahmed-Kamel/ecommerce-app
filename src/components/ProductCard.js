import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wishlist from "../images/wishlist-32px.png";
import headphone1 from "../images/Anker soundcore life 2 neo-1.png";
import headphone2 from "../images/Anker soundcore life 2 neo-2.png";
import compare from "../images/compare-32px.png";
import view from "../images/view-32px.png";
import card from "../images/shopping-bag-32px.png";

function ProductCard(props) {
	const { grid } = props;
	let location = useLocation();
	return (
		<>
			<div
				className={` ${
					location.pathname == "/product" ? `gr-${grid}` : "col-3"
				} `}
			>
				<Link
					to={`${
						location.pathname == "/"
							? "/product/:id"
							: location.pathname == "/product/:id"
							? "/product/:id"
							: ":id"
					}`}
					className="product-card position-relative"
				>
					<div className="wishlist-icon position-absolute">
						<button className="border-0 bg-transparent">
							<img src={wishlist} alt="wishlist" />
						</button>
					</div>
					<div className="product-image d-flex align-items-center justify-content-center">
						<img
							className="img-fluid"
							src={headphone1}
							alt="Product image"
						/>
						<img
							className="img-fluid"
							src={headphone2}
							alt="Product image"
						/>
					</div>
					<div className="product-details">
						<h6 className="brand">Havels</h6>
						<h5 className="product-title">
							Kids headphones bulk 10 pack multi colored for
							students
						</h5>
						<ReactStars
							count={5}
							size={24}
							value={4}
							edit={false}
							activeColor="#ffd700"
						/>
						<p
							className={` description ${
								grid === 12 ? "d-block" : "d-none"
							}`}
						>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Quidem officia atque voluptas, accusamus
							voluptatem ad nostrum quia, id nemo dolores
							explicabo totam necessitatibus molestias, cumque
							natus dolorem nulla aut molestiae!
						</p>
						<p className="price">100 EGP</p>
					</div>
					<div className="action-bar position-absolute">
						<div className="d-flex flex-column gap-15">
							<button className="border-0 bg-transparent">
								<img src={compare} alt="add to card" />
							</button>
							<button className="border-0 bg-transparent">
								<img src={view} alt="add to card" />
							</button>
							<button className="border-0 bg-transparent">
								<img src={card} alt="add to card" />
							</button>
						</div>
					</div>
				</Link>
			</div>
			<div
				className={` ${
					location.pathname == "/product" ? `gr-${grid}` : "col-3"
				} `}
			>
				<Link
					to={`${
						location.pathname == "/"
							? "/product/:id"
							: location.pathname == "/product/:id"
							? "/product/:id"
							: ":id"
					}`}
					className="product-card position-relative"
				>
					<div className="wishlist-icon position-absolute">
						<Link>
							<img src={wishlist} alt="wishlist" />
						</Link>
					</div>
					<div className="product-image d-flex align-items-center justify-content-center">
						<img
							className="img-fluid"
							src={headphone1}
							alt="Product image"
						/>
						<img
							className="img-fluid"
							src={headphone2}
							alt="Product image"
						/>
					</div>
					<div className="product-details">
						<h6 className="brand">Havels</h6>
						<h5 className="product-title">
							Kids headphones bulk 10 pack multi colored for
							students
						</h5>
						<ReactStars
							count={5}
							size={24}
							value={4}
							edit={false}
							activeColor="#ffd700"
						/>
						<p
							className={` description ${
								grid === 12 ? "d-block" : "d-none"
							}`}
						>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Unde rerum quo laboriosam beatae, ut doloribus
							quisquam voluptatibus necessitatibus ipsam et quae
							vitae delectus nobis earum iure culpa minima fuga
							odio.
						</p>
						<p className="price">100 EGP</p>
					</div>
					<div className="action-bar position-absolute">
						<div className="d-flex flex-column gap-15">
							<button className="border-0 bg-transparent">
								<img src={compare} alt="add to card" />
							</button>
							<button className="border-0 bg-transparent">
								<img src={view} alt="add to card" />
							</button>
							<button className="border-0 bg-transparent">
								<img src={card} alt="add to card" />
							</button>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}

export default ProductCard;
