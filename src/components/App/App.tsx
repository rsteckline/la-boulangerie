import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import BreadList from '../BreadList/BreadList';
import BreadDetail from '../BreadDetail/BreadDetail';
import Error from "../Error/Error";
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/breads/:id" element={<BreadList />} />
          <Route path="/breads/:id/:breadId" element={<BreadDetail />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
