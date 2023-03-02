import React from "react";
import styles from "./Services.module.css";
import read from "../../../images/read.png";
import audio from "../../../images/audio.png";
import pick from "../../../images/pick.png";

function Services() {
  return (
    <div className=" container ">
      <h3 className={`d-flex justify-content-start ${styles["section-title"]}`}>Our Services</h3>
      <div className="row align-middle ">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className={`card ${styles["service-card"]}`}>
            <div className="card-body row p-4">
              <img className={`col-sm-3 ${styles.icon}`} src={read} alt="" />
              <div className="col-sm-9">
                <h5 className={`card-title ${styles["service-title"]}`}>Read Free Online Books</h5>
                <p className={`card-text ${styles["service-details"]}`}>
                  Millions of books available through controlled Digital Lending
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className={`card ${styles["service-card"]}`}>
            <div className="card-body row  p-4">
              <img className={`col-sm-3 ${styles.icon}`} src={pick} alt="" />
              <div className="col-sm-9">
                <h5 className={`card-title ${styles["service-title"]}`}>Be your own Librarian </h5>
                <p className={`card-text ${styles["service-details"]}`}>
                  You can add your used Books & Borrow New ones from our Vast Library
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className={`card ${styles["service-card"]}`}>
            <div className="card-body row  p-4">
              <img className={`col-sm-3 ${styles.icon}`} src={audio} alt="" />
              <div className="col-sm-9">
                <h5 className={`card-title ${styles["service-title"]}`}>Try out our audio Books</h5>
                <p className={`card-text ${styles["service-details"]}`}>
                  Find your favorite Books and listen to them while working on laptop or while driving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
