import { useContext } from "react";

import { HousingContext } from "../Context/context.jsx";
import homeBanner from "../Assets/Home_banner.jpg";
import Cardhousing from "../Components/cardhousing.jsx";

import "../Styling/home.css";

function Home() {
	/* Définition du titre de la page. */
	document.title = "Accueil - Kasa";

	const { housings } = useContext(HousingContext);

	if (housings.length === 0) {
		return null;
	} else {
		return (
			<section className="home">
				<div className="banner">
					<img src={homeBanner} className="banner-img" alt="Banner" />
					<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
				</div>
				{housings && (
					<div className="cardhousing-wrapper">
						{housings.map((housing) => (
							//Utilisation de map() qui permet de prendre une liste de données et de la transformer en liste de composants
							//Pour chaque entrée du tableau on retourne un élément
							<Cardhousing
								// Utilisation de la prop key unique et stable
								// Utiliser l'id associée à la donnée title dans le JSON
								// identifie quels élements d'une liste ont changé, ont été ajoutés ou supprimés
								key={housing.id}
								link={`/housing/${housing.id}`}
								title={housing.title}
								cover={housing.cover}
							/>
						))}
						<div className="fill-empty-space"></div>
						<div className="fill-empty-space"></div>
					</div>
				)}
			</section>
		);
	}
}

export default Home;
