import { Link } from "react-router-dom";

import "../Styling/error404.css";

function Error({
	/* Default values of the props. */
	title = "Erreur",
	subtitle = "Oops, une erreur est survenue.",
	subtitle2 = "",
}) {
	return (
		<section className="err404">
			<h1 className="err404-title">{title}</h1>
			<h2 className="err404-subtitle">
				{subtitle}
				{subtitle2 && <br className="err404-subtitle-br" />}
				{subtitle2 && subtitle2}
			</h2>
			<Link className="err404-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	);
}

export default Error;
