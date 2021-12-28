import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getRecipeById } from '../../services/recipesService';
import { useAuthContext } from '../../contexts/AuthContext';

import './RecipeDetails.css';


const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { user } = useAuthContext();

    const params = useParams();
    const recipeId = params.recipeId;

    useEffect(() => {
        getRecipeById(recipeId)
            .then(x => {
                setRecipe(x)
            })
    }, [recipeId])

    const OwnerButtons = ({
        recipe
    }) => {
        return (
            <article className="recipe-details-author-buttons">
                <Link to={`/${recipe.category}/recipe/edit/${recipe._id}`} className="recipe-details-author-button-edit">Edit</Link>
                <Link to={`/recipe/delete/${recipe._id}`} className="recipe-details-author-button-delete">Delete</Link>
            </article>
        );
    }

    return (
        <section className="details">
            <section className="recipe-details">
                <h2 className="recipe-details-title">{recipe.title}</h2>
                <article className="recipe-details-img">
                    <img src={recipe.imageUrl} alt={recipe.title} />
                </article>
                <article className="recipe-details-products">
                    <h4>Products:</h4>
                    <p>{recipe.products}</p>
                </article>
                <article className="recipe-details-preparation">
                    <h4>Recipe preparation:</h4>
                    <p>{recipe.description}</p>
                </article>
                {(user._id === recipe.ownerId?._id || user.name === 'admin') && <OwnerButtons recipe={recipe} />}

                <article className="recipe-details-author">
                    <Link to='/Author'>Created by: {recipe.ownerId?.name}</Link>
                </article>
            </section>
        </section>
    );
}

export default RecipeDetails;