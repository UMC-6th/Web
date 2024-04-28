import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
   
    <header>
      <nav className='navbar'>  
        <nav className='navbar_logo'>
          <Link to={"/"}>UMC movies</Link>
        </nav>

        <ul className="navbar__menu">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Popular'}>Popular</Link></li>
          <li><Link to={'/NowPlaying'}>Now Playing</Link></li>
          <li><Link to={'/Toprated'}>Top Rated</Link></li>
          <li><Link to={'/Upcoming'}>Upcoming</Link></li>
        </ul>
      </nav>
    </header>
  );
}