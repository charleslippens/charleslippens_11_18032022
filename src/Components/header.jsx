import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo_Kasa.svg";
import "../Styling/header.css";
// Composant fonctionnel
// Utilisation de NavLink et Link pour l'utilisation d'attributs de style pour les routes actives et pour naviguer sur les différentes routes sur le site
function Header() {
	return (
		<header className="navlink-wrapper">
			<Link to="/">
				<img src={logo} alt="Kasa Logo" />
			</Link>
			{/* Il s'agit de deux React Router NavLink, qui changeront la classe active en fonction de l'itinéraire actuel. */}
			<nav className="navlink">
				<NavLink
					className={({ isActive }) => (isActive ? "navlink-active" : "navlink-link")}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "navlink-active" : "navlink-link")}
					to="/about"
				>
					A Propos
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
