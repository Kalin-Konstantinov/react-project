import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';
import { createRecepe } from '../../services/recipesService';
import {getAllCategorys} from '../../services/catalogService'
import style from './CreateRecipe.module.css';

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
        <section className={style.registerWrapper}>
            <section className={style.register}>
                <h2 className={style.title}>Create recipe</h2>
                <form className={style.registerForm} onSubmit={onRegisterHandler}>
                    <input type="text" name="title" id="name" className={style.inputField} placeholder="Title" />
                    <input type="text" name="imageUrl" className={style.inputField} placeholder="Image..." />
                    <textarea name="products" className={style.textarea} placeholder="Add products..." />
                    <textarea name="description" className={style.textarea} placeholder="Preparation of the recipe: description..." />
                    <select name="category" className={style.dropdown}  >
                        {categories.map(x => <option value={x.name} key={x._id}>{x.name}</option>)}
                    </select>
                    <input type="submit" className={style.submit} value="Share recipe" />
                </form>
            </section>
        </section>
    );
}

export default CreateRecipe;