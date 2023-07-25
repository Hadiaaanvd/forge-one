import React from "react";

import Banner from "../../components/banner/banner.component";
import MidBanner from "../../components/mid-banner/mid-banner.component";
// import backgroundImage from "../../assets/home/image9.jpeg";
import image1 from "../../assets/home/image4.jpeg";
import image2 from "../../assets/home/image6.jpeg";
import image3 from "../../assets/home/image1.png";
import "./detection.styles.scss";

const Detection = () => {
  return (
    <div className="detection-page">
      <Banner
        video
        dark
        heading="Detect"
        description="Our AI Driven Technology reviews live video streams for visible threats."
        backgroundImage={image3}
        large
      />
      <MidBanner
        dark
        backgroundImage={image2}
        heading="Confirm"
        description="Our Threat Operations Team will filter any false alarms and confirm real threats."
      />
      <div className="changez-index">
        <Banner
          nogap={true}
          heading="Notify"
          description="Our AI Driven Technology reviews live video streams for visible threats."
          backgroundImage={image1}
        />
      </div>
    </div>
  );
};

export default Detection;
