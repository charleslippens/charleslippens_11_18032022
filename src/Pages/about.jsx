import aboutBanner from "../Assets/About_banner.jpg";

import Collapse from "../Components/collapse.jsx";

import "../Styling/about.css";

function About() {
	const aboutData = [
		{
			title: "Fiabilité",
			content:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
		},
		{
			title: "Respect",
			content:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			title: "Service",
			content:
				"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
		},
		{
			title: "Sécurité",
			content:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	];

	return (
		//Boucle sur le tableau aboutData et affiche chaque item comme un collapse
		<section className="about-section">
			<h1 className="banner">
				<img src={aboutBanner} className="banner-img about-banner" alt="Banner" />
			</h1>
			{aboutData.map((about, index) => (
				<Collapse
					title={about.title}
					content={about.content}
					key={`${about.title}-${index}`}
				/>
			))}
		</section>
	);
}

export default About;
