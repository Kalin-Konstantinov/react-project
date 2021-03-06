import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getRecipesByCategory } from '../../services/catalogService';
import RecipeCard from '../Parts/RecipeCard/RecipeCard';
import './Recipes.css';


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
            <h1 className="recipes-title">{category} recipes</h1>
            <section className="recipes-container">
                {recipes.length > 0
                    ? recipes.map(x => <RecipeCard recipe={x} key={x._id} />)
                    : 'Not found any recipes in this category.'
                }
            </section>
        </section>
    );
}

export default Recipes;