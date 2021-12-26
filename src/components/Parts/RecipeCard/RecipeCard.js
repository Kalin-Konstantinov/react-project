import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({
    recipe
}) => {
    console.log(recipe);
    return (
        <Link className="recipe-card" to={`/${recipe.category}/recipe/details/${recipe._id}`}>
            <article className="recipe-card-img">
                <img src={recipe.imageUrl} alt={recipe.title}/>
            </article>
            <h3 className="recipe-card-title">{recipe.title}</h3>
            <p className="recipe-card-owner-name">creator: {recipe.ownerId.name}</p>
        </Link>
    );
}

export default RecipeCard;