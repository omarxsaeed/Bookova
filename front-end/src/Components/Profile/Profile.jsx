import React from "react";
import "./Profile.module.css";
import pic from "./imgs/profile.png";

function Profile() {
  return (
    <div className="my-5 mx-5" style={{ backgroundColor: "#69696959" }}>
      <div className="col-12 row">
        {/* <div className=""> */}
        <div className="aside col-3 text-center m-5 bg-light  rounded">
          <div>
            <img className="pro-img my-3 img-fluid" src={pic} alt="" />
            <h6>Hager Fathi</h6>
            <p>This is the good place | @gogioz</p>
            <div className="mb-3">
              <i className="bi bi-star-fill text-warning " />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star text-warning" />
            </div>
          </div>
          <hr style={{ border: "1px dashed #000", margin: "0" }} />
          <div className="info mx-2" style={{ textAlign: "start" }}>
            <p className="my-2">Contact Information</p>
            <p>Email Address:</p>
            <p>hagarfathi@outlook.com</p>
            <p>Phone Number:</p>
            <p>01030044662</p>
            <p>Address:</p>
            <p>7 Ahmed Kamel St. Faisel, Giza, Egypt</p>
          </div>
          <hr style={{ border: "1px dashed #000" }} />
        </div>
        {/* </div> */}
        <div className="col-8 text-center bg-light rounded my-5">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="allorders">
                      All Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="sold">
                      Sold
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="bought">
                      Bought
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="donated">
                      Donated
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Profile;
