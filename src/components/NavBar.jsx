import {NavLink, useNavigate } from "react-router-dom";
import Logo from './../assets/icons/logo.svg?react';
// import Hamburger from './../assets/icons/icon-hamburger.svg?react';

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <div className="navbar-container">
      <div className="logo" onClick={() => navigate('/')}><Logo/></div>
      <div className="line"></div>
      <nav className="text-8">
        <NavLink to="/"></NavLink>
        <NavLink to="/"><span>00</span> Home</NavLink>
        <NavLink to="/destination"><span>01</span> Destination</NavLink>
        <NavLink to="/crew"><span>02</span> Crew</NavLink>
        <NavLink to="/technology"><span>03</span> Technology</NavLink>
      </nav>
    </div>
  );
}
