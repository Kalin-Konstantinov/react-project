import './AddCategory.css';

const AddCategory = () => {
    return (
        <section className="add-category">
            <h2 className="add-category-title">Add Category</h2>
            <from className="add-category-form" >
                <input type="text" className="add-category-name" name="name" placeholder="category name..."/>
                <input type="text" className="add-category-image" name="imageUrl" placeholder="category image..."/>
                <input type="submit" className="add-category-button" value="Save Category"/>
            </from>
        </section>
    );
}

export default AddCategory;