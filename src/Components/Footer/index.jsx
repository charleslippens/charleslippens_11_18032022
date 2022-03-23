import logo from "../../Assets/Logo_White.svg";
import "./style.css";
// Composant fonctionnel
function Footer() {
	return (
		<footer className="footer-wrapper">
			<img src={logo} className="footer-logo" alt="Kasa Logo" />
			<p className="footer-credits">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;
