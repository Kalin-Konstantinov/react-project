import './Gallery.css';


const Gallery = () => {
    return (
        <section className='gallery-main'>
            <h1>Choose Category</h1>
            <section className="gallert-categories">
                <article className="gallery-categories-card">
                    <article className="gallery-categories-card-img">
                        <img src="../images/img/Appetizer.png" alt="Appetizer" />
                    </article>
                    <h3 className="card-title">Appetizer</h3>
                </article>
                <article className="gallery-categories-card">
                    <article className="gallery-categories-card-img">
                        <img src="https://i.ibb.co/HKdBSB5/Dessert.png" alt="Appetizer" />
                    </article>
                    <h3 className="card-title">Dessert</h3>
                </article>
                <article className="gallery-categories-card">
                    <article className="gallery-categories-card-img">
                        <img src="../images/img/Main-dish.png" alt="Appetizer" />
                    </article>
                    <h3 className="card-title">Main dish</h3>
                </article>
                <article className="gallery-categories-card">
                    <article className="gallery-categories-card-img">
                        <img src="../images/img/Pasta.png" alt="Appetizer" />
                    </article>
                    <h3 className="card-title">Pasta</h3>
                </article>
                <article className="gallery-categories-card">
                    <article className="gallery-categories-card-img">
                        <img src="../images/img/Sallad.png" alt="Appetizer" />
                    </article>
                    <h3 className="card-title">Sallad</h3>
                </article>
                <article className="gallery-categories-card">
                    <article className="gallery-categories-card-img">
                        <img src="../images/img/Seafood.png" alt="Appetizer" />
                    </article>
                    <h3 className="card-title">Seafood</h3>
                </article>
                <article className="gallery-categories-card">
                    <article className="gallery-categories-card-img">
                        <img src="../images/img/Smoothie.png" alt="Appetizer" />
                    </article>
                    <h3 className="card-title">Smoothie</h3>
                </article>
                <article className="gallery-categories-card">
                    <article className="gallery-categories-card-img">
                        <img src="../images/img/Soup.png" alt="Appetizer" />
                    </article>
                    <h3 className="card-title">Soup</h3>
                </article>
            </section>
        </section>
    );
}

export default Gallery;