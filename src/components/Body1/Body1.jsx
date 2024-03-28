import React from "react";
import styles from "./body1.module.css";
import creative from "./creative.png";
import design from "./design.png";
import agency from "./agency.png";
import side from "./side-line.png";
import bottom from "./bottom.png";
import bottom2 from "./bottom2.png";

function Body1() {
  return (
    <>
      <div className={` conainer-fluid`} >
        <div className="row">
          <div className="col-md-6">
            <img src={creative} className={`ms-5 img-fluid ps-5 mx-2 pt-5 ${styles.imgResponsive}`} alt="..." />
            <img className={`ms-5 ps-5 img-fluid pt-1 ${styles.imgResponsive}`} src={design} alt="" />
            <img className={`ms-5 ps-5 img-fluid mx-2 pt-1 ${styles.imgResponsive}`} src={agency} alt="" />
          </div>
          <div className={` col d-flex justify-content-center mx-5}`}>
            <img className={`${styles.sideb}`} src={side} alt="" />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className={`${styles.btm} ${styles.imgResponsive} center col-md-4`}>
            <img
              src={bottom}
              className={`${styles.imgFluid} ms-4 mx-auto `}
              alt="..."
            />
          </div>
          <div className={`col-md-3 d-flex justify-content-center`}>
            <div className={styles.agencyHeader}>
              <p className={styles.agnt}>
                We are a creative design agency Specializing in crafting
                visually appealing and effective design solutions for clients
                across a variety of industries. Join us and create something
                extraordinary
              </p>
            </div>
          </div>
          <div className={`${styles.icons} d-flex justify-content-center col-md-2`}>
            <i className={`${styles.cir} fa-brands fa-facebook`}></i>
            <i className={`${styles.cir} fa-brands fa-twitter`}></i>
            <i className={`${styles.cir} fa-brands fa-youtube`}></i>
            <i className={`${styles.cir} fa-brands fa-instagram`}></i>
          </div>
        </div>
      </div>
      <div className={styles.botttom}>
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
        <li className={`${styles.rotatedItem}`}>
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
        <li className={` `}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
        <li className={` `}>
          <span className="">
            <i aria-hidden="true" className="fas fa-star-of-life"></i>{" "}
          </span>
          <span className="">LATEST WORKS</span>
        </li>
      </div>
    </>
  );
}

export default Body1;
