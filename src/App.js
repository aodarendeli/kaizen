import './App.css';
import { Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from './pages/Contact/Contact';
import Store from './context/Store';

function App() {
  return (
    <Store>
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Store>
  );
}

export default App;
