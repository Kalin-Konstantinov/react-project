import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    return <div>{recipe.title}</div>
}

export default RecipeDetails;