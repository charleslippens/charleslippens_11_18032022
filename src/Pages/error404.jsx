import { useEffect, useContext } from "react";

import { HousingContext } from "../Context/context.jsx";

import Error from "../Components/error404.jsx";

function Error404() {
	const { idAnnonce, setError404 } = useContext(HousingContext);

	/* Setting the title of the page. */
	document.title = "404 - Kasa";

	useEffect(() => {
		if (idAnnonce) {
			setError404(false);
		}
		return () => setError404(false);
	}, [setError404, idAnnonce]);

	return (
		<Error title="404" subtitle="Oups! La page que " subtitle2="vous demandez n'existe pas." />
	);
}

export default Error404;
