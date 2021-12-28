

import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className="not-found">
            <h2 className="not-found-title">Page Not Found 404.</h2>
            <Link to="/">Click here to return to Home Page.</Link>
        </section>
    );
}

export default NotFound;