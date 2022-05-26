import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png'
import auth from '../../firebase.init';
const Navber = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };



    const menuItems = <>
        <li className=''><Link to='/'>Home</Link></li>
        <li className=' '><Link to='/toolsorparts'>Tools/Parts</Link></li>
        <li className=' '><Link to='/purchase'>Purchase</Link></li>
        <li className=' '><Link to='/blogs'>Blogs</Link></li>
        <li className=' '><Link to='/contact'>Contact</Link></li>
        {
            user && <li className=''><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button className="text-lime-600" onClick={logout} >SIGN OUT</button> : <Link className='' to="/login">Login</Link>}</li>



    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <a className="btn btn-ghost normal-case text-xl"><img src={Logo} alt="" /></a>

            </div>
            <div className=" ">
                <div className="dropdown ml-6">
                    <label tabindex="0" className="ml-14 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>

            <div className="navbar-end hidden lg:flex">

                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {
                user && <div className="navbar-center">
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Dashboard</label>
                </div>
            }

        </div>
    );
};

export default Navber;