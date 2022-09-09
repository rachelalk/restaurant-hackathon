import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Basket from "./Components/Basket";
import Homepage from "./Components/Homepage";
import Menu from "./Components/Menu";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function App() {
	const [recipes, setRecipes] = useState([]);
	const [basketItems, setBasketItems] = useState([]);

	// console.log(basketItems);

	useEffect (() => {if (localStorage.getItem("basket")) {
		let basket2 = localStorage.getItem("basket").split(",");
		setBasketItems(basket2);
  }}, [])

	return (
		<ChakraProvider>
			<div className="App">
				<h1>Welcome to our tantalising Thai takeout !</h1>
				<nav>
					<Link to="/">Homepage</Link>
					<Link to="/menu">Menu</Link>
					{basketItems.length < 2 ? (
						<div>Basket - select at least 2 items to proceed</div>
					) : (
						<Link to="/basket">Basket</Link>
					)}
				</nav>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route
						path="menu"
						element={
							<Menu
								recipes={recipes}
								setRecipes={setRecipes}
								basketItems={basketItems}
								setBasketItems={setBasketItems}
							/>
						}
					/>
					<Route path="basket" element={<Basket />} />
				</Routes>
			</div>
		</ChakraProvider>
	);
}

export default App;
