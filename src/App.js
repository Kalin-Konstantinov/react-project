import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import './App.css';
import { AuthContextProvider } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Gallery from './components/Galerry/Gallery';
import AddCategory from './components/AddCategory/AddCategory';
import Login from './components/Login/Login';
import Recipes from './components/Recipes/Recipes';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import EditRecipe from './components/EditRecipe/EditRecipe';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<CreateRecipe />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/gallery/recipes/:category' element={<Recipes />} />
            <Route path='/add-category' element={<AddCategory />} />
            <Route path='/:recipeCategory/recipe/details/:recipeId' element={<RecipeDetails />} />
            <Route path='/:recipeCategory/recipe/edit/:recipeId' element={<EditRecipe />} />
            <Route path='/:recipeCategory/recipe/delete/:recipeId' element={<RecipeDetails />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
