import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Products from './components/Products/Products';
import ToDo from './components/ToDo/ToDo';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/User/Profile';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Menu cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Products setCartItems={setCartItems} />} />
        <Route path='/todo' element={<ToDo />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
