import React, { useState, useEffect } from "react";

import loading from "../Assets/loading.gif";

import Error from "./error404.jsx";

import "../Styling/loading.css";

function Load() {
	/* Il s'agit d'une variable d'état qui sera utilisée pour afficher un message d'erreur. */ const [
		error,
		setError,
	] = useState(false);

	useEffect(() => {
		/* Un délai d'attente pour afficher l'erreur. */ const timeError = setTimeout(() => {
			setError(true);
		}, 5000);

		return () => {
			clearTimeout(timeError);
		};
	}, []);

	if (error) {
		return <Error sub="Oops, une erreur est survenue." />;
	}

	return (
		<div className="loading">
			<img src={loading} alt="Loading" />
		</div>
	);
}

export default Load;
