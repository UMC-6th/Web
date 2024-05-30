import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';


export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        if (token) {
            setIsLoggedIn(true);
        }
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        setUsername('');
        navigate('/');  // 로그아웃 후 홈페이지로 이동
        window.location.reload(); // 홈페이지 새로고침
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
                                {isLoggedIn ? (
                                    <button className="header-nav-item-2 loggedin-color" onClick={handleLogout}>
                                        로그아웃
                                    </button>
                                ) : (
                                    <Link className="header-nav-item-2 loggedout-color" to='/Login'>
                                        로그인
                                    </Link>
                                )}
                            </li>
                            <li>
                                <Link className="header-nav-item" to='/signup'>회원 가입</Link>
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
                                <Link className={`header-nav-item ${location.pathname === '/Upcoming' ? "active-link" : ""}`} to='/Upcoming'>Upcoming</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}
