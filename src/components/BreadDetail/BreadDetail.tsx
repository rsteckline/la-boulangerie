// BreadDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBreadsForCountry } from "../../apiCalls";
import "./BreadDetail.css";
import { BreadAttributes } from "../../apiTypes";

const BreadDetail = () => {
	const { id: countryName, breadId: breadName } = useParams<{
		id: string;
		breadId: string;
	}>();
	const [breadDetail, setBreadDetail] = useState<BreadAttributes | null>(null);

	useEffect(() => {
		if (countryName && breadName) {
			console.log(
				`Fetching bread detail for ${breadName} from ${countryName}...`
			);
			fetchBreadsForCountry(countryName)
				.then((data) => {
					console.log("Bread detail data:", data);
					const bread = data.breads.data.find(
						(bread) => bread.attributes.name === breadName
					);
					if (bread) {
						setBreadDetail(bread.attributes);
					} else {
						console.error(`Bread with name ${breadName} not found.`);
					}
				})
				.catch((error) => {
					console.error("Fetching error:", error);
				});
		}
	}, [countryName, breadName]);

	console.log("Bread detail:", breadDetail);

	if (!breadDetail) return <div>Loading...</div>;

	return (
		<div>
			<section className="BreadDetail">
				<h2>{breadDetail.name}</h2>
				<h3>{breadDetail.description}</h3>
			</section>
      <section className='recipeSection'>
        <div className="recipeDetail">
          <p><strong>Recipe:</strong> {breadDetail.recipe}</p>
        </div>
      </section>
		</div>
	);
};

export default BreadDetail;