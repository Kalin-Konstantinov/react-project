import { useState } from 'react';

import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
    const [haburgerMenu, setHamburgerMenu] = useState('close');
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

    const handleHaburgerMenu = () => {
        if (haburgerMenu === 'close') {
            setHamburgerMenu('open')
        } else {
            setHamburgerMenu('close')
        }
    }

    const HamburgerMenu = () => {
        return (
            <div onClick={handleHaburgerMenu} className={"hamburger-menu " + haburgerMenu}>
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
            </div>
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
            <HamburgerMenu />
            <MobileMenu
                user={user}
                display={
                    haburgerMenu === 'close'
                    ? 'hide'
                    : ''
                }
                handleHaburgerMenu={handleHaburgerMenu}
            />
        </header>
    );
}

export default Header;