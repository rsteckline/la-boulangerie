import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBreadsForCountry } from "../../apiCalls";
import { BreadAttributes } from "../../apiTypes";

const BreadDetail = () => {
    const { id: countryName, breadId } = useParams<{ id: string; breadId: string; }>();
    const [breadDetail, setBreadDetail] = useState<BreadAttributes | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (countryName) {
            fetchBreadsForCountry(countryName)
                .then((data) => {
                    const bread = data.breads.data.find(bread => bread.attributes.name === breadId);
                    if (bread) {
                        setBreadDetail(bread.attributes);
                    } else {
                        navigate('/error'); // Redirect to error page
                    }
                })
                .catch((error) => {
                    navigate('/error'); // Redirect to error page
                });
        }
    }, [countryName, breadId, navigate]);

    if (!breadDetail) return <div>Loading...</div>;

    return (
        <div className='recipeWrapper'>
            <section className="BreadDetail font-abel text-center mt-6 mb-4 flex flex-col items-center sm:text-center sm:mt-16">
                <h2 className="font-satisfy text-[2rem] mb-4">{breadDetail.name}</h2>
                <h3 className="text-base mb-6 sm:text-xl sm:px-[10rem]">{breadDetail.description}</h3>
                <img src={breadDetail.imageUrl} alt={breadDetail.name} className='breadImage w-[300px] h-full rounded-[65px] sm:w-[502px]'/>
            </section>
            <section className="recipeSection w-screen h-[calc(100vh_+_120px)] bg-[url('/public/shutterstock\_174816359.jpg')] bg-cover bg-no-repeat bg-center flex absolute items-center justify-center sm:h-auto min-h-0 py-[17.5%]">
                <div className="recipeDetail font-abel bg-[rgba(231,171,134,0.7)] w-4/5 h-4/5 overflow-y-auto flex flex-col items-center text-base mx-auto my-0 pt-8 p-[1.7rem] rounded-[65px] sm:text-[1.2rem] sm:h-auto min-h-0 py-[10%]">
                    <h4 className="text-[black] pt-3 pb-1 sm:pb-5 sm:text-[1.7rem]">Ingredients</h4>
                    <ul className="sm:text-[1.3rem] sm:pb-5">
                        {breadDetail.recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h4 className="text-[black] pt-3 pb-1 sm:pb-3 sm:text-[1.7rem]">Instructions</h4>
                    <ol>
                        {breadDetail.recipe.instructions.map((instruction, index) => (
                            <li className="sm:text-[1.3rem] sm:pb-2" key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default BreadDetail;
