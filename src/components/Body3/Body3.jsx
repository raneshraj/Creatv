import React from "react";
import check from "./check.png";
import  "./body3.css";
import brand from "./brand.jpg";
import logo from "./logo.jpg";
import idus from "./idus.jpg";
import art from "./art.jpg";
import graph from "./graphic.jpg";
import website from "./website.jpg";
import talk from "./talk.png";

function Body3() {
  return (
    <>
      <div className="container-fluid justify-content-center mt-4 ">
        <div className="row">
          <div className="col-md-5 mx-auto mt-3">
            <img
              src={check}
              className="img-fluid ms-4 mx-auto pt-5 px-5"
              alt="..."
            />
          </div>

          <div className="col-4 ms-4 pt-5">
            <button className="gradient-button mt-4 text-end">MORE WORKS</button>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 mt-3">
            <div className="card">
              <img src={art} className="card-img-top" alt="Art Design" />
              <div className="card-body d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">Art Design</h5>
                  <p className="card-text ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <button href="#" className="btn btn-primary">
                  ABSTRACT
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <div className="card">
              <img src={logo} className="card-img-top" alt="Logo Design" />
              <div className="card-body d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">Logo Design</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  SKETCH
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 mt-3">
            <div className="card">
              <img src={idus} className="card-img-top" alt="Art Design" />
              <div className="card-body d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">Industrial Design</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  INDUSTRY
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <div className="card">
              <img src={brand} className="card-img-top" alt="Logo Design" />
              <div className="card-body d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">Brand Design</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  BRANDS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 mt-3">
            <div className="card">
              <img src={website} className="card-img-top" alt="Art Design" />
              <div className="card-body d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">Website Design</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  WEBSITE
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <div className="card">
              <img src={graph} className="card-img-top" alt="Logo Design" />
              <div className="card-body d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">Graphic Design</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  GRAPHIC
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 mt-3">
            <div className=" text-center ">
             <img src={talk} className="img-fluid mt-3 ms-4 mx-auto pt-5" alt="" />
            
              <button className="gradient-button mt-4 mx-5 px-2 start-end ">GET STARTED</button>
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

export default Body3;
