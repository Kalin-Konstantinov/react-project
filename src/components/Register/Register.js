import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { registerUser } from '../../services/authService';
import './Register.css';

const Register = () => {

    const navigate = useNavigate();
    const { saveUserData } = useAuthContext();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');

        if (name.length < 3) {
            return alert('Your name should be at least 3 characters.');
        }

        if (email === '') {
            return alert('Please enter your email address.');
        }

        if (password.length < 5) {
            return alert('Your password should be at least 5 characters.');
        }

        if (password !== rePass) {
            return alert('Your password and repeat password do not match.');
        }

        e.target.reset();

        registerUser({ name, email, password })
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
        <section className="register-wrapper">
            <section className="register">
                <h2 className="register-title">Register</h2>
                <form className="register-form" onSubmit={onRegisterHandler}>
                    <input type="text" name="name" id="name" className="register-form-input" placeholder="Name" />
                    <input type="email" id="email" name="email" className="register-form-input" placeholder="Email" />
                    <input type="password" id="password" name="password" className="register-form-input" placeholder="Password" />
                    <input type="password" id="rePass" name="rePass" className="register-form-input" placeholder="Confirm password" />
                    <input type="submit" className="register-form-submit" value="Register" />
                </form>
                <h3 className="register-to-login-question">You already have account?</h3>
                <p className="login-link-wrapper">You can login <Link className="login-link" to='/login'>Here</Link></p>
            </section>
        </section>
    );
}

export default Register;