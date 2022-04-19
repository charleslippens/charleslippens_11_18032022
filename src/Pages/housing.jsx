import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";

import Gallery from "../Components/gallery.jsx";
import Tags from "../Components/tags.jsx";
import Collapse from "../Components/collapse.jsx";
import Ratings from "../Components/ratings.jsx";
import { AnnoncesContext } from "../services/context.jsx";

import "../Styling/housing.css";

function Housing() {
	const { logements, setIdAnnonce, setError404 } = useContext(AnnoncesContext);
	/* Getting the id of the annonce from the URL. */
	const { annonceId } = useParams();
	/* Looking for the annonce with the id that is in the URL. */
	const thisAnnonce = logements.find((annonce) => annonce.id === annonceId);

	useEffect(() => {
		setIdAnnonce(thisAnnonce);
		if (!thisAnnonce) {
			setError404(true);
		}
	}, [setIdAnnonce, setError404, thisAnnonce]);
	if (!thisAnnonce) {
		return null;
	} else {
		/* Splitting the name of the host into firstName and lastName. */
		const [firstName, lastName] = thisAnnonce.host.name.split(" ");
		document.title = thisAnnonce.title + " - Kasa";
		return (
			<section>
				<Gallery images={thisAnnonce.pictures} />
				<div className="housing-info-globale-wrapper">
					<div className="housing-info-wrapper">
						<h2 className="housing-title">{thisAnnonce.title}</h2>
						<p className="housing-location">{thisAnnonce.location}</p>
						<div className="tags-wrapper">
							{thisAnnonce.tags.map((tag, index) => (
								//Utilisation de map() qui permet de prendre une liste de données et de la transformer en liste de composants
								//Pour chaque entrée du tableau on retourne un élément
								<Tags tagName={tag} key={`${tag}-${index}`} />
							))}
						</div>
					</div>

					<div className="rating-host-wrapper">
						<Ratings rating={thisAnnonce.rating} />
						<div className="host-wrapper">
							<div className="host-name">
								{firstName}
								<br />
								{lastName}
							</div>
							<img
								className="host-picture"
								src={thisAnnonce.host.picture}
								alt="Host"
							/>
						</div>
					</div>
				</div>
				<div className="informations-wrapper">
					<Collapse title="Description" content={thisAnnonce.description} />
					<Collapse title="Équipements" content={thisAnnonce.equipments} />
				</div>
			</section>
		);
	}
}

export default Housing;
