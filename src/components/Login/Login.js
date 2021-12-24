import { Link, useNavigate } from 'react-router-dom';


import { useAuthContext } from '../../contexts/AuthContext';
import { loginUser } from '../../services/authService';
import style from './Login.module.css';


const Login = () => {
    const navigate = useNavigate();
    const { saveUserData } = useAuthContext();

    const onLoginhandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (password.length < 5) {
            return alert('Your password should be at least 5 characters.');
        }

        if (email === '') {
            return alert('Please enter your email address.');
        }
        e.target.reset();

        loginUser({ email, password })
            .then(res => {
                const { _id, name, email, accessToken } = res;
                saveUserData({ _id, name, email, accessToken });
                navigate('/');
            })
            .catch(err => {
                return alert('handle error ', err);
            })
    }

    return (
        <section className={style.loginWrapper}>
            <section className={style.login}>
                <h2 className={style.title}>Login</h2>
                <form className={style.loginForm} onSubmit={onLoginhandler}>
                    <input type="email" id="email" name="email" className={style.inputField} placeholder="Email" />
                    <input type="password" id="password" name="password" className={style.inputField} placeholder="Password" />
                    <input type="submit" className={style.submit} value="Sign up" />
                </form>
                <h3 className={style.question}>You don't have account?</h3>
                <p className={style.register}>You can register <Link className={style.link} to='/register'>Here</Link></p>
            </section>
        </section>
    );
}

export default Login;