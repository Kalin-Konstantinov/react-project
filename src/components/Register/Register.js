import style from './Register.module.css';

const Register = () => {
    return (
        <section className={style.registerWrapper} >
            <form className={style.registerForm}>
                <label className={style.label} htmlFor="email">
                    Email:
                    <input type="email" id="email" className={style.inputField} />
                </label>
                <label className={style.label} htmlFor="name">
                    Name:
                    <input type="text" id="name" className={style.inputField} />
                </label>
                <label className={style.label} htmlFor="password">
                    Password:
                    <input type="password" id="password" className={style.inputField} />
                </label>

                <label className={style.label} htmlFor="rePassword">
                    Repeat Password:
                    <input type="password" id="rePassword" className={style.inputField} />
                </label>
                <input type="submit" className={style.submit} value="Register" />
            </form>
        </section>
    );
}

export default Register;