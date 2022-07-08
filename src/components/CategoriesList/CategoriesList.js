import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import {getAllCategories} from "../../requests/requests";

import './CategoriesList.scss';

function CategoriesList () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            data.categories && setCategories(data.categories);
        });
    }, []);

    console.log(categories);
    return (
        <div className="list">
            {categories?.map((dish) => {
            return <CategoryCard name={dish.strCategory} img={dish.strCategoryThumb} key={dish.idCategory}/>
        })}
        </div>
    )
}

export default CategoriesList;