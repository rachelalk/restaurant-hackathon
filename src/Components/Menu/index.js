import { useEffect, useState } from "react";


function Menu() {
    // const [recipes, setRecipes] = useState([]);
    const [basketItems, setBasketItems] = useState([]);
    useEffect(() => {
        async function getRecipesOnLoad() {
            let response = await fetch(
                "https://api.spoonacular.com/recipes/complexSearch?apiKey=4f148a4f43724f62aa67a95e9335cd75&cuisine=thai&number=50"
            );
            console.log("response: ", response);
            let data = await response.json();
            console.log("data: ", data);
            let results = data.results;
            console.log("results: ", results);
            return results;
        }
    });
    function addtoBasket(itemName) {
        console.log(basketItems);
        setBasketItems([...basketItems, itemName]);
    }
    return (
        <>
            <main>
                <h2>Menu</h2>
                <p>That feels like an existential question, don't you think?</p>
            </main>

        </>
    );
}

export default Menu;
