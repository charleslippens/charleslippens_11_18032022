import logements from "../../Data/logements.json";
import homeBanner from "../../Assets/Home_banner.jpg";
import Cardhousing from "../../Components/Cardhousing";

import "./style.css";

function Home() {
	return (
		<section className="home">
			<div className="banner">
				<img src={homeBanner} className="banner-img" alt="Banner" />
				<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
			</div>
			<div className="cardhousing-wrapper">
				{logements.map((logements) => (
					//Utilisation de map() qui permet de prendre une liste de données et de la transformer en liste de composants
					//Pour chaque entrée du tableau on retourne un élément
					<Cardhousing
						// Utilisation de la prop key unique et stable
						// Utiliser l'id associée à la donnée title dans le JSON
						// identifie quels élements d'une liste ont changé, ont été ajoutés ou supprimés
						key={`${logements.title}-${logements.id}`}
						link={`/logements/${logements.id}`}
						title={logements.title}
						cover={logements.cover}
					/>
				))}
				<div className="fill-empty-space"></div>
				<div className="fill-empty-space"></div>
			</div>
		</section>
	);
}

export default Home;
