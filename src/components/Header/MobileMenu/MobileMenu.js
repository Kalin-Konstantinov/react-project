import { Link } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({
    user,
    display,
    handleHaburgerMenu
}) => {
    const LoggedInUsers = () => {
        return (
            <>
                <Link to="/create" className="menu-nav-link" >Share recipe</Link>
                <Link to="/my-recipes" className="menu-nav-link" >{user.name}`s recipes</Link>
                <Link to="/logout" className="menu-nav-link" >Logout</Link>
            </>
        );
    }

    const GuestsUsers = () => {
        return (
            <>
                <Link to="/login" className="menu-nav-link" >Login</Link>
                <Link to="/register" className="menu-nav-link" >Register</Link>
            </>
        );
    }

    const AdminUser = () => {
        return <Link to="/add-category" className="menu-nav-link">Add category</Link>
    }

    return (
        <div onClick={handleHaburgerMenu} className={"mobile-menu " + display}>
            <Link to="/" className="menu-nav-link" >Home</Link>
            <Link to="/gallery" className="menu-nav-link" >Gallery</Link>
            {user.email === 'admin@admin' && <AdminUser />}
            {user.email ? <LoggedInUsers /> : <GuestsUsers />}
        </div>
    );
}

export default MobileMenu;