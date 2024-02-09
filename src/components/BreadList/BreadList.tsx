// BreadList.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
    <div className="BreadListWrapper">
    <h2>Breads from {country.attributes.name}</h2>
    <p>{country.attributes.description}</p>
    <section className='listSection'>
      <div className='listDetail'>
    <ul>
        {breads.map(bread => (
          <li key={bread.id}>
            <Link to={`/breads/${countryName}/${bread.attributes.name}`}>
            {bread.attributes.name}</Link>
          </li>
        ))}
      </ul>
      </div>
      </section>
    </div>
  );
};

export default BreadList;
