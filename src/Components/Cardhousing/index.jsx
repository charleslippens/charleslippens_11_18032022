import { Link } from "react-router-dom";
import "./style.css";
// Composant fonctionnel
// Utilisation de props pour les cardhousing via Home
function Cardhousing(props) {
	return (
		<div className="cardhousing">
			<Link to={props.link}>
				<div className="cardhousing-cover-wrapper">
					<img src={props.cover} alt="" />
				</div>
				<h2 className="cardhousing-title">{props.title}</h2>
			</Link>
		</div>
	);
}

export default Cardhousing;
