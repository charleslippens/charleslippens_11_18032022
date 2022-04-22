import React, { useState, createContext, useEffect } from "react";

export const HousingContext = createContext();

export const HousingProvider = ({ children }) => {
	/* Création d'une variable d'état `annonces` et initialisation avec un tableau vide. */ const [
		housings,
		setHousing,
	] = useState([]);

	const [idAnnonce, setIdAnnonce] = useState(false);
	/* Création d'une variable d'état `error404` et initialisation avec `false`. */ const [
		error404,
		setError404,
	] = useState(false);
	/* Création d'une variable d'état `error` et initialisation avec `false`. */
	const [error, setError] = useState(false);
	/* Création d'une variable d'état `loading` et initialisation avec `true`. */ const [
		load,
		setLoad,
	] = useState(false);

	useEffect(() => {
		setLoad(true);
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
				setLoad(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setError(true);
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
				error,
				setError,
				load,
				setLoad,
			}}
		>
			{children}
		</HousingContext.Provider>
	);
};
