import './App.css';
import Navber from './Pages/Shared/Navber';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs'
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound';
import AllToolsAndParts from './Pages/AllToolsAndParts/AllToolsAndParts';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from '.././src/Pages/Dashboard/MyOrders'
import MyProfile from '.././src/Pages/Dashboard/MyProfile'
import MyReviews from '.././src/Pages/Dashboard/MyReviews'
import AllUsers from './Pages/Dashboard/AllUsers';


function App() {
  return (
    <div>

      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/toolsorparts' element={<AllToolsAndParts />} />
        <Route path='/purchase' element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} >

          <Route index element={<AllUsers></AllUsers>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myreviews' element={<MyReviews></MyReviews>}></Route>

        </Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
