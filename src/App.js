import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Basket from "./Components/Basket";
import Homepage from "./Components/Homepage";
import Menu from "./Components/Menu";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	const basket = localStorage.getItem('basket');
	let basket2 = [];
	if (basket) {
		basket2 = basket.split(',')
	} 
	return (
    <ChakraProvider>
		<div className="App">
				<h1>Welcome to Restaurant Name !</h1>
				<nav>
					<Link to="/">Homepage</Link>
					<Link to="/menu">Menu</Link>
					{(basket2.length < 2)
					? (<div>Basket - select at least 2 items to proceed</div>)
					: (<Link to="/basket">Basket</Link>)
					}
				</nav>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="menu" element={<Menu />} />
					<Route path="basket" element={<Basket />} />
				</Routes>
		</div>
			</ChakraProvider>
	);
}

export default App;
