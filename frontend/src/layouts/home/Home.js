import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutUs from "../../components/about-us/AboutUs";
import Carousal from "../../components/carousal/Carousal";
import GoogleMap from "../../components/google-map/GoogleMap";
import TitleMessage from "../../components/title-message/TitleMessage";
import UploadShow from "../../components/ImageComponents/UploadShow";

const Home = () => {
  const [imageFile, setImageFile] = useState([]);
  const [userLocation, setUserLocation] = useState({
    lat: null,
    lng: null,
  });
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (userLocation.lat !== null && userLocation.lng !== null) {
      setIsShow(true);
    }
  }, [userLocation]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleDeleteImage = () => {
    setImageFile([]);
  };
  
  return (
    <div>
      <Carousal />
      <TitleMessage/>
      <Container>
        <Row id="upload">
          <UploadShow
            imageFile={imageFile}
            setImageFile={setImageFile}
            handleDeleteImage={handleDeleteImage}
          />
        </Row>
        <Row className="mb-5">
          <Col xs={12} md={6}>
            {isShow && <GoogleMap userLocation={userLocation} zoomLevel={10} />}
          </Col>
          <Col xs={12} md={6}>
            <AboutUs />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
