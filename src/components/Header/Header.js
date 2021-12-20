import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
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
                    <li className={styles.li}>
                        <Link to="/login" className={styles.link}>Login</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <form className={styles.form}>
                    <input type="text" placeholder="Search" className={styles.search}/>
                    <button className={styles.button}><i class="fas fa-search"></i></button>
                </form>
            </section>
        </header>
    );
}

export default Header;