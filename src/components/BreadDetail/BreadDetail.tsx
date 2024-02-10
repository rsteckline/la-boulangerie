// BreadDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBreadsForCountry } from "../../apiCalls";
import "./BreadDetail.css";
import { BreadAttributes } from "../../apiTypes";

const BreadDetail = () => {
    const { id: countryName, breadId } = useParams<{
        id: string;
        breadId: string;
    }>();
    const [breadDetail, setBreadDetail] = useState<BreadAttributes | null>(null);

    useEffect(() => {
        if (countryName) {
            console.log(`Fetching bread detail for ${breadId} from ${countryName}...`);
            fetchBreadsForCountry(countryName)
                .then((data) => {
                    console.log("Bread detail data:", data);
                    const bread = data.breads.data.find(bread => bread.attributes.name === breadId);
                    if (bread) {
                        setBreadDetail(bread.attributes);
                    } else {
                        console.error(`Bread with ID ${breadId} not found.`);
                    }
                })
                .catch((error) => {
                    console.error("Fetching error:", error);
                });
        }
    }, [countryName, breadId]);

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
                    <p><strong>Recipe:</strong></p>
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
