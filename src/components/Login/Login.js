import style from './Login.module.css';


const Login = () => {
    return (
        <section className={style.loginWrapper}>
            <form class={style.loginForm}>
                <label class={style.label} for="email">
                    Email:
                    <input type="email" id="email" class={style.inputField} />
                </label>
                <label class={style.label} for="password">
                    Password:
                    <input type="password" id="password" class={style.inputField} />
                </label>
                <input type="submit" class={style.submit} value="Login" />
            </form>
        </section>
    );
}

export default Login;