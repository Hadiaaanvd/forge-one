import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./footer.styles.scss";
const Footer = ({ gap }) => {
  const navigate = useNavigate();

  return (
    <div
      className="section-component "
      style={{ marginTop: !gap ? "-100px" : 0 }}
    >
      <div className="border-top"></div>

      <div className="footer-component container">
        <div className="logo-container">
          <img
            className="logo"
            onClick={() => navigate("/")}
            src={logo}
            alt=""
          />
        </div>
        <div>
          <span>info@valiantsecurity.net</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
