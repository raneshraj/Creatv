import React from "react";
import toge from "./together.png";
import "./body4.css";

function Body4() {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="sticky-md-top">
              <img
                src={toge}
                className="img-fluid mx-auto d-block pt-5 px-5"
                alt="..."
              />
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                utenim ad minim veniam quis.
              </p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="d-flex flex-column sidelist align-items-start mt-5">
              <h3>&#x2692; Perfect Sketching</h3>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                utenim ad minim.
              </p>
            </div>
            <hr />
            <div className="d-flex flex-column sidelist align-items-start mt-5">
              <h3>&#x1F5A5;Digital Prototyping</h3>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                utenim ad minim.
              </p>
            </div>
            <hr />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 offset-md-6">
            <div className="d-flex flex-column sidelist align-items-start">
              <h3> &#x1F3A8;Design System</h3>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                utenim ad minim.
              </p>
            </div>
            <hr />
            <div className="d-flex flex-column sidelist align-items-start mt-5">
              <h3> &#x1F4A1;Design Concept</h3>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                utenim ad minim.
              </p>
            </div>
            <hr />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 offset-md-6">
            <div className="d-flex flex-column sidelist align-items-start">
              <h3>&#x1F4D2; Brand Consultation</h3>

              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                utenim ad minim.
              </p>
            </div>
            <hr />

            <div className="d-flex flex-column sidelist align-items-start mt-5">
              <h3> &#x1F4F1;Mobile App Design</h3>

              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                utenim ad minim.
              </p>
            </div>
            <hr />
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-6 offset-md-6 request">
            <div className="d-flex flex-column align-items-center ">
              <h1 className="ms-4 mx-auto pt-5 px-5">
                {" "}
                Let’s request more services you need or start creating your next
                project with us.
              </h1>
              <button
                type="button ms-4 mx-auto pt-5 px-5"
                class="btn btn-light"
              >
                GET REQUEST
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
    
        <li className={``}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
        <li className={``}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
        <li className={``}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
        <li className={``}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
        <li className={``}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
        <li className={``}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
        <li className={``}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
      </div>
    </>
  );
}

export default Body4;
