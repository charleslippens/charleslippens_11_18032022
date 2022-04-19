import React, { useState, createContext, useEffect } from "react";

export const HousingContext = createContext();

export const HousingProvider = ({ children }) => {
	/* Création d'une variable d'état `annonces` et initialisation avec un tableau vide. */ const [
		housings,
		setHousing,
	] = useState([]);

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
			}}
		>
			{children}
		</HousingContext.Provider>
	);
};
