import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./footer.styles.scss";
const Footer = ({ gap, rotate }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`section-component ${rotate ? "rotate" : ""}`}
      style={{ marginTop: !gap ? "-100px" : 0 }}
    >
      <div className="border-top"></div>
      <div className="footer-component">
        <div className="container">
          <div className="logo-container">
            <img
              className="logo"
              onClick={() => navigate("/")}
              src={logo}
              alt=""
            />
            <span>info@valiantsecurity.net</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
