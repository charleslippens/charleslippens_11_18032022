import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import housing from "../Data/logements.json";

import Gallery from "../Components/gallery.jsx";
import Tags from "../Components/tags.jsx";
import Collapse from "../Components/collapse.jsx";

import "../Styling/housing.css";

function Housing() {
	// Obtention de l'identifiant de l'annonce logement à partir de l'URL.
	let params = useParams();
	//Recherche de l'annonce logement avec l'identifiant qui se trouve dans l'URL.
	let housingFiltered = housing.filter((housing) => housing.id === params.housingId);
	console.log(housingFiltered);
	let thisHousing = housingFiltered[0];

	console.log(thisHousing);
	let navigate = useNavigate();

	useEffect(() => {
		if (thisHousing === undefined) {
			return navigate("/Err404");
		}
		document.title = thisHousing.title + " - Kasa";
	}, [thisHousing, navigate]);

	if (thisHousing === undefined) {
		return null;
	}

	return (
		<section>
			<Gallery images={thisHousing.pictures} />
			<div className="housing-info-globale-wrapper">
				<div className="housing-info-wrapper">
					<h2 className="housing-title">{thisHousing.title}</h2>
					<p className="housing-location">{thisHousing.location}</p>
					<div className="tags-wrapper">
						{thisHousing.tags.map((tag, index) => (
							//Utilisation de map() qui permet de prendre une liste de données et de la transformer en liste de composants
							//Pour chaque entrée du tableau on retourne un élément
							<Tags tagName={tag} key={`${tag}-${index}`} />
						))}
					</div>
				</div>

				<div className="informations-wrapper">
					<Collapse title="Description" content={thisHousing.description} />
					<Collapse title="Équipements" content={thisHousing.equipments} />
				</div>
			</div>
		</section>
	);
}

export default Housing;
