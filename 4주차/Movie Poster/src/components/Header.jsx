import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const location = useLocation();

    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className="header-container">
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <ul>
                        <li>
                            <Link className="header-nav-item-1" to='/'>UMC Movie</Link>
                        </li>
                        <div>
                            <li>
                                <Link className={`header-nav-item-2 ${isLoggedIn ? "loggedin-color" : "loggedout-color"}`} to='/Login' onClick={handleLoginLogout}>
                                    {isLoggedIn ? '로그아웃' : '로그인'}
                                </Link>
                            </li>
                            <li>
                                <Link className={`header-nav-item ${location.pathname === '/Popular' ? "active-link" : ""}`} to='/Popular'>Popular</Link>
                            </li>
                            <li>
                                <Link className={`header-nav-item ${location.pathname === '/Nowplay' ? "active-link" : ""}`} to='/Nowplay'>Now Playing</Link>
                            </li>
                            <li>
                                <Link className={`header-nav-item ${location.pathname === '/Top' ? "active-link" : ""}`} to='/Top'>Top Rated</Link>
                            </li>
                            <li>
                                <Link className={`header-nav-item ${location.pathname === '/Upcomming' ? "active-link" : ""}`} to='/Upcomming'>Upcoming</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
