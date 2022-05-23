import './App.css';
import Navber from './Pages/Shared/Navber';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs'
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound';
function App() {
  return (
    <div>

      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
