import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
