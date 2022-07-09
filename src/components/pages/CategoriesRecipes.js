import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryRecipes } from "../../requests/requests";

function CategoriesRecipes() {
    const params = useParams();
    const [recipes, setRecipes] = useState([]);

    async function getRecipe() {
        const response = await getCategoryRecipes(params.name);
        setRecipes(response);
    }

    useEffect(() => {
        return getRecipe;
    }, []);

    return (
        recipes.meals?.map((meal) => {
            return (
                <div>
                    <div>{meal.strMeal}</div>
                    <img src={meal.strMealThumb}></img>
                </div>
            )
        })
    )
}

export default CategoriesRecipes;