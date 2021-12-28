import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({
    recipe
}) => {
    return (
        <section className="recipe-card">
            <Link to={`/${recipe.category}/recipe/details/${recipe._id}`}>
                <article className="recipe-card-img">
                    <img src={recipe.imageUrl} alt={recipe.title} />
                </article>
                <h3 className="recipe-card-title">{recipe.title}</h3>
                <p className="recipe-card-owner-name">creator: {recipe.ownerId.name}</p>
            </Link>
        </section>
    );
}

export default RecipeCard;