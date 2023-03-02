import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import HeroSlider from "./HeroSlider";
import styles from "./Hero.module.css";
import Image from "../../../images/book.jpg";

function Main() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios.get(`https://api.itbook.store/1.0/new`).then((res) => {
      setArr(res.data.books);
      console.log(res.data.books);
    });
  }, []);
  return (
    <div className={`${styles["main-section"]}`}>
      <div className=" row">
        <div className={`${styles.overlay}`} />
        <div className={`${styles["library-l"]} col-sm-5 d-block  -flex align-items-center`}>
          <div className={`${styles["hero-head"]}`}>
            <h1 className={`${styles["main-title"]}`}>
              Welcome to <span className={`${styles.word}`}> BOOKOVA </span>Library
            </h1>
            <p className={`${styles["main-p"]}`}>
              Lorem ipsum dolor sit amet, Ipsum consectetuer adipiscing eslint
            </p>
            <button className={`${styles["seemore-btn"]}`} type="button">
              See more
            </button>
          </div>
        </div>
        <div className={`${styles["hero-slider"]} auto-slider col-sm-7 mr-0`}>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {arr.map((item) => (
                <div className={`carousel-item active ${styles["main-section"]}`}>
                  <img src={Image} className="d-block w-100" alt="..." key={item.isbn13} data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
