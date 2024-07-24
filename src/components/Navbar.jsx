// src/components/Navbar.jsx
import React from 'react';
import { ModeToggle } from './mode-toggle';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-3 " >
      <div className="container border-r-2 flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyLogo</div>
        <div className="space-x-7">
          <NavLink to="/" className="text-white ">Home</NavLink>
          <NavLink to="#" className="text-white ">Courses</NavLink>
          <NavLink to="#" className="text-white">My certificates</NavLink>
          <NavLink to="/login" className="text-white">Login</NavLink>
          <NavLink to="/signup" className="text-white">Signup</NavLink>
        </div>
      </div>
      <div className='absolute top-0 right-0 m-1 p-1'>
    <ModeToggle/>
    </div>
    </nav>
  );
};

export default Navbar;
