import './CategoryCard.css'


const CategoryCard = ({
    category,
}) => {
    return (
        <article className="gallery-categories-card">
            <article className="gallery-categories-card-img">
                <img src={category.imageUrl} alt={category.name}/>
            </article>
            <h3 className="card-title">{category.name}</h3>
        </article>
    );
}

export default CategoryCard;