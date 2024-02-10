import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBreadsForCountry } from "../../apiCalls";
import "./BreadDetail.css";
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
            <section className="BreadDetail">
                <h2>{breadDetail.name}</h2>
                <h3>{breadDetail.description}</h3>
                <img src={breadDetail.imageUrl} alt={breadDetail.name} className='breadImage'/>
            </section>
            <section className='recipeSection'>
                <div className="recipeDetail">
                    <h4>Ingredients</h4>
                    <ul>
                        {breadDetail.recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h4>Instructions</h4>
                    <ol>
                        {breadDetail.recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default BreadDetail;
