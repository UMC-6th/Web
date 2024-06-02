import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const HeaderContainer = styled.div`
    width: 100%;
    background-color: rgba(3, 37, 65, 1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const HeaderWrap = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    margin: 0 auto;
`;

const HeaderLeftWrap = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavItem = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 10px;

    &.active-link {
        color: rgb(248, 234, 32);
    }

    &:hover {
        font-size: 1.4em;
    }
`;

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer; 
    margin: 30px;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Sidebar = styled.div`
    display: none;
    position: fixed;
    top: 60px;

    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
    width: 250px;
    height: 100%;
    background-color: rgba(55, 59, 106, 0.9);
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    transition: right 0.3s ease-in-out;

    @media (max-width: 768px) {
        display: block;
    }
`;

const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const SidebarItem = styled.li`
    margin-bottom: 20px;
`;

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        setUsername('');
        navigate('/');  // 로그아웃 후 홈페이지로 이동
        window.location.reload(); // 홈페이지 새로고침
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <HeaderContainer>
            <HeaderWrap>
                <HeaderLeftWrap>
                    <NavItem to='/'>UMC Movie</NavItem>
                </HeaderLeftWrap>
                <HeaderList>
                    <li>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} style={{ all: 'unset', color: 'rgb(248, 234, 32)', fontWeight: '600', margin: '10px' }}>
                                로그아웃
                            </button>
                        ) : (
                            <NavItem to='/Login'>
                                로그인
                            </NavItem>
                        )}
                    </li>
                    <li>
                        <NavItem to='/signup'>회원 가입</NavItem>
                    </li>
                    <li>
                        <NavItem className={location.pathname === '/Popular' ? "active-link" : ""} to='/Popular'>Popular</NavItem>
                    </li>
                    <li>
                        <NavItem className={location.pathname === '/Nowplay' ? "active-link" : ""} to='/Nowplay'>Now Playing</NavItem>
                    </li>
                    <li>
                        <NavItem className={location.pathname === '/Top' ? "active-link" : ""} to='/Top'>Top Rated</NavItem>
                    </li>
                    <li>
                        <NavItem className={location.pathname === '/Upcoming' ? "active-link" : ""} to='/Upcoming'>Upcoming</NavItem>
                    </li>
                </HeaderList>
                <MobileMenuButton onClick={toggleSidebar}>
                    &#9776; {/* 햄버거 메뉴 아이콘 */}
                </MobileMenuButton>
            </HeaderWrap>
            <Sidebar isOpen={isSidebarOpen}>
                <SidebarList>
                    <SidebarItem>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} style={{ all: 'unset', color: 'rgb(248, 234, 32)', fontWeight: '600', margin: '10px' }}>
                                로그아웃
                            </button>
                        ) : (
                            <NavItem to='/Login'>
                                로그인
                            </NavItem>
                        )}
                    </SidebarItem>
                    <SidebarItem>
                        <NavItem to='/signup'>회원 가입</NavItem>
                    </SidebarItem>
                    <SidebarItem>
                        <NavItem className={location.pathname === '/Popular' ? "active-link" : ""} to='/Popular'>Popular</NavItem>
                    </SidebarItem>
                    <SidebarItem>
                        <NavItem className={location.pathname === '/Nowplay' ? "active-link" : ""} to='/Nowplay'>Now Playing</NavItem>
                    </SidebarItem>
                    <SidebarItem>
                        <NavItem className={location.pathname === '/Top' ? "active-link" : ""} to='/Top'>Top Rated</NavItem>
                    </SidebarItem>
                    <SidebarItem>
                        <NavItem className={location.pathname === '/Upcoming' ? "active-link" : ""} to='/Upcoming'>Upcoming</NavItem>
                    </SidebarItem>
                </SidebarList>
            </Sidebar>
        </HeaderContainer>
    );
}
