import style from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className={style.nav}>
                <ul className={style.ulNav}>
                    <li className={style.li}>
                        <Link to="/" className={style.aItem}>Home</Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/about" className={style.aItem}>About</Link>
                    </li>
                    <li className={style.li}>
                        <Link to="/contacts" className={style.aItem}>Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;