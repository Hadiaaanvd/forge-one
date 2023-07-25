import React from "react";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.styles.scss";
import PrimaryBtn from "../primary-btn/primary-btn.component";
const Navbarr = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-component">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link onClick={() => navigate("")}>Valiant Security</Nav.Link>
            <Nav.Link onClick={() => navigate("/gun-detection")}>
              Gun Detection
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/tailor-made-solutions")}>
              Tailormade Solutions
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/contact")}>Contact Us</Nav.Link>
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
