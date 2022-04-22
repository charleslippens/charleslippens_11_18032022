import React, { useState, createContext, useEffect } from "react";

export const HousingContext = createContext();

export const HousingProvider = ({ children }) => {
	/* Création d'une variable d'état `annonces` et initialisation avec un tableau vide. */ const [
		housings,
		setHousing,
	] = useState([]);
	const [idAnnonce, setIdAnnonce] = useState(false);
	/* Creating a state variable `error404` and initializing it with `false`. */
	const [error404, setError404] = useState(false);

	useEffect(() => {
		/* Récupération des données de la base de données. */ fetch(
			window.location.origin + "/housings.json"
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw response;
			})
			.then((data) => {
				/* Définition de la variable d'état `annonces` à la valeur de l'argument `data`. */
				setHousing(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<HousingContext.Provider
			value={{
				housings,
				setHousing,
				error404,
				setError404,
				idAnnonce,
				setIdAnnonce,
			}}
		>
			{children}
		</HousingContext.Provider>
	);
};
