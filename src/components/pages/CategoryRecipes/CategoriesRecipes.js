import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { getCategoryRecipes } from "../../../requests/requests";
import { Link } from "react-router-dom";

import './CategoryRecipes.scss';

function CategoryRecipes() {
    const params = useParams();
    const [recipes, setRecipes] = useState([]);

    async function getRecipes() {
        const response = await getCategoryRecipes(params.name);
        setRecipes(response);
    }

    useEffect(() => {
        return getRecipes;
    }, []);

    return (
        <>
             <Helmet>
                <meta
                    name="description"
                    content={`Recipes in category: ${params.name}`}
                    />
                <title>Recipes in category: {params.name}</title>
            </Helmet>
            <h2>{params.name}</h2>
            <div className="subtitle">Click the dish to see the recipe 👇</div>
            <div className="container-recipe">
                {recipes.meals?.map((meal) => {
                return (
                    <Link to={`/categories/${params.name}/${meal.idMeal}`} className="category-dish" id={meal.idMeal}>
                        <div className='food-name-recipe'>{meal.strMeal}</div>
                        <img className='food-img-recipe' src={meal.strMealThumb}></img>
                    </Link>
                )
            })}
            </div>
        </>
    )
}

export default CategoryRecipes;