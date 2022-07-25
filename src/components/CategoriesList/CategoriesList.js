import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CategoryCard from "../CategoryCard/CategoryCard";
import {getAllCategories} from "../../requests/requests";
import Spinner from "../Spinner/Spinner";

import './CategoriesList.scss';

function CategoriesList () {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        getAllCategories().then(data => {
            data.categories && setCategories(data.categories);
        });
        
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        loading ? <div className="spinner"><Spinner/></div> :
        <div className="list">
             <Helmet>
                <meta
                    name="description"
                    content="Categories with recipes"
                    />
                <title>Categories</title>
            </Helmet>

            {categories?.map((dish) => {
                return <CategoryCard name={dish.strCategory} img={dish.strCategoryThumb} key={dish.idCategory}/>
            })}
        </div>
    )
}

export default CategoriesList;