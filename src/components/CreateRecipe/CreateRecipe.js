import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { registerUser } from '../../services/authService';
import style from './CreateRecipe.module.css';

const CreateRecipe = () => {

    const navigate = useNavigate();
    const { user, saveUserData } = useAuthContext();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (password.length < 5) {
            return alert('Your password should be at least 5 characters.');
        }

        if (password !== rePass) {
            return alert('Your password and repeat password do not match.');
        }

        if (name.length < 3) {
            return alert('Your name should be at least 3 characters.');
        }

        if (email === '') {
            return alert('Please enter your email address.');
        }
        e.target.reset();

        registerUser({ name, email, password })
            .then(res => {
                const { _id, name, email } = res;
                saveUserData({ _id, name, email });
                navigate('/');
            })
            .catch(err => {
                return alert('handle error ', err);
            })
    }

    return (
        <section className={style.registerWrapper}>
            <section className={style.register}>
                <h2 className={style.title}>Create recipe</h2>
                <form className={style.registerForm} onSubmit={onRegisterHandler}>
                    <input type="text" name="title" id="name" className={style.inputField} placeholder="Title" />
                    <textarea name="products" className={style.textarea} placeholder="Add products..." />
                    <textarea  name="description" className={style.textarea} placeholder="Preparation of the recipe: description..." />
                    <select name="type" className={style.dropdown} value="type" ><option value="sallad">sallad</option></select>
                    <input type="submit" className={style.submit} value="Share recipe" />
                </form>
                <h3 className={style.question}>You already have account?</h3>
                <p className={style.login}>You can login <Link className={style.link} to='/login'>Here</Link></p>
            </section>
        </section>
    );
}

export default CreateRecipe;