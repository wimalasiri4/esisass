import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row className="pt-4">
          <Col md={4} className="mb-4">
            <h5>Animalify</h5>
            <p>Go-to tool for accurate and informative animal identification.</p>
          </Col>
          <Col md={4} className="mb-4">
            <div className="d-flex justify-content-center align-items-center h-100">
              <a href="#" className="text-white mx-2">
                <FaFacebook />
              </a>
              <a href="#" className="text-white mx-2">
                <FaTwitter />
              </a>
              <a href="#" className="text-white mx-2">
                <FaInstagram />
              </a>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="d-flex justify-content-center align-items-center h-100">
              &copy; 2023
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
