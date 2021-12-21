import { Link } from 'react-router-dom';
import style from './Login.module.css';


const Login = () => {
    return (
        <section className={style.loginWrapper}>
            <section className={style.login}>
                <h2 className={style.title}>Login</h2>
                <form className={style.loginForm}>
                    <input type="email" id="email" className={style.inputField} placeholder="Email" />
                    <input type="password" id="password" className={style.inputField} placeholder="Password" />
                    <input type="submit" className={style.submit} value="Sign up" />
                </form>
                <h3 className={style.question}>You don't have account?</h3>
                <p className={style.register}>You can register <Link className={style.link} to='/register'>Here</Link></p>
            </section>
        </section>
    );
}

export default Login;