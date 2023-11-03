import React from "react";
import { Container } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="h-100 d-flex align-items-center ">
      <Container className="about-us">
        <div>
          <div>
            <div className={`text-image-grid`}>
              <div>
                <div className="text-image-grid-title">What is Animalify</div>
                <div className="text-image-grid-line"></div>
                <div className="text-image-grid-description">
                  Animalify is a cutting-edge AI-powered platform designed to
                  revolutionize animal recognition and identification. This
                  innovative tool leverages the power of artificial intelligence
                  to accurately identify and classify a wide range of animals,
                  making it an invaluable resource for researchers, wildlife
                  enthusiasts, and conservationists. Whether you're a wildlife
                  researcher, a nature enthusiast, or simply curious about the
                  animals you encounter, Animalify is your go-to tool for
                  accurate and informative animal identification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
