import React from "react";
import ReactDOM from "react-dom";
import Routing from "./services/router.jsx";

import { HousingProvider } from "./Context/context.jsx";

/* Rendu du composant de routage dans l'élément racine du fichier index.html. */
ReactDOM.render(
	<HousingProvider>
		<Routing />
	</HousingProvider>,
	document.getElementById("root")
);
