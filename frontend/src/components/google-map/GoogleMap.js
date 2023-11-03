import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { GOOGLE_MAP_API_KEY } from "../../utils/Constants";
import "./GoogleMap.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const GoogleMap = ({ userLocation, zoomLevel }) => {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultCenter={userLocation}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={userLocation.lat}
            lng={userLocation.lng}
            text={"Your current location"}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;
