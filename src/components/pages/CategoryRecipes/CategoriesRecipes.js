import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryRecipes } from "../../../requests/requests";

import './CategoryRecipes.scss';

function CategoryRecipes() {
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
        <>
            <h2>{params.name}</h2>
            <div className="subtitle">Click the dish to see the recipe 👇</div>
            <div className="container-recipe">
                {recipes.meals?.map((meal) => {
                return (
                    <div className="category-dish" id={meal.idMeal}>
                        <div className='food-name-recipe'>{meal.strMeal}</div>
                        <img className='food-img-recipe' src={meal.strMealThumb}></img>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default CategoryRecipes;