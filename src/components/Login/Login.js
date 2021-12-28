import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { loginUser } from '../../services/authService';
import './Login.css';


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
        <section className="login-wrapper">
            <section className="login">
                <h2 className="login-title">Login</h2>
                <form className="login-form"onSubmit={onLoginhandler}>
                    <input type="email" id="email" name="email" className="login-input" placeholder="Email" autoComplete="off" />
                    <input type="password" id="password" name="password" className="login-input" placeholder="Password" autoComplete="off" />
                    <input type="submit" className="login-submit" value="Sign up" />
                </form>
                <h3 className="login-question">You don't have account?</h3>
                <p className="login-to-register-wrapper">You can register <Link className="login-to-register-link" to='/register'>Here</Link></p>
            </section>
        </section>
    );
}

export default Login;