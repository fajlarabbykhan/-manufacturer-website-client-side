import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.png'
const Navber = () => {
    const menuItems = <>
        <li className='text-xl'><Link to='/'>Home</Link></li>
        <li className='text-xl'><Link to='/toolsorparts'>Tools/Parts</Link></li>
        <li className='text-xl'><Link to='/purchase'>Purchase</Link></li>
        <li className='text-xl'><Link to='/blogs'>Blogs</Link></li>
        <li className='text-xl'><Link to='/contact'>Contact</Link></li>
        <li className='text-xl'><Link to='/about'>About</Link></li>
        <li className='text-xl'><Link to='/login'>Login</Link></li>


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
        </div>
    );
};

export default Navber;