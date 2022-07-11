import { getOneRecipe } from '../../../requests/requests';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';

import './RecipeId.scss';
import Spinner from '../../Spinner/Spinner';

function RecipeId () {
    const params = useParams();
    const [recipe, setRecipe] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)

        getOneRecipe(params.id).then(data => {
            data.meals && setRecipe(data.meals[0]);
        });

        setTimeout(() => {
            setIsLoading(false);
        }, 700);
    }, []);


    let ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`] !== '' && recipe[`strIngredient${i}`] !== null) {
            ingredients.push(recipe[`strIngredient${i}`] + ' - ' + recipe[`strMeasure${i}`]);
        }
    }

    const ingr = ingredients.join('\n');
    return (
        isLoading ? <Spinner/> : (
            <div className="recipe-id">
                <Helmet>
                    <meta
                        name="description"
                        content={`${recipe.strMeal} recipe`}
                    />
                    <title>{`${recipe.strMeal} recipe`}</title>
                </Helmet>
                <img className='recipe-id-img' src={recipe.strMealThumb} alt={recipe.strMeal} />
                <div className="info-id">
                    <div className="name-id">
                        {recipe.strMeal}
                    </div>
                    <span className="title">🔹Category:</span> {recipe.strCategory}<br/>
                    <span className="title">🔹Area:</span> {recipe.strArea}<br/>
                    <div className="title">🔹Ingredients:</div>{ingredients.map(el => el).join('🍴')}<br/>
                    <div className="title">🔹How to cook:</div>{recipe.strInstructions}<br/>
                    <span className="title">🔹Watch the recipe on Youtube:</span> <a href={recipe.strYoutube}>📺</a>
                    {/* <video t src={recipe.strYoutube}> */}
                </div>
            </div>
        )
    )
}

export default RecipeId;