import React from "react";
import "./Main.css";
import MapComponent from "../Map/Map";

const Main = () => {
  return (
    <div className="main h-screen w-screen overflow-hidden flex justify-center items-center">
      <div className="map-wrapper flex flex-col h-[75%] w-full items-center">
        <h2 className="font-fattest text-[#563c2c] hover:animate-wiggle focus:animate-wiggle drop-shadow-2xl text-center p-2 text-3xl md:text-3xl lg:text-4xl pt-0 md:pt-2 lg:pt-3">
          Let's learn about bread - Select a region to get baking!
        </h2>
        <div className="map-background bg-[#e29c73] shadow-[0_.5rem_1.5rem_rgba(0,0,0,.75)] w-[95%] flex justify-center mt-6 md:mt-6 lg:mt-5 p-3 rounded-3xl lg:w-[60vw] xl:w-[50vw]">
          <div className="map-container w-full h-[65vh] overflow-hidden rounded-3xl">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
