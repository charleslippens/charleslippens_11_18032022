import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./style.css";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</Router>
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);
