import { getOneRecipe } from '../../../requests/requests';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './RecipeId.scss';

function RecipeId () {
    const params = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        getOneRecipe(params.id).then(data => {
            data.meals && setRecipe(data.meals[0]);
            // console.log(data.meals[0]);
        });
    }, []);


    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`] !== '' && recipe[`strIngredient${i}`] !== null) {
            ingredients.push(recipe[`strIngredient${i}`] + ' - ' + recipe[`strMeasure${i}`]);
        }
    }

    const ingr = ingredients.join('\n');
console.log(ingr);
    return (
        <div className="recipe-id">
            <img className='recipe-id-img' src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className="info-id">
                <div className="name-id">
                    {recipe.strMeal}
                </div>
                🔹Category: {recipe.strCategory}<br/>
                🔹Area: {recipe.strArea}<br/>
                🔹Ingredients:<br/>{ingredients.map(el => el).join('🍴')}<br/>
                🔹How to cook:<br/>{recipe.strInstructions}<br/>
                🔹Watch the recipe on Youtube: <a href={recipe.strYoutube}>📺</a>
                {/* <video t src={recipe.strYoutube}> */}
            </div>
        </div>
    )
}

export default RecipeId;