import  './Header.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    const LoggedInUser = ({
        user
    }) => {
        return (
            <>
                <li className="header-nav-li">
                    <Link to="/create" className="header-nav-link">Share recipe</Link>
                </li>
                <li className="header-nav-li">
                    <Link to="/my-recipes" className="header-nav-link">{user?.name}'s recipes</Link>
                </li>
                <li className="header-nav-li">
                    <Link to="/logout" className="header-nav-link">Logout</Link>
                </li>
            </>
        );
    }

    const Guest = () => {
        return (
            <>
            <li className="header-nav-li">
                <Link to="/login" className="header-nav-link">Login</Link>
            </li>
            <li className="header-nav-li">
                <Link to="/register" className="header-nav-link">Register</Link>
            </li>
            </>
        );
    }

    const AdminPanel = () => {
        return (
            <li className="header-nav-li">
                <Link to="/add-category" className="header-nav-link">Add category</Link>
            </li>
        );
    }

    return (
        <header className="header">
            <nav className="header-nav">
                <ul className="header-nav-links">
                    <li className="header-nav-li">
                        <Link to="/" className="header-nav-link">Home</Link>
                    </li>
                    <li className="header-nav-li">
                        <Link to="/gallery" className="header-nav-link">Gallery</Link>
                    </li>
                    {user.name === 'admin' && <AdminPanel />}
                    {user.name
                        ? <LoggedInUser user={user} />
                        : <Guest />
                    }
                </ul>
            </nav>

        </header>
    );
}

export default Header;