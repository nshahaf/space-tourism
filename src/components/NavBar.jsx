import { Link } from "react-router-dom";
import Logo from './../assets/icons/logo.svg?react';
import Hamburger from './../assets/icons/icon-hamburger.svg?react';

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo"><Logo/></div>
      <div className="line"></div>
      <nav>
        <Link to="/"></Link>
        <Link to="/home"><span>00</span> Home</Link>
        <Link to="/crew"><span>01</span> Crew</Link>
        <Link to="/dest"><span>02</span> Destination</Link>
        <Link to="/tech"><span>03</span> Technology</Link>
      </nav>
    </div>
  );
}
