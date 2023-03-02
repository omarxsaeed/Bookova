import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import SliderOfTrendingbooks from "./SliderOfTrendingbooks";
import styles from "./Slider.module.css";

function Trendingbooks() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios.get(`https://api.itbook.store/1.0/new`).then((res) => {
      setArr(res.data.books);
      console.log(res.data.books);
    });
  }, []);
  return (
    <div className={` d-flex justify-content-center ${styles["section-bg"]}`}>
      <div className="container">
        <Swiper
          navigation
          grabCursor
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={20}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {arr.map((item) => (
            <SwiperSlide key={item.isbn13}>
              <SliderOfTrendingbooks data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Trendingbooks;
