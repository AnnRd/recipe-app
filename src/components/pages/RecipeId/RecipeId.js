import { getOneRecipe } from '../../../requests/requests';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './RecipeId.scss';

function RecipeId () {
    const params = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        // const response = await getOneRecipe(params.id);
        // setRecipe(response);
        getOneRecipe(params.id).then(data => {
            data.meals && setRecipe(data.meals[0]);
            // console.log(data.meals[0]);
        });
    }, []);

    console.log(recipe);

    return (
        <div className="recipe-id">
            {recipe.strMeal}
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            {recipe.strCategory}
            {recipe.strArea}
            {recipe.strInstructions}

        </div>
    )
}

export default RecipeId;