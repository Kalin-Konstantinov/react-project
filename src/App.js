import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import './App.css';
import { AuthContextProvider } from './contexts/AuthContext';
import Logout from './components/Logout/Logout';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Gallery from './components/Galerry/Gallery';

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
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
