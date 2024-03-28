import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './body2.module.css'; 
import jump from "./jump.png";
import jump2 from "./jump-right.jpg";

export default function Body2() {
  return (
    <>
      <div className={`${styles.top} justify-content-center container-fluid`}> 
        <div className="row">
          <div className="col-md-5 scroll">
            <img
              src={jump}
              className={`${styles.imgFluid } img-fluid ms-4 mx-auto pt-5 px-5`}
              alt="..."
            />
          </div>

          <div className="col-5">
            <img
              src={jump2}
              className={`${styles.imgFluid} ms-4 mx-auto pt-5 px-5`}
              alt="..."
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid "> {/* Main content section */}
        <div className="row  ">
          <div className="col-5 mt-2 ms-4">
            <h4 className={styles.videoInstruc}>
              <i className="fa-solid fa-circle-play"></i>&nbsp; Video Introduction
            </h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua utenim ad
              minim veniam quis occaecat proident.
            </p>
            <button className={styles.cta}>
              <span className={styles.hoverUnderlineAnimation}>
                LEARN MORE &nbsp;
                <i className="fa-solid fa-arrow-right fa-sm arrow-horizontal"></i>
              </span>
            </button>
          </div>

          <div className="col-md-5 ms-5 mt-2">
            <div className="container">
              <div className={styles.section}> {/* "Who We Are" section */}
                <h2>Who We Are</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
                  tellus laborum.
                </p>
                <span className={styles.arrow}>&#8594;</span>
              </div>
              <hr />

              <div className={styles.section}>
                <h2>Our Vision</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
                  tellus laborum.
                </p>
                <span className={styles.arrow}>&#8594;</span>
              </div>
              <hr />

              <div className={styles.section}> 
                <h2>Our Mission</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
                  tellus laborum.
                </p>
                <span className={styles.arrow}>&#8594;</span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}> {/* Bottom section with stars */}
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
