import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { createRecepe } from '../../services/recipesService';
import { getAllCategorys } from '../../services/catalogService';
import { getRecipeById } from '../../services/recipesService';
import './EditRecipe.css';

const EditRecipe = () => {
    const [categories, setCategories] = useState([]);
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
    const params = useParams();
    const { user } = useAuthContext();

    const recipeId = params.recipeId;
    useEffect(() => {
        getRecipeById(recipeId)
            .then(recipe => setRecipe(recipe))
    }, [])

    useEffect(() => {
        getAllCategorys()
            .then(x => {
                setCategories(x)
            })
    }, [])

    const onEditHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const products = formData.get('products');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const category = formData.get('category');

        if (title === '' || category === '' || description === '' || imageUrl === '' || products === '') {
            return alert('Please pleace fill all fields');
        }
        e.target.reset();
        const recipeData = {
            title,
            products,
            description,
            imageUrl,
            category,
        }
        createRecepe(recipeData, user.accessToken)
            .then(res => {
                navigate(`/gallery/recipes/${res.response.category}`);
            })
    }

    return (
        <section className="edit">
            <section className="edit-container">
                <h2 className="edit-title">Edit recipe</h2>
                <form className="edit-form" onSubmit={onEditHandler}>
                    <input type="text" name="title" id="name" className="edit-form-input" placeholder="Title" defaultValue={recipe.title} />
                    <input type="text" name="imageUrl" className="edit-form-input" placeholder="Image..." defaultValue={recipe.imageUrl} />
                    <textarea name="products" className="edit-form-textarea" placeholder="Add products..." defaultValue={recipe.products} />
                    <textarea name="description" className="edit-form-textarea" placeholder="Preparation of the recipe: description..." defaultValue={recipe.description} />
                    <select name="category" className="edit-form-dropdown"  >
                        {categories.map(x => <option value={x.name} key={x._id}>{x.name}</option>)}
                    </select>
                    <input type="submit" className="edit-form-submit" value="Edit recipe" />
                </form>
            </section>
        </section>
    );
}

export default EditRecipe;