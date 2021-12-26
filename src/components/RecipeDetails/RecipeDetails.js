import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getRecipeById } from '../../services/recipesService';

import './RecipeDetails.css';


const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});

    const params = useParams();
    const recipeId = params.recipeId;

    useEffect(() => {
        getRecipeById(recipeId)
            .then(x => {
                console.log(x);
                setRecipe(x)
            })
    }, [recipeId])
    return (
        <section className="recipe-details">
            <h2 className="recipe-details-title">{recipe.title}</h2>
            <article className="recipe-details-img">
                <img src={recipe.imageUrl} alt={recipe.title}/>
            </article>
            <article className="recipe-details-products">
                <h4>Products:</h4>
                <p>{recipe.products}</p>
            </article>
            <article className="recipe-details-preparation">
                <h4>Recipe preparation:</h4>
                <p>{recipe.description}</p>
            </article>
            <article className="recipe-details-author-buttons">
                <Link to='/recipe/edit' className="recipe-details-author-button-edit">Edit</Link>
                <Link to='/recipe/edit' className="recipe-details-author-button-delete">Delete</Link>
            </article>
            <article className="recipe-details-author">
                <Link to='/Author'>Ceated by: {recipe.ownerId?.name}</Link>
            </article>
        </section>
    );
}

export default RecipeDetails;