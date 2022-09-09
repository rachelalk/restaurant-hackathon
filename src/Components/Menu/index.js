import { useEffect, useState } from "react";
import AddButton from "../Button";
import ModalButton from "../ModalButton";

function Menu() {
    const [recipes, setRecipes] = useState([]);
    const [basketItems, setBasketItems] = useState([]);
    useEffect(() => {
        async function getRecipesOnLoad() {
            let response = await fetch(
                "https://api.spoonacular.com/recipes/complexSearch?apiKey=6e01c17df2c54f8ca7aa69d7b711aa7d&cuisine=thai&number=2"
            );
            console.log("response: ", response);
            let data = await response.json();
            console.log("data: ", data);
            let results = data.results;
            console.log("results: ", results);
            setRecipes(results);
            return results;
        }
        getRecipesOnLoad();
    }, []);

    function addtoBasket(itemName) {
        console.log("item name:", itemName);
        setBasketItems([...basketItems, itemName]);
        console.log([...basketItems, itemName]);
        localStorage.setItem('basket', localStorage.getItem('basket') + ',' + itemName);
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
                                    <ModalButton id = {recipe.id}/>
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
