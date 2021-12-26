import { useState, useEffect } from 'react';

import { getAllCategorys } from '../../services/catalogService';
import CategoryCard from '../Parts/CategoryCard/CategoryCard';
import './Gallery.css';


const Gallery = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategorys()
            .then(x => {
                setCategories(x);
            })

    }, [])


    return (
        <section className='gallery-main'>
            <h1>Choose Category</h1>
            <section className="gallert-categories">
                {categories.map(x => <CategoryCard category={x} key={x._id} />)}
            </section>
        </section>
    );
}

export default Gallery;