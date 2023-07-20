import React from "react";

import Banner from "../../components/banner/banner.component";
import MidBanner from "../../components/mid-banner/mid-banner.component";
import HomeSlider from "../../components/home-slider/home-slider.component";
import backgroundImage from "../../assets/banner.jpeg";
import image2 from "../../assets/home/image2.png";

import { imagesContent, imagesSlider } from "../../utils/sliderData";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-page">
      <Banner backgroundImage={backgroundImage} overlay={true} />
      <HomeSlider imagesContent={imagesContent} />
      <MidBanner gap backgroundImage={image2} overlay={true} />
      <HomeSlider imagesContent={imagesSlider} />
    </div>
  );
};

export default Home;
