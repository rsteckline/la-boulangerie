import React from 'react';
import { useParams } from 'react-router-dom';
import './BreadDetail.css';

const BreadDetail = () => {
  const { id } = useParams();

  return (
    <div className="BreadDetail">
      <h2>Bread Name: {id}</h2>
      <p>Description of the bread...</p>

    </div>
  );
};

export default BreadDetail;