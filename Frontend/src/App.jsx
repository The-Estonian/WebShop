import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Products from './components/Products';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/profile' element={<span>profile</span>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
