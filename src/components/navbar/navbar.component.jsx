import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";
import PrimaryBtn from "../primary-btn/primary-btn.component";

import "./navbar.styles.scss";
const Navbarr = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-component">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand onClick={() => navigate("")}>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {/* <div className="navlinks"> */}
            <Nav.Link onClick={() => navigate("/")}>Forge1</Nav.Link>
            <Nav.Link onClick={() => navigate("/gun-detection")}>
              Gun Detection
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/tailor-made-solutions")}>
              Tailormade Solutions
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/contact")}>Contact Us</Nav.Link>
            {/* </div> */}
            <PrimaryBtn onClick={() => navigate("/contact")}>
              Request a Demo
            </PrimaryBtn>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbarr;
