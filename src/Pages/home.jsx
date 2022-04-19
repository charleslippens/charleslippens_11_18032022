import { useContext } from "react";
import { AnnoncesContext } from "../services/context.jsx";
import homeBanner from "../Assets/Home_banner.jpg";
import Cardhousing from "../Components/cardhousing.jsx";

import "../Styling/home.css";

function Home() {
	document.title = "Accueil - Kasa";
	const { logements } = useContext(AnnoncesContext);
	if (logements.length === 0) {
		return null;
	} else {
		return (
			<section className="home">
				<div className="banner">
					<img src={homeBanner} className="banner-img" alt="Banner" />
					<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
				</div>
				{logements && (
					<div className="cardhousing-wrapper">
						{logements.map((logement) => (
							//Utilisation de map() qui permet de prendre une liste de données et de la transformer en liste de composants
							//Pour chaque entrée du tableau on retourne un élément
							<Cardhousing
								// Utilisation de la prop key unique et stable
								// Utiliser l'id associée à la donnée title dans le JSON
								// identifie quels élements d'une liste ont changé, ont été ajoutés ou supprimés
								key={logement.id}
								link={`/annonce/${logement.id}`}
								title={logement.title}
								cover={logement.cover}
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
