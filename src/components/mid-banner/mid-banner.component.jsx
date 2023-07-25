import React from "react";

import "./mid-banner.styles.scss";

const MidBanner = ({ gap, backgroundImage, overlay, heading, description }) => {
  return (
    <div className={`mid-banner-component ${gap ? "gap" : ""}`}>
      <div className="border-top"></div>
      <div className="border-bottom"></div>
      <div className="curve-top"></div>
      <div
        className={`mid-banner overlay`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {overlay ? (
          <div className="text">
            Valiant Security is a Gun Detection as a Service Company. We work
            with your already existing cameras and supplement cameras as needed
            to build a
            <span className="highlight">
              &nbsp;Perimeter Controlled Gun Detection Space.
            </span>
            <div>
              Our AI Driven Technology will&nbsp;
              <span className="highlight"> search and detect</span> for guns
              around the perimeter. The Threat Operations team will confirm and
              will disperse proper notifications as determined by your security
              workflow needs.
            </div>
          </div>
        ) : (
          <div className="left-text container">
            <div className="heading">{heading}</div>
            <div className="description">{description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MidBanner;
