import React from "react";
import ReactDOM from "react-dom";
import Routerr from "./services/router.jsx";
import { AnnoncesProvider } from "./services/context.jsx";

ReactDOM.render(
	<AnnoncesProvider>
		<Routerr />
	</AnnoncesProvider>,
	document.getElementById("root")
);
