import React from "react";
import { AiFillEnvironment } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="nav-bar-custom">
      <Container>
        <Navbar.Brand href="#home">
          <AiFillEnvironment />
          <span className="web-name">Animalify</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#upload">Upload</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
