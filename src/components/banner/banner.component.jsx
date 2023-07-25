import React from "react";
import video1 from "../../assets/home/video.mp4";

import Overlay from "../overlay/overlay.component";

import "./banner.styles.scss";
const Banner = ({ backgroundImage, video, heading, description, nogap }) => {
  return (
    <div
      className="banner-component"
      style={{
        marginTop: nogap ? "-140px" : 0,
      }}
    >
      <div className="border"></div>
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Overlay />
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
        <svg className="section-divider-svg-clip">
          <clipPath id="section-divider" clipPathUnits="objectBoundingBox">
            <path
              className="section-divider-clip"
              d="M-1.006, 0.8280000000000001 L-1.006, 1 l0,0 c0.251,0 0.502,0 1.004,-0.172 l0,0.172l0,0 c0.251,0 0.502,0 1.004,-0.172 l0,0.172l0,0 c0.251,0 0.502,0 1.004,-0.172 l0,0.172 L2.0060000000000002, -1 L-1.006, -1 z"
            ></path>
          </clipPath>
        </svg>

        <div className="banner-content container">
          {heading ? (
            <div className="header-container">
              <div className="header">
                <h1> {heading} </h1>
                <div className="description"> {description} </div>
              </div>
              {video && (
                <div className="video">
                  <video width="500" height="400" controls>
                    <source src={video1} type="video/mp4" />
                  </video>
                  Actual Gun Detection Image from Forge One Camera during
                  Active-Shooter Demo Scenario
                </div>
              )}
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
