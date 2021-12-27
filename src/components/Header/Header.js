import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    const LoggedInUser = ({
        user
    }) => {
        return (
            <>
                <li className={styles.li}>
                    <Link to="/create" className={styles.link}>Share recipe</Link>
                </li>
                <li className={styles.li}>
                    <Link to="/my-recipes" className={styles.link}>Welcome, {user?.name}!</Link>
                </li>
                <li className={styles.li}>
                    <Link to="/logout" className={styles.link}>Logout</Link>
                </li>
            </>
        );
    }

    const Guest = () => {
        return (
            <li className={styles.li}>
                <Link to="/login" className={styles.link}>Login</Link>
            </li>
        );
    }

    const AdminPanel = () => {
        return (
            <li className={styles.li}>
                <Link to="/add-category" className={styles.link}>Add category</Link>
            </li>
        );
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.links}>
                    <li className={styles.li}>
                        <Link to="/" className={styles.link}>Home</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/gallery" className={styles.link}>Gallery</Link>
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