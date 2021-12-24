import './Gallery.css';


const Gallery = () => {
    return (
        <section class='gallery-main'>
            <h1>Choose Category</h1>
            <section class="gallert-categories">
                <article class="gallery-categories-card">
                    <article class="card-img">
                        <img src="../images/img/Appetizer.png" alt="Appetizer" />
                    </article>
                    <h3 class="card-title">Appetizer</h3>
                </article>
                <article class="gallery-categories-card">
                    <article class="card-img">
                        <img src="../images/img/Dessert.png" alt="Appetizer" />
                    </article>
                    <h3 class="card-title">Dessert</h3>
                </article>
                <article class="gallery-categories-card">
                    <article class="card-img">
                        <img src="../images/img/Main-dish.png" alt="Appetizer" />
                    </article>
                    <h3 class="card-title">Main dish</h3>
                </article>
                <article class="gallery-categories-card">
                    <article class="card-img">
                        <img src="../images/img/Pasta.png" alt="Appetizer" />
                    </article>
                    <h3 class="card-title">Pasta</h3>
                </article>
                <article class="gallery-categories-card">
                    <article class="card-img">
                        <img src="../images/img/Sallad.png" alt="Appetizer" />
                    </article>
                    <h3 class="card-title">Sallad</h3>
                </article>
                <article class="gallery-categories-card">
                    <article class="card-img">
                        <img src="../images/img/Seafood.png" alt="Appetizer" />
                    </article>
                    <h3 class="card-title">Seafood</h3>
                </article>
                <article class="gallery-categories-card">
                    <article class="card-img">
                        <img src="../images/img/Smoothie.png" alt="Appetizer" />
                    </article>
                    <h3 class="card-title">Smoothie</h3>
                </article>
                <article class="gallery-categories-card">
                    <article class="card-img">
                        <img src="../images/img/Soup.png" alt="Appetizer" />
                    </article>
                    <h3 class="card-title">Soup</h3>
                </article>
            </section>
        </section>
    );
}

export default Gallery;