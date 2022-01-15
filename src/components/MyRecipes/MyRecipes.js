import { useState, useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { isLogged } from '../../hocs/isLogged';
import { getMyRecpies } from '../../services/recipesService';
import RecipeCard from '../Parts/RecipeCard/RecipeCard';
import './MyRecipes.css'


const MyRecipes = () => {
    const [myRecipes, setMyRecipes] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        getMyRecpies(user._id, user.accessToken)
            .then(recipes => {
                setMyRecipes(recipes);
            })
    }, [user._id, user.accessToken]);

    return (
        <section className="my-recipes">
            <h2 className="my-recipes-title">My Recipes</h2>
            <article className="my-recipes-container">
                {myRecipes.length > 0
                    ? myRecipes.map(x => <RecipeCard recipe={x} key={x._id} />)
                    : "You don't have any recipes yet."
                }
            </article>
        </section>
    );
}

export default isLogged(MyRecipes);