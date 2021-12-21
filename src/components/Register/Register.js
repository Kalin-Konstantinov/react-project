import { Link } from 'react-router-dom';
import style from './Register.module.css';


const Register = () => {
    return (
        <section className={style.registerWrapper}>
            <section className={style.register}>
                <h2 className={style.title}>Register</h2>
                <form className={style.registerForm}>
                    <input type="text" name="name" id="name" className={style.inputField} placeholder="Name" />
                    <input type="email" id="email" name="email" className={style.inputField} placeholder="Email" />
                    <input type="password" id="password" name="password" className={style.inputField} placeholder="Password" />
                    <input type="password" id="rePass" name="rePass" className={style.inputField} placeholder="Confirm password" />
                    <input type="submit" className={style.submit} value="Register" />
                </form>
                <h3 className={style.question}>You already have account?</h3>
                <p className={style.login}>You can login <Link className={style.link} to='/login'>Here</Link></p>
            </section>
        </section>
    );
}

export default Register;