import React from 'react';
import './Main.css';
import MapComponent from '../Map/Map';

const Main = () => {

  return (
    <div className="main h-screen w-screen flex justify-center items-center">
      <div className='map-wrapper flex flex-col h-[90%] w-[90%] items-center'>
        <h2 className='text-xl md:text-2xl lg:text-3xl pt-4 md:pt-14 lg:pt-15'>Select a country from our world bakery</h2>
      <div className="map-background">
        <div className="map-container">
          <MapComponent />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;