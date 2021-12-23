import { Link, useNavigate } from 'react-router-dom';


import { useAuthContext } from '../../contexts/AuthContext';
import { loginUser } from '../../services/authService';
import style from './Login.module.css';


const Login = () => {
    const navigate = useNavigate();
    const { user, saveUserData } = useAuthContext();

    const onLoginhandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password);

        loginUser({ email, password })
            .then(res => {
                const { _id, name, email } = res;
                saveUserData({ _id, name, email });
                navigate('/');
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