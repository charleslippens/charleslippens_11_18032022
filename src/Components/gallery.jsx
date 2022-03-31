import React, { useState } from "react";
import Previous from "../Assets/Avant.svg";
import Next from "../Assets/Apres.svg";
import "../Styling/gallery.css";

function Gallery({ images }) {
	//Il s'agit d'un React Hook qui crée une variable d'état appelée `current` et la définit sur 0. Il crée une fonction appelée `setCurrent` qui prend un paramètre appelé `value` et définit le variable d'état `current` à la valeur transmise. */
	const [current, setCurrent] = useState(0);
	const length = images.length;

	//La fonction previousImage ne prend aucun paramètre et ne renvoie aucune valeur. Il définit la diapositive actuelle sur la diapositive précédente.
	// Si la diapositive actuelle est 0, cela définit la diapositive actuelle sur la dernière diapositive.un
	const previousImage = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	//La fonction nextImage prend la valeur courante de current et lui ajoute une. Si le courant la valeur est égale à la longueur du tableau moins un, alors la valeur actuelle est définie sur zéro. Sinon, la valeur actuelle est définie sur la valeur actuelle plus un
	const nextImage = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	//Il s'agit d'une simple vérification pour s'assurer que le tableau d'images n'est pas vide. S'il est vide, alors le slider ne sera pas rendu. */
	if (!Array.isArray(images) || length <= 0) {
		return null;
	}

	return (
		// Il s'agit de deux opérateurs ternaires qui vérifient si la longueur du tableau d'images est supérieure à 1. S'il est, alors il rendra la flèche. Sinon, il ne rendra pas la flèche.
		<div className="slider">
			{length > 1 ? (
				<img
					src={Previous}
					className="left-arrow"
					onClick={previousImage}
					alt="Previous Arrow"
				/>
			) : null}
			{length > 1 ? (
				<img src={Next} className="right-arrow" onClick={nextImage} alt="Next Arrow" />
			) : null}
			{images.map((slider, index) => {
				return (
					//C'est un opérateur ternaire qui vérifie si l'index de l'image est égal à la valeur courante.Si c'est le cas, cela rendra la diapositive active. Sinon, il rendra la diapositive comme inactive. */
					<div className={index === current ? "slide active" : "slide"} key={index}>
						{index === current && (
							<img src={slider} alt="travel img" className="image" />
						)}
					</div>
				);
			})}
		</div>
	);
}

export default Gallery;
