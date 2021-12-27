import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAllCategorys } from '../../services/catalogService';
import CategoryCard from '../Parts/CategoryCard/CategoryCard';

import './Home.css';

const Home = () => {
    const [cagegories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategorys()
            .then(x => {
                x.length = 4;
                setCategories(x);
            })
    }, [])

    return (
        <section className="home">
            <article className="home-image-wrapper">
                <img src="/images/home-resize.png"  alt="food" />
            </article>
            <article className="content-container">
                <article className="gallery">
                    <Link to="/gallery" className="gallery-title">Recipes Gallery</Link>
                    <article className="gallery-container">
                        {cagegories.map(x => <CategoryCard category={x} key={x._id} />)}
                    </article>
                </article>

                {/* <article className="home-about">
                    <article className="home-golas">
                        <p >We alway strive to develop and share our experience. Share your experience with us! Create your own recipe and make the day happy for more people.</p>
                    </article>
                    <article className="home-about-img">
                        <img src="/images/kitchen.jpeg" alt="kitchen"  />
                    </article>

                </article> */}
            </article>
            <Link to="/gallery" className="home-button-share-recipe">Show more</Link>
        </section>
    );
}

export default Home;