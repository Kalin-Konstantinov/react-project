import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { isAdmin } from '../../hocs/isAdmin';
import { postCategory } from '../../services/catalogService';
import './AddCategory.css';

const AddCategory = () => {
    const { user } = useAuthContext();
    const navigate = useNavigate();


    const onSubmitCategory = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const imageUrl = formData.get('imageUrl');
        if (name === '' || imageUrl === '') {
            return alert('Please fill all fields.')
        }
        postCategory({ name, imageUrl }, user.accessToken)
            .then(res => {
                navigate('/gallery')
            })
    }

    return (
        <section className="add-category">
            <section className="add-category-wrapper">
                <h2 className="add-category-title">Add Category</h2>
                <form className="add-category-form" onSubmit={onSubmitCategory} >
                    <input type="text" className="add-category-name" name="name" placeholder="category name..." />
                    <input type="text" className="add-category-image" name="imageUrl" placeholder="category image..." />
                    <input type="submit" className="add-category-button" value="Save Category" />
                </form>
            </section>
        </section>
    );
}

export default isAdmin(AddCategory);