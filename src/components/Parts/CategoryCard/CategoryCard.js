import { Link } from 'react-router-dom';

import './CategoryCard.css';


const CategoryCard = ({
    category,
}) => {

    return (
        <Link className="gallery-categories-card" to={`/gallery/recipes/${category.name}`}>
            <article className="gallery-categories-card-img">
                <img src={category.imageUrl} alt={category.name} />
            </article>
            <h3 className="card-title">{category.name}</h3>
        </Link>
    );
}

export default CategoryCard;