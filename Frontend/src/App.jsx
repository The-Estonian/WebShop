import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/profile' element={<span>profile</span>} />
        <Route path='/login' element={<span>login</span>} />
      </Routes>
    </Router>
  );
}

export default App;
