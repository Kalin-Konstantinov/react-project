import styles from './Home.module.css';

const Home = () => {
    return (
        <section className={styles.body}>
            <article className={styles.imgWrapper}>
                <img src="/images/home-resize.png" className={styles.img} alt="food" />
            </article>
            <article className={styles.container}>
                <article className={styles.gallery}>
                    <h2 className={styles.title}>Recipes Gallery</h2>
                    <article className={styles.galleryContainer}>
                        <section className={styles.cards}>
                            <article className={styles.card}>
                                <article className={styles.cardImg}>
                                    <img src="/images/soup.jpeg" alt="soup" className={styles.img} />
                                </article>
                                <h4 className={styles.cardTitle}>Soup</h4>
                            </article>
                            <article className={styles.card}>
                                <article className={styles.cardImg}>
                                    <img src="/images/sallad.jpeg" alt="soup" className={styles.img} />
                                </article>
                                <h4 className={styles.cardTitle}>Sallad</h4>
                            </article>
                            <article className={styles.card}>
                                <article className={styles.cardImg}>
                                    <img src="/images/dessert.jpeg" alt="soup" className={styles.img} />
                                </article>
                                <h4 className={styles.cardTitle}>Dessert</h4>
                            </article>
                            <article className={styles.card}>
                                <article className={styles.cardImg}>
                                    <img src="/images/smoothie.jpeg" alt="soup" className={styles.img} />
                                </article>
                                <h4 className={styles.cardTitle}>Smoothie</h4>
                            </article>
                        </section>
                    </article>
                </article>

                <article className={styles.about}>
                    <article className={styles.goals}>
                        <p className={styles.p}>We alway strive to develop and share our experience. Share your experience with us! Create your own recipe and make the day happy for more people.</p>
                    </article>
                    <article className={styles.aboutImg}>
                        <img src="/images/kitchen.jpeg" alt="kitchen" className={styles.img} />
                    </article>

                </article>
            </article>
        </section>
    );
}

export default Home;