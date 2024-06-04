import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import media from '../styles/media';
import MenuIcon from '../src/assets/menu.png';

// Styled components
const Navbar = styled.div`
    width: 100vw;
    height: 50px;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px;
    margin: 0px;
`;

const MainText = styled.p`
    margin: 0px;
    color: white;
    padding-left: 20px;

    ${media.mobile`
        font-size: 15px;
        width: 200px;
    `}
`;

const MenuBox = styled.div`
    width: 600px;
    flex-direction: row;
    display: flex;
    justify-content: end;
    padding-right: 20px;
`;

const LoginText = styled.p`
    margin: 0px;
    padding: 0px 10px;
    font-size: 17px;
    color: orange;
    &:hover {
        color: orange;
        font-size: 17.5px;
        font-weight: 600;
    }
`;

const MenuText = styled.p`
    margin: 0px;
    padding: 0px 10px;
    color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
    font-size: 17px;
    &:hover {
        color: orange;
        font-size: 17.5px;
        font-weight: 600;
    }
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-250px")}; // isOpen 상태에 따라 위치 변경
    width: 40%;
    height: 100%;
    background-color: #222222;
    padding-top: 20px;
    z-index: 100;
    transition: right 0.3s ease-in-out;
`;

const SideMenuText = styled.p`
    margin-top: 5px;
    padding: 0px 10px;
    color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
    font-size: 15px;
    &:hover {
        color: orange;
        font-size: 15.5px;
        font-weight: 600;
    }
`;

const SideLoginText = styled.p`
    margin-top: 5px;
    padding: 0px 10px;
    font-size: 15px;
    color: orange;
    &:hover {
        color: orange;
        font-size: 15.5px;
        font-weight: 600;
    }
`;

function NavbarComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(windowWidth < 1080);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMobileOrTablet(window.innerWidth < 1080);
        };
        window.addEventListener('resize', handleResize);
        // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchUserData = () => {
            if (token) {
                axios.get('http://localhost:8080/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    if (response.status === 200) {
                        setIsLoggedIn(true);
                        // setUserName(response.data.name);
                    } else {
                        console.error('유저 정보 가져오기 실패:', response.status);
                        setIsLoggedIn(false);
                    }
                })
                .catch(error => {
                    setIsLoggedIn(false);
                    console.error('유저 정보 가져오기 오류:', error);
                });
            } else {
                setIsLoggedIn(false);
            }
        };
        fetchUserData();
    });

    const handleLoginClick = () => {
        if (isLoggedIn) {
            localStorage.removeItem('token');
        }
        fetchUserData();
        setIsLoggedIn(!isLoggedIn);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // 사이드바 토글 함수
    };

    return (
        <Navbar>
            <Link to="/popular-page"><MainText>UMC Chacco Movie</MainText></Link>
            <MenuBox>
                {isMobileOrTablet 
                ? 
                    <img src={MenuIcon} onClick={toggleSidebar} alt="loading" width="15px" height="15px" color='white'/>
                :
                <>
                {isLoggedIn ? (
                    <LoginText onClick={handleLoginClick}>로그아웃</LoginText>
                ) : (
                    <>
                        <Link to="/login"><LoginText onClick={handleLoginClick}>로그인</LoginText></Link>
                        <Link to="/signup"><MenuText isActive={activeMenu === 'signup'} onClick={() => handleMenuClick('signup')}>회원가입</MenuText></Link>
                    </>
                )}
                <Link to="/popular-page"><MenuText isActive={activeMenu === 'popular'} onClick={() => handleMenuClick('popular')}>Popular</MenuText></Link>
                <Link to="/now-playing-page"><MenuText isActive={activeMenu === 'now-playing'} onClick={() => handleMenuClick('now-playing')}>Now Playing</MenuText></Link>
                <Link to="/top-rated-page"><MenuText isActive={activeMenu === 'top-rated'} onClick={() => handleMenuClick('top-rated')}>Top Rated</MenuText></Link>
                <Link to="/up-coming-page"><MenuText isActive={activeMenu === 'up-coming'} onClick={() => handleMenuClick('up-coming')}>Upcoming</MenuText></Link>
                </>
                }
            </MenuBox>
            {isMobileOrTablet && (
                <Sidebar isOpen={sidebarOpen}>
                    <SideMenuText onClick={() => toggleSidebar()}>닫기</SideMenuText>
                    <>
                        <Link to="/login"><SideLoginText onClick={() => {handleLoginClick, toggleSidebar()}}>로그인</SideLoginText></Link>
                        <Link to="/signup"><SideMenuText isActive={activeMenu === 'signup'} onClick={() => {handleMenuClick('signup'), toggleSidebar()}}>회원가입</SideMenuText></Link>
                    </>
                    <Link to="/popular-page"><SideMenuText isActive={activeMenu === 'popular'} onClick={() => {handleMenuClick('popular'), toggleSidebar()}}>Popular</SideMenuText></Link>
                    <Link to="/now-playing-page"><SideMenuText isActive={activeMenu === 'now-playing'} onClick={() => {handleMenuClick('now-playing'), toggleSidebar()}}>Now Playing</SideMenuText></Link>
                    <Link to="/top-rated-page"><SideMenuText isActive={activeMenu === 'top-rated'} onClick={() => {handleMenuClick('top-rated'), toggleSidebar()}}>Top Rated</SideMenuText></Link>
                    <Link to="/up-coming-page"><SideMenuText isActive={activeMenu === 'up-coming'} onClick={() => {handleMenuClick('up-coming'), toggleSidebar()}}>Upcoming</SideMenuText></Link>
                </Sidebar>
            )}
        </Navbar>
    );
}

export default NavbarComponent;
