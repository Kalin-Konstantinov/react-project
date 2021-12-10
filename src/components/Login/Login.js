import style from './Login.module.css';


const Login = () => {
    return (
        <section className={style.loginWrapper}>
            <form className={style.loginForm}>
                <label className={style.label} htmlFor="email">
                    Email:
                    <input type="email" id="email" className={style.inputField} />
                </label>
                <label className={style.label} htmlFor="password">
                    Password:
                    <input type="password" id="password" className={style.inputField} />
                </label>
                <input type="submit" className={style.submit} value="Login" />
            </form>
        </section>
    );
}

export default Login;