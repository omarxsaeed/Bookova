/* eslint-disable react/button-has-type */
import React from "react";
import { NavLink } from "react-router-dom";
// import Nav from "react-bootstrap/Nav"
// eslint-disable-next-line import/no-extraneous-dependencies
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Nav.module.css";
// import styles from "../Footer/Footer.modules.css"
import logo from "../../images/Vector.png";

function Nav() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles["nav-bg"]}`}>
        <div className="container align-items-center">
          <div className="img-logo col-3 d-flex gap-3 align-items-center">
            <img src={logo} alt="" />
            <div>
              <h1 className={`${styles["nav-title"]}`}>BOOKOVA</h1>

              <p className={`${styles["nav-smallest"]}`}>EDUCATION</p>
            </div>
          </div>
          <div className="col-6 link-sec">
            <ul className={`d-flex gap-5 mb-0 ${styles["nav-links"]}`}>
              <li>
                <NavLink className={`${styles["link-active"]}`} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={`${styles["link-active"]}`} to="/">
                  About
                </NavLink>
              </li>
              <li>
                <NavDropdown
                  className={`${styles["link-active"]} nav-dropdown-light-example`}
                  title="Shop"
                  menuVariant="light"
                  to="/"
                >
                  <div className={`${styles["shop-list"]} row`}>
                    <div className="col-sm-4 p-4">
                      <h3>General</h3>
                      <NavDropdown.Item href="#">Short stories</NavDropdown.Item>
                      <NavDropdown.Item href="#">Adventure stories</NavDropdown.Item>
                      <NavDropdown.Item href="#">Novel</NavDropdown.Item>
                      <NavDropdown.Item href="#">Horror</NavDropdown.Item>
                      <NavDropdown.Item href="#">comics</NavDropdown.Item>
                    </div>
                    <div className="col-sm-4 pt-5">
                      <NavDropdown.Item href="#">Clasic</NavDropdown.Item>
                      <NavDropdown.Item href="#">Literary fiction</NavDropdown.Item>
                      <NavDropdown.Item href="#">Poetry</NavDropdown.Item>
                      <NavDropdown.Item href="#">Plays</NavDropdown.Item>
                      <NavDropdown.Item href="#">Thrillers</NavDropdown.Item>
                    </div>
                    <div className="col-sm-4 p-4">
                      <h3>Educational</h3>
                      <NavDropdown.Item href="#">Prep 3</NavDropdown.Item>
                      <NavDropdown.Item href="#">High school Junior</NavDropdown.Item>
                      <NavDropdown.Item href="#">High school sophomore</NavDropdown.Item>
                      <NavDropdown.Item href="#">High school senior</NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>
              </li>
              <li>
                <NavLink className={`${styles["link-active"]}`} to="/">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-3 d-flex justify-content-around">
            <button className={`${styles["login-btn"]} ${styles["nav-btn"]}`}>Login</button>
            <button className={`${styles["sign-btn"]} ${styles["nav-btn"]}`}>Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
