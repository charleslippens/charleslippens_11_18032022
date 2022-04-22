import { Link } from "react-router-dom";

import "../Styling/error404.css";

function Error({ /* Valeurs par défaut des props. */ title = "", sub = "", sub2 = "" }) {
	return (
		<section className="err404">
			<h1 className="err404-title">{title}</h1>
			<h2 className="err404-subtitle">
				{sub}
				{sub2 && <br className="err404-subtitle-br" />}
				{sub2 && sub2}
			</h2>
			<Link className="err404-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	);
}

export default Error;
