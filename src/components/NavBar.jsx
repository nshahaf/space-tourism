import {NavLink } from "react-router-dom";
import Logo from './../assets/icons/logo.svg?react';
// import Hamburger from './../assets/icons/icon-hamburger.svg?react';

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo"><Logo/></div>
      <div className="line"></div>
      <nav className="text-8">
        <NavLink to="/"></NavLink>
        <NavLink to="/"><span>00</span> Home</NavLink>
        <NavLink to="/dest"><span>01</span> Destination</NavLink>
        <NavLink to="/crew"><span>02</span> Crew</NavLink>
        <NavLink to="/tech"><span>03</span> Technology</NavLink>
      </nav>
    </div>
  );
}
