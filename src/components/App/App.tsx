import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import BreadList from '../BreadList/BreadList';
import BreadDetail from '../BreadDetail/BreadDetail';
import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/breads" element={<BreadList />} />
          <Route path="/breads/:id" element={<BreadDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
