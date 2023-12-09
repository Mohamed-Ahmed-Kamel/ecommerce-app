import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import blog from "../images/1.png";
import Container from "../components/Container.js";

function SingleBlog() {
	return (
		<>
			<Meta title={"Dynamic Blog Name"} />
			<BreadCrumb title="Dynamic Blog Name" />
			<Container class1="blog-wrapper home-wrapper-2 py-5">
				<div className="row">
					<div className="col-12">
						<div className="single-blog-card">
							<Link
								to="/blogs"
								className="d-flex align-items-center gap-10"
							>
								<FaArrowLeftLong className="fs-4" /> Go back to
								Blogs
							</Link>
							<h3 className="title">
								A Beautiful Sunday Morning Renaissance
							</h3>
							<img
								src={blog}
								className="img-fluid w-100 my-4"
								alt="blog"
							/>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Reiciendis alias, expedita
								nesciunt recusandae repudiandae molestias iste,
								cumque assumenda. Aspernatur ex incidunt cum
								ratione debitis asperiores, reprehenderit.
								Consequatur fugiat autem perspiciatis!
							</p>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
export default SingleBlog;
