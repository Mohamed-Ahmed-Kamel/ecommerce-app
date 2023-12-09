import React from "react";
import {
  IoMdHome,
  IoMdCall,
  IoMdMail,
  IoMdInformationCircle,
} from "react-icons/io";

import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import Container from "../components/Container.js";

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.0399639006279!2d31.209854530197227!3d29.974835610796905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458464415555555%3A0x8a5812c4c200529b!2z2YXYr9ix2LPYqSDYp9mE2LnZhNinINis2KfYsdiv2YY!5e0!3m2!1sar!2seg!4v1700661345338!5m2!1sar!2seg"
              width="600"
              height="450"
              className="border:0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="form-control"
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
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <IoMdHome className="fs-5" />
                      <address className="mb-0">The address</address>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <IoMdCall className="fs-5" />
                      <a href="tel:+20 2222222222">+20 2222222222</a>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <IoMdMail className="fs-5" />
                      <a href="mailto:examle@gmail.com">examle@gmail.com</a>
                    </li>
                    <li className="d-flex align-items-center gap-15 mb-3">
                      <IoMdInformationCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
