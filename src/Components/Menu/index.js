import { useEffect } from "react";
import AddButton from "../Button";
import ModalButton from "../ModalButton";

function Menu({ recipes, setRecipes, basketItems, setBasketItems }) {
	useEffect(() => {
		async function getRecipesOnLoad() {
			let response = await fetch(
				"https://api.spoonacular.com/recipes/complexSearch?apiKey=1e0627209aa14f53a49187d72790693f&cuisine=thai&number=2"
			);
			// console.log("response: ", response);
			let data = await response.json();
			// console.log("data: ", data);
			let results = data.results;
			// console.log("results: ", results);
			setRecipes(results);
			return results;
		}
		getRecipesOnLoad();
	}, [setRecipes]);

	function addtoBasket(itemName) {
		console.log("item name:", itemName);
		setBasketItems([...basketItems, itemName]);
		console.log([...basketItems, itemName]);
		localStorage.setItem("basket", [...basketItems, itemName]);
		// localStorage.setItem('basket', localStorage.getItem('basket') + ',' + itemName);
	}

	return (
		<>
			<main>
				<h2>Menu</h2>
				<div>
					{recipes ? (
						recipes.map((recipe) => {
							return (
								<div>
									<h2>{recipe.title}</h2>
									<img src={recipe.image} alt={recipe.title} />
									<AddButton
										onClick={() => {
											addtoBasket(recipe.title);
										}}
									/>
									<ModalButton
										id={recipe.id}
										name={recipe.title}
										onClick={() => {
											addtoBasket(recipe.title);
										}}
									/>
								</div>
							);
						})
					) : (
						<>Loading...</>
					)}
				</div>
			</main>
		</>
	);
}

export default Menu;
