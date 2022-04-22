import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { HousingContext } from "../Context/context.jsx";

import Gallery from "../Components/gallery.jsx";
import Tags from "../Components/tags.jsx";
import Collapse from "../Components/collapse.jsx";
import Ratings from "../Components/ratings.jsx";

import "../Styling/housing.css";

function Housing() {
	const { housings, setIdAnnonce, setError404 } = useContext(HousingContext);
	/* Obtention de l'identifiant de l'annonce à partir de l'URL. */
	const { housingId } = useParams();
	/* Recherche de l'annonce avec l'identifiant qui se trouve dans l'URL. */
	const thisHousing = housings.find((housing) => housing.id === housingId);

	useEffect(() => {
		setIdAnnonce(thisHousing);
		if (!thisHousing) {
			setError404(true);
		}
	}, [setIdAnnonce, setError404, thisHousing]);
	if (!thisHousing) {
		return null;
	} else {
		/* Division du nom de l'hôte en firstName et lastName. */
		const [firstName, lastName] = thisHousing.host.name.split(" ");
		document.title = thisHousing.title + " - Kasa";

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

					<div className="rating-host-wrapper">
						<Ratings rating={thisHousing.rating} />
						<div className="host-wrapper">
							<div className="host-name">
								{firstName}
								<br />
								{lastName}
							</div>
							<img
								className="host-picture"
								src={thisHousing.host.picture}
								alt="Host"
							/>
						</div>
					</div>
				</div>
				<div className="informations-wrapper">
					<Collapse title="Description" content={thisHousing.description} />
					<Collapse title="Équipements" content={thisHousing.equipments} />
				</div>
			</section>
		);
	}
}
export default Housing;
