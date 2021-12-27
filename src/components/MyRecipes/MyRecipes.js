import { useState, useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { getMyRecpies } from '../../services/recipesService';
import RecipeCard from '../Parts/RecipeCard/RecipeCard';
import './MyRecipes.css'


const MyRecipes = () => {
    const [myRecipes, setMyRecipes] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        getMyRecpies(user._id, user.accessToken)
            .then(recipes => {
                console.log(recipes);
                setMyRecipes(recipes);
            })
    }, [user._id, user.accessToken]);

    return (
        <section className="my-recipes">
            <h2 className="my-recipes-title">My Recipes</h2>
            <article class="my-recipes-container">
                {myRecipes.map(x => <RecipeCard recipe={x} key={x._id} />)}
            </article>
        </section>
    );
}

export default MyRecipes;