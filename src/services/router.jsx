import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/home.jsx";
import About from "../Pages/about.jsx";
import Housing from "../Pages/housing.jsx";
import Error404 from "../Pages/error404.jsx";
import Header from "../Components/header.jsx";
import Footer from "../Components/footer.jsx";
import { HousingContext } from "../Context/context.jsx";
import Load from "../Components/loading.jsx";
import Error from "../Components/error404.jsx";

import "../style.css";

function Routing() {
	const { error, load, error404 } = useContext(HousingContext);

	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					{/* Ceci est une définition de route. Il indique au routeur de faire correspondre l'URL `/` et de rendre le composant `<Home />`. */}
					<Route
						exact
						path="/"
						element={
							<>
								<Home />
								{(!error && load && <Load />) || (error && load && <Error />)}
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
								{(!error && load && <Load />) ||
									(error && load && <Error />) ||
									(error404 && !load && !error && <Error404 />)}
							</>
						}
					/>{" "}
					{/* Il indique au routeur de faire correspondre n'importe quelle URL et de rendre le composant `<Error404 />`. */}
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Routing;
