import { useParams, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { deleteRecipeById } from "../../services/recipesService";



const DeleteRecipe = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {user} = useAuthContext();

    deleteRecipeById(params.recipeId, user.accessToken)
        .then(() => {
            navigate('/')
        })
        .catch(err => console.error(err));
    return null;
}

export default DeleteRecipe;