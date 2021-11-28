import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo2.png";
import Loginmodal from "../../utilityComponents/LoginModal/LoginModal";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar
      sticky="top"
      className="navigation bg-green py-3"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className=" d-flex flex-row align-items-center ">
          <Image src={logo} className="logo" rounded />
          <h3 className="ms-3">𝓒𝓢𝓔𝓒𝓤</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/Profile">Notices</Nav.Link>
            <Nav.Link href="/Profile">Results</Nav.Link>
            <Nav.Link href="/pricing">Dashboard</Nav.Link>
            <Nav.Link>
              <Loginmodal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
