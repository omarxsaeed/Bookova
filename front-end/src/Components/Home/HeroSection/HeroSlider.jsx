/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Image from "../../../images/book.jpg";
import styles from "./Hero.module.css";

function HeroSlider({ data }) {
  return (
    <div className={`${styles.container}`}>
      <img className="image-ver" src={Image} alt={data.title} />
    </div>
  );
}

export default HeroSlider;
