import { Link } from 'react-router-dom';

import './CategoryCard.scss';

function CategoryCard (props) {
    const {img, name, key} = props;

    return (
       
            <Link to={`/categories/${name}`} className='card' id={key}>
                <img className='food-img' src={img} alt={name} />
                <div className='food-name'>{name}</div>
            </Link>
    )
}

export default CategoryCard;