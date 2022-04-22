import { useState, useEffect, useContext } from "react";

import { HousingContext } from "../Context/context.jsx";

import Error from "../Components/error404.jsx";

function Error404() {
	const { idAnnonce, setError404 } = useContext(HousingContext);

	/* Définition du titre de la page. */
	document.title = "404 - Kasa";

	useEffect(() => {
		if (idAnnonce) {
			setError404(false);
		}
		return () => setError404(false);
	}, [setError404, idAnnonce]);

	const [show, setShow] = useState(false);

	useEffect(() => {
		/* Définit un délai d'attente pour retarder l'affichage du composant de chargement. */
		const timeShow = setTimeout(() => {
			setShow(true);
		}, 10);
		return () => {
			clearTimeout(timeShow);
		};
	}, []);

	if (!show) {
		return null;
	}
	return <Error title="404" sub="Oups! La page que " sub2="vous demandez n'existe pas." />;
}

export default Error404;
