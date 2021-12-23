import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    const Guest = () => {
        return (
            <li className={styles.li}>
                <Link to="/login" className={styles.link}>Login</Link>
            </li>
        );
    }

    const LoggedInUser = ({
        user
    }) => {
        return (
            <li className={styles.li}>
                <Link to="/my-recipes" className={styles.link}>Welcome, {user?.name}!</Link>
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
                    <li className={styles.li}>
                        <Link to="/share" className={styles.link}>Share recipe</Link>
                    </li>
                    {user.name
                        ? <LoggedInUser user={user}/>
                        : <Guest />
                    }

                </ul>
            </nav>

        </header>
    );
}

export default Header;