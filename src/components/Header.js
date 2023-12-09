import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import refresh from "../images/086-refresh.png";
import heart from "../images/heart.png";
import user from "../images/011-user.png";
import cart from "../images/035-shopping-cart.png";
import menu from "../images/menu-32.png";

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over <span className="highlite">200 EGP</span> &
                free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-white mb-0 text-end">
                Hotline:
                <a className="text-white" href="ter:+20 2222222222">
                  +20 2222222222
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>

            <div className="col-6">
              <div className="header-upper-links d-flex align-items-center justify-content-between ">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img src={refresh} alt="Compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src={heart} alt="Wishlist" />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="Login" />
                    <p className="mb-0">
                      Login <br /> Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">200 EGP</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bootm d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-5 d-imline-block">Shop Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
