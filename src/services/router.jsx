import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/home.jsx";
import About from "../Pages/about.jsx";
import Housing from "../Pages/housing.jsx";
import Error404 from "../Pages/error404.jsx";
import Header from "../Components/header.jsx";
import Footer from "../Components/footer.jsx";

import "../style.css";

function Routing() {
	return (
		<React.StrictMode>
			<Router>
				<Header />
				<Routes>
					{/* Ceci est une définition de route. Il indique au routeur de faire correspondre l'URL `/` et de rendre le composant `<Home />`. */}
					<Route
						exact
						path="/"
						element={
							<>
								<Home />
							</>
						}
					/>{" "}
					{/* Il indique au routeur de faire correspondre l'URL `/about` et de rendre le composant `<About />`. */}
					<Route path="/about" element={<About />} />
					{/* Il indique au routeur de faire correspondre l'URL `/housing/:housingId` et de rendre le composant `<housing />`. */}
					<Route
						exact
						path="/housing/:housingId"
						element={
							<>
								<Housing />
							</>
						}
					/>{" "}
					{/* Il indique au routeur de faire correspondre n'importe quelle URL et de rendre le composant `<Error404 />`. */}
					<Route path="*" element={<Error404 />} />
				</Routes>
			</Router>

			<Footer />
		</React.StrictMode>
	);
}

export default Routing;
