import React from "react";
import Nav from "../Nav/Nav";
import Main from "./HeroSection/Hero";
import Services from "./OurServices/Services";
import Trendingbooks from "./TrendingBooks/Trendingbooks";
import Footer from "../Footer/Footer";
import styles from "./OurServices/Services.module.css";

function Home() {
  return (
    <div>
      <Nav />

      <Main />
      <br />
      <Services />
      <br />
      <br />
      <h3 className={`container ${styles["section-title"]}`}>Trending Books</h3>
      <Trendingbooks />
      <br />
      <h3 className={`container ${styles["section-title"]}`}>Recent Books</h3>

      <Trendingbooks />
      <Footer />
    </div>
  );
}

export default Home;
