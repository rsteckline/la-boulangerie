import React from 'react';
import './Main.css';
import MapComponent from '../Map/Map';
import { fetchBreadsForCountry } from '../../apiCalls';

const Main = () => {

  const testApiCall = (countryName: string) => {
    fetchBreadsForCountry(countryName)
      .then(data => {
        console.log('API call successful:', data);
      })
      .catch(error => {
        console.error('API call failed:', error);
      });
  };


  return (
    <div className="main">
      <div className="map-container">
        <MapComponent />
      </div>
      <button onClick={() => testApiCall('France')}>Test API Call for France</button>
    </div>
  );
};

export default Main;