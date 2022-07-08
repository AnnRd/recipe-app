import { Link } from 'react-router-dom';

import './CategoryCard.scss';
import {getCategoryRecipes} from '../../requests/requests';

function CategoryCard (props) {
    const {img, name, key} = props;

    // const getCategory = async () => {
    //     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);

    //     const category = await response.json();
    //     console.log(category);
    // }


    return (
       
            <Link to={`/categories/${name}`} onClick={getCategoryRecipes(name.toLowerCase())} className='card' id={key}>
                <img className='food-img' src={img} alt={name} />
                <div className='food-name'>{name}</div>
            </Link>

                // <Link to={name}>
                //     <div className='card' id={key}>
                //         <img className='food-img' src={img} alt={name} />
                //         <div className='food-name'>{name}</div>
                //     </div>
                // </Link>
    )
}

export default CategoryCard;