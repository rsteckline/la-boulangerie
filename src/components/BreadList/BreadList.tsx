import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchBreadsForCountry } from "../../apiCalls";
import { BreadData, CountryData, ApiResponse } from "../../apiTypes";

const BreadList = () => {
  const { id: countryName } = useParams();
  const [breads, setBreads] = useState<BreadData[]>([]);
  const [country, setCountry] = useState<CountryData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (countryName) {
      fetchBreadsForCountry(countryName)
        .then((data: ApiResponse) => {
          setCountry(data.country.data);
          setBreads(data.breads.data);
        })
        .catch((error) => {
          navigate("/error");
        });
    }
  }, [countryName, navigate]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="BreadListWrapper text-center mt-8 mb-4 sm:mt-20 md:flex md:flex-row md:h-[100vh]">
      <div className="md:w-1/2 lg: font-fat">
        {" "}
        <h2 className="mb-4 sm:mb-6 text-xl md:text-3xl md:mb-2">
          Breads from {country.attributes.name}
        </h2>
        <p className="font-caveat sm:text-[1.2rem] mb-3 mx-6 md:text-xl">
          {" "}
          {country.attributes.overview}
        </p>
        <p className="font-caveat sm:text-[1.2rem] mb-5 mx-6 md:text-xl">
          {" "}
          {country.attributes.culinary}
        </p>
      </div>

      <section className="listSection flex justify-center items-center w-screen md:w-1/2 h-[calc(100vh_+_50px)] bg-[url('/public/shutterstock_1544878508.jpg')] overflow-y-auto bg-cover bg-no-repeat bg-center lg:h-[100vh] md:h-[100vh]">
        <div className="listDetail bg-[rgba(231,171,134,0.8)] h-fit w-4/5 flex items-center text-[x-large] justify-center pt-2 p-4 rounded-[65px] sm:text-opacity-20xl md:text-3xl lg:text-4xl">
          {" "}
          <ul className="list-none p-0">
            {breads.map((bread) => (
              <li className="mb-8 mx-0 my-2" key={bread.id}>
                <Link
                  className=" no-underline text-[black] font-caveat font-bold mb-4 hover:underline hover:text-[white]"
                  to={`/breads/${countryName}/${bread.attributes.name}`}
                >
                  {bread.attributes.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BreadList;
