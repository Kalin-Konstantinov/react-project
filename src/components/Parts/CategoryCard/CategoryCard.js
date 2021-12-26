import './CategoryCard.css'


const CategoryCard = ({
    category,
}) => {

    const onClickCategoryCard = (e) => {
        let name = e.currentTarget.querySelector('.card-title').textContent;
        console.log(name);
    }

    return (
        <article className="gallery-categories-card" onClick={onClickCategoryCard}>
            <article className="gallery-categories-card-img">
                <img src={category.imageUrl} alt={category.name} />
            </article>
            <h3 className="card-title">{category.name}</h3>
        </article>
    );
}

export default CategoryCard;