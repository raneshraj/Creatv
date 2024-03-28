import React from "react";
import blog from "./blog.png";
import "./body5.css";
import fir from "./1.jpg";
import sec from "./2.jpg";
import thir from "./3.jpg";

function Body5() {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-6 ">
            <div className="sticky-md-top">
            <img
              src={blog}
              className="img-fluid  mx-auto d-block pt-5 px-5"
              alt="..."
            />
            <p className="text-start mx-5 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua utenim
              ad minim veniam quis.
            </p>
            <button className="gradient-button mx-5 mt-4 text-end">
              VIEW ALL BLOGS
            </button>
            </div>

           
          </div>

          <div className="col-md-6 ">
            <div class="container mt-5">
              <img
                src={fir}
                className="img-fluid fir mx-auto d-block pt-5"
                alt="..."
              />

              <h2 className="mt-3">
                Here comes the cost of consulting & creating a complex website
              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis....
              </p>
              <button className="cta mt-2">
                <span className="hoverUnderlineAnimation">
                  READ MORE &nbsp;
                  <i className="fa-solid fa-arrow-right fa-sm arrow-horizontal"></i>
                </span>
              </button>
            </div>

            <div class="container mt-5">
              <img
                src={sec}
                className="img-fluid fir mx-auto d-block pt-5"
                alt="..."
              />

              <h2 className="mt-3">
                The importance of design in every project you are working on{" "}
              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis....
              </p>
              <button className="cta mt-2">
                <span className="hoverUnderlineAnimation">
                  READ MORE &nbsp;
                  <i className="fa-solid fa-arrow-right fa-sm arrow-horizontal"></i>
                </span>
              </button>
            </div>
            <div class="container mt-5">
              <img
                src={thir}
                className="img-fluid fir mx-auto d-block pt-5"
                alt="..."
              />

              <h2 className="mt-3">
              The use of Artificial Intelligence in designs that will blow your mind              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis....
              </p>
              <button className="cta mt-2">
                <span className="hoverUnderlineAnimation">
                 
                  READ MORE &nbsp;
                  <i className="fa-solid fa-arrow-right fa-sm arrow-horizontal"></i>
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="bottom mb-4">
    
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

export default Body5;
