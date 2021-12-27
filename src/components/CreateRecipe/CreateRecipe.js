import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { createRecepe } from '../../services/recipesService';
import {getAllCategorys} from '../../services/catalogService'
import  './CreateRecipe.css';

const CreateRecipe = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuthContext();

    useEffect(() => {
        getAllCategorys()
        .then(x => {
            setCategories(x)
        })
    }, [])

    const onRegisterHandler = (e) => {
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
        <section className="create-page">
            <section className="create-form-wrapper">
                <h2 className="create-title">Create recipe</h2>
                <form className="create-form" onSubmit={onRegisterHandler}>
                    <input type="text" name="title" id="name" className="create-form-imput" placeholder="Title" />
                    <input type="text" name="imageUrl" className="create-form-imput" placeholder="Image..." />
                    <textarea name="products" className="create-form-textarea" placeholder="Add products..." />
                    <textarea name="description" className="create-form-textarea" placeholder="Preparation of the recipe: description..." />
                    <select name="category" className="create-form-dropdown"  >
                        {categories.map(x => <option value={x.name} key={x._id}>{x.name}</option>)}
                    </select>
                    <input type="submit" className="create-form-submit" value="Share recipe" />
                </form>
            </section>
        </section>
    );
}

export default CreateRecipe;