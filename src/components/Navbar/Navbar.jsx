import React from "react";
import styles from "./custom.module.css";
import logo from "./creatv-logo.png";

 function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-sm justify-content-end ${styles.navFirst}`}>
        <div className="container-fluid">
          <img
            className={styles.ank}
            src={logo}
            alt=""
            width="150"
            height="40"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`me-auto mb-2 justify-content-end navbar-nav`}>
              <li className={styles.navitem}>
                <a className="nav-link" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className={styles.navitem}>
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className={styles.navitem}>
                <a className="nav-link" href="#">
                  PROJECT
                </a>
              </li>
              <li className={`${styles.navitem} dropdown`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES+
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.navitem}>
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <i class="fa-solid fa-magnifying-glass"></i>
            <button className="gradient-button text-end">GET STARTED</button>

          </div>
        </div>
      </nav>
    </>
  );
}



export default Navbar;