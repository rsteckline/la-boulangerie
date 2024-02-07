import React from 'react';
import './Main.css';
import MapComponent from '../Map/Map';

const Main = () => {

  return (
    <div className="main">
      <div className="map-background">
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Main;