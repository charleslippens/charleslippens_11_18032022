import React from "react";
import ReactDOM from "react-dom";
import Routing from "./services/router.jsx";

import { HousingProvider } from "./Context/context.jsx";

/* Rendering the App component into the root element of the index.html file. */
ReactDOM.render(
	<HousingProvider>
		<Routing />
	</HousingProvider>,
	document.getElementById("root")
);
