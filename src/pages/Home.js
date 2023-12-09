import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard.js";
import ProductCard from "../components/ProductCard.js";
import SpecialProducts from "../components/SpecialProducts.js";
import Container from "../components/Container.js";
import { services } from "../utils/Data.js";

function Home() {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/apple-cart.png"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>
                  apple <br />
                  products.
                </h5>
                <p>85,000 EGP</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img
                  src="images/iphone15-cart.png"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale.</h4>
                  <h5>Iphone 15</h5>
                  <p>67,950 EGP</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/MacBook Air-cart.png"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>MacBook Air</h5>
                  <p>85,000 EGP</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/Apple Watch Ultra-cart.png"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Apple Watch<br /> Ultra</h5>
                  <p>39,500 EGP</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/headphone-cart.png"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>headphone</h5>
                  <p>85,000 EGP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((item, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={item.image} alt="servies" />
                    <div>
                      <h6>{item.title}</h6>
                      <p className="mb-0">{item.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img
                  className="icon"
                  src="images/Nikon d850-1.png"
                  alt="Camera"
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img className="icon" src="images/screen.png" alt="Smart TV" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img
                  className="icon"
                  src="images/Apple Watch Ultra.png"
                  alt="Smart Watches"
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img
                  className="icon"
                  src="images/arm.png"
                  alt="Music & Gaming"
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img
                  className="icon"
                  src="images/Nikon d850-1.png"
                  alt="Camera"
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img className="icon" src="images/screen.png" alt="Smart TV" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img
                  className="icon"
                  src="images/Apple Watch Ultra.png"
                  alt="Smart Watches"
                />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img
                  className="icon"
                  src="images/arm.png"
                  alt="Music & Gaming"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrappr-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper home-wrappr-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/Anker soundcore life 2 neo-card-black.png"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From 399EPG or 16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/iPhone 15 pro Max-card-light.png"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 units of brightness</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/iPhone 15 pro Max-card-light.png"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Smart Phones</h5>
                <h6 className="text-dark">Smart Phones 13 pro</h6>
                <p className="text-dark">
                  Now in Green. from 999.00EGP or 41.62EGP/mo. for 12 mo.
                  Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="images/iPhone 15 pro Max-card-light.png"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Home Speakers</h5>
                <h6 className="text-dark">Room-filling sound</h6>
                <p className="text-dark">
                  From 699EGP or 116.53EGP/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper home-wrappr-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
            <SpecialProducts />
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper home-wrappr-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-5 w-25">
                  <img src="images/brand/apple-64px.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand/canon-64px.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand/dell-64px.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand/huawei-64px.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand/samsung-64px.png" alt="brand" />
                </div>
                <div className="mx-5 w-25">
                  <img src="images/brand/sony-64px.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="belog-wrapper home-wrappr-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
