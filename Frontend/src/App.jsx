import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Products from './components/Products';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
