import React from "react";
import logo from './image.png';
import './footer.css';

function Footer() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-3 mx-2 mt-4 pt-2 request ">
            <h5 className="text-start">Office</h5>
            <p className="text-start mt-1">
              Jl. Raya Puputan No 142, Denpasar, Bali
            </p>
            <h5 className="text-start mt-2">Email</h5>
            <p className="text-start mb-2">support@domain.com</p>
            <h5>Phone</h5>
            <p className="text-start">(+62) 81115 3568</p>
          </div>

          <div className="col-md-3 text-start  align-left mt-2" style={{}}>
            <h5 className="text-center mb-2">Our Company</h5>

            <p className="mt-5 mb-2">About</p>

            <p className="mt-2 mb-2">Community</p>

            <p className="mt-2 mb-2">Careers</p>

            <p className="mt-2 mb-2">Testimonials</p>

            <p className="mt-2 mb-2">Services</p>

            <p className="mt-2 mb-2">Project</p>
          </div>

          <div className="col-md-3 text-start align-left mt-2">
            <h5 className="text-center mb-2">Quick Links</h5>

            <p className="mt-5 mb-2">Contact</p>

            <p className="mt-2 mb-2">Privacy Policy</p>

            <p className="mt-2 mb-2">FAQ's</p>

            <p className="mt-2 mb-2">Licensing</p>

            <p className="mt-2 mb-2">Help Center</p>

            <p className="mt-2 mb-2">Terms & Condition</p>
          </div>

          <div className="col-md-2 text-start align-left mt-2">
            <h5>Our Social Media</h5>
            <div className="social-icons">
              <a href="#">
                <button className="btn btn-primary">FACEBOOK</button>
              </a>
              <a href="#">
                <button className="btn btn-info">TWITTER</button>
              </a>
              <a href="#">
                <button className="btn btn-primary">LINKEDIN</button>
              </a>
              <a href="#">
                <button className="btn btn-danger">INSTAGRAM</button>
              </a>
              <a href="#">
                <button className="btn btn-danger">PINTEREST</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-md-4 d-flex ">
          
            <img src={logo} alt="logo" className="img-fluid" style={{ width: '20%' }} >

            </img>
            <p className="align-items-center d-bloc">Creative Design Agency.</p>
        </div>
        <div className="col-md-8 text-end">
          <p>
            &copy; Copyright 2023 Templatekit By Jegtheme. All rights reserved.
          </p>
        </div>
        </div>
      
    </>
  );
}

export default Footer;
