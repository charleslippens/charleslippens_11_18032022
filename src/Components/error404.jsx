import { Link } from "react-router-dom";
import { useEffect } from "react";

import "../Styling/error404.css";

function Error404() {
	useEffect(() => {
		document.title = "404 - Kasa";
	}, []);

	return (
		<section className="err404">
			<h2 className="err404-title">404</h2>
			<p className="err404-subtitle">
				Oups! La page que <br className="err404-subtitle-br" />
				vous demandez n'existe pas.
			</p>
			<Link className="err404-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	);
}

export default Error404;
