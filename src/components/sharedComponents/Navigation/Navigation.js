import React, { useContext } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ContextProvider } from "../../../App";
import logo from "../../../images/logo2.png";
import Loginmodal from "../../utilityComponents/LoginModal/LoginModal";
import "./Navigation.css";
const Navigation = () => {
  //context
  const [api, LoggedInUser, setLoggedInUser] = useContext(ContextProvider);
  const logOutHandler = () => {
    fetch(`${api}/authentication/logout`, {
      method: "get",
      credentials: "include", // <--- YOU NEED THIS LINE
    })
      .then(function (response) {
        if (response.status === 200) {
          setLoggedInUser({});
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
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
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            {LoggedInUser.role === 1 && (
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            )}

            {LoggedInUser.role === 2 && (
              <NavLink to="/students" className="nav-link">
                Students
              </NavLink>
            )}

            {LoggedInUser.role ? (
              <NavLink to="#" className="nav-link">
                <button className="btn btn-success" onClick={logOutHandler}>
                  Logout
                </button>
              </NavLink>
            ) : (
              <NavLink to="#" className="nav-link">
                <Loginmodal />
              </NavLink>
            )}
            {!LoggedInUser.role && (
              <NavLink to="/signup" className="nav-link">
                <button className="btn btn-outline-warning">Sign Up</button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
