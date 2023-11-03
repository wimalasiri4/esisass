import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/slider-1.jpg";
import Slide2 from "../../assets/img/carousal/slider-2.jpg";
import Slide3 from "../../assets/img/carousal/slider-3.jpg";
import ScrollDown from "../scroll-down/ScrollDown";
import "./Carousal.css";

const Carousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default Carousal;
