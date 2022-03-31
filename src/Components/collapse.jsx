import React, { useState, useRef } from "react";
import arrow from "../Assets/Arrow_down.svg";

import "../Styling/collapse.css";

function Collapse(props) {
	//Ceci définit l'état initial du collapse.
	const [setActive, setActiveState] = useState("");
	//Ceci définit la hauteur initiale du collapse à 0px.
	const [setHeight, setHeightState] = useState("0px");
	//Ceci définit l'état initial de la classe de rotation
	const [setRotate, setRotateState] = useState("collapse__icon");
	// Ceci définit le content sur une ref pour obtenir la contenu de content (dom)
	const content = useRef(null);

	// La fonction bascule le collapse en changeant l'état actif, la hauteur et l'état de rotation

	function togglecollapse() {
		setActiveState(setActive === "" ? "active" : "");
		setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
		setRotateState(setActive === "active" ? "collapse__icon" : "collapse__icon rotate");
	}

	// C'est un moyen de vérifier si le contenu est un tableau ou non. Si ce n'est pas un tableau, il poussera le
	// contenu dans le contArray. S'il s'agit d'un tableau, il bouclera dans le tableau et poussera chaque élément dans
	// le tableau de contenu.
	const contArray = [];
	if (!Array.isArray(props.content)) {
		contArray.push(props.content);
	} else {
		for (let i = 0; i < 9; i++) {
			contArray.push(props.content[i]);
		}
	}

	return (
		//Button est le du bouton utilisé pour basculer le collapse avec togglecollapse
		<div className="collapse__section">
			<button className={`collapse ${setActive}`} onClick={togglecollapse}>
				<p className="collapse__title">{props.title}</p>
				<img src={arrow} className={`${setRotate}`} alt="" />
			</button>
			<div ref={content} style={{ maxHeight: `${setHeight}` }} className="collapse__content">
				<div className="collapse__text">
					{contArray.map((content, index) => (
						<div key={`${content}-${index}`}>{content}</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Collapse;
