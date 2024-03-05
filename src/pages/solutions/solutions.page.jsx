import React from "react";

import image4 from "../../assets/home/image9.jpeg";
import image5 from "../../assets/home/image7.jpeg";
import image6 from "../../assets/home/image8.jpeg";
import image7 from "../../assets/home/image5.jpeg";
import SimpleBanner from "../../components/simple-banner/simple-banner.component";

import "./solutions.styles.scss";
const Solutions = () => {
  return (
    <div className="solutions-page">
      <SimpleBanner
        heading="Integrates with your Existing Security Technology"
        description="Our AI is able to use your existing security technology, and we will provide any supplemental cameras determined through an initial site assessment in order to provide the most optimal detection angles."
        backgroundImage={image4}
        large
      />
      <SimpleBanner
        dark
        backgroundImage={image6}
        heading="Threat Detected Phone Calls and Texts"
        description="As the threat is detected and verified in real time, we work within your protocols to send text notifications to customized groups and will call your first responders to support. "
      />

      <SimpleBanner
        nogap={true}
        heading="Data Security"
        description="No third party cloud or data service will handle any part of your data. We own and control each server that your video streams will flow through and be held on, and our parent company owns the data center itself. "
        backgroundImage={image7}
      />

      <SimpleBanner
        nogap={true}
        heading="Video Privacy"
        description="Our Threat Operations Team will only see live data streams that the software has detected as a threat. They will not have access to real-time no-threat video streams.  "
        backgroundImage={image5}
      />
    </div>
  );
};

export default Solutions;
