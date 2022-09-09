import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Basket from "./Components/Basket";
import Homepage from "./Components/Homepage";
import Menu from "./Components/Menu";

function App() {
	return (
		<div className="App">
			<h1>Welcome to React Router!</h1>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="menu" element={<Menu />} />
				<Route path="basket" element={<Basket />} />
			</Routes>
		</div>
	);
}

export default App;
