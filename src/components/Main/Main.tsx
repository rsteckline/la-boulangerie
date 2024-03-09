import React from 'react';
import './Main.css';
import MapComponent from '../Map/Map';

const Main = () => {

  return (
    <div className="main h-screen w-screen flex justify-center items-center">
      <div className='map-wrapper flex flex-col h-[90%] w-[90%] items-center'>
        <h2 className='hover:animate-wiggle focus:animate-wiggle text-xl md:text-2xl lg:text-3xl pt-4 md:pt-14 lg:pt-15'>Select a country from our world bakery!</h2>
      <div className="map-background bg-[#E9CC61] shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.15)] w-[95%] flex justify-center mt-16 p-6 rounded-3xl lg:w-[60vw] xl:w-[50vw]">
        <div className="map-container w-full h-[60vh] overflow-hidden rounded-3xl">
          <MapComponent />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;