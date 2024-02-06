// BreadList.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBreadsForCountry } from '../../apiCalls';
import './BreadList.css'; 
import { BreadData, CountryData, ApiResponse } from '../../apiTypes';

const BreadList = () => {
  const navigate = useNavigate();
  const { id: countryName } = useParams();
  const [breads, setBreads] = useState<BreadData[]>([]);
  const [country, setCountry] = useState<CountryData | null>(null);

  useEffect(() => {
    if (countryName) {
      fetchBreadsForCountry(countryName)
        .then((data: ApiResponse) => {
          setCountry(data.country.data);
          setBreads(data.breads.data);
        })
        .catch(error => {
          console.error("Fetching error:", error);
          navigate('/');
        });
    }
  }, [countryName, navigate]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="breadList">
      <h2>Breads from {country.attributes.name}</h2>
      <p>{country.attributes.description}</p>
      <ul>
        {breads.map(bread => (
          <li key={bread.id}>{bread.attributes.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BreadList;
