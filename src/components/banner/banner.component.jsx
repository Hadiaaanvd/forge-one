import React from "react";

import Overlay from "../overlay/overlay.component";

import "./banner.styles.scss";
const Banner = ({ backgroundImage, overlay, heading, description }) => {
  return (
    <div className="banner-component">
      <div className="border"></div>
      <div
        className="banner-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {overlay && <Overlay />}
        <svg className="section-divider-svg-clip">
          <clipPath
            id="section-divider-643dca23353a5d3c147cc37e"
            clipPathUnits="objectBoundingBox"
          >
            <path
              className="section-divider-clip"
              d="M2.0105, 0.856 L2.0105, 1 l0,0 c-0.25175,0 -0.5035,0 -1.007,-0.144 l0,0.144l0,0 c-0.25175,0 -0.5035,0 -1.007,-0.144 l0,0.144l0,0 c-0.25175,0 -0.5035,0 -1.007,-0.144 l0,0.144 L-1.0105, -1 L2.0105, -1 z"
            ></path>
          </clipPath>
        </svg>

        <div className="banner-content container">
          {heading ? (
            <div className="header">
              <h1> {heading} </h1>
              <div className="description"> {description} </div>
            </div>
          ) : (
            <h1>
              Preemptive Gun Detection for&nbsp;
              <span className="highlight">Schools</span> and&nbsp;
              <span className="highlight">Businesses</span>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
