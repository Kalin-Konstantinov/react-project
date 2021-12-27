import { useNavigate, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { postCategory } from '../../services/catalogService';
import './AddCategory.css';

const AddCategory = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    if(user.name !== 'admin') {
        return <Navigate to="/"/>
    }

    const onSubmitCategory = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        if (name === '' || imageUrl === '') {
            return alert('Please fill all fields.')
        }
        console.log(name, imageUrl);
        postCategory({ name, imageUrl }, user.accessToken)
            .then(res => {
                console.log(res);
                navigate('/gallery')
            })
    }

    return (
        <section className="add-category">
            <h2 className="add-category-title">Add Category</h2>
            <form className="add-category-form" onSubmit={onSubmitCategory} >
                <input type="text" className="add-category-name" name="name" placeholder="category name..." />
                <input type="text" className="add-category-image" name="imageUrl" placeholder="category image..." />
                <input type="submit" className="add-category-button" value="Save Category" />
            </form>
        </section>
    );
}

export default AddCategory;