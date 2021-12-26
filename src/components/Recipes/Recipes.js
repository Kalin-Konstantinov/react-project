import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getRecipesByCategory } from '../../services/recipesService';
import RecipeCard from '../Parts/RecipeCard/RecipeCard';


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        getRecipesByCategory(category)
            .then(x => {
                setRecipes(x);
            })
    }, [category])

    return (
        <section className="recipes">
            <h1>Recipe {category}</h1>
            {recipes.map(x => <RecipeCard recipe={x} key={x._id}/>)}
        </section>
    );
}

export default Recipes;