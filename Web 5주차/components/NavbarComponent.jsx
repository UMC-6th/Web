import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
`;

const MenuBox = styled.div`
    width: 500px;
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

function NavbarComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleLoginClick = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    }

    return (
        <Navbar>
            <Link to="/popular-page"><MainText>UMC Chacco Movie</MainText></Link>
            <MenuBox>
                {/* <Link to="/main-page"><LoginText onClick={handleLoginClick}>{isLoggedIn ? '로그아웃' : '로그인'}</LoginText></Link> */}
                <Link to="/signup"><MenuText isActive={activeMenu === 'signup'} onClick={() => handleMenuClick('signup')}>회원가입</MenuText></Link>
                <Link to="/popular-page"><MenuText isActive={activeMenu === 'popular'} onClick={() => handleMenuClick('popular')}>Popular</MenuText></Link>
                <Link to="/now-playing-page"><MenuText isActive={activeMenu === 'now-playing'} onClick={() => handleMenuClick('now-playing')}>Now Playing</MenuText></Link>
                <Link to="/top-rated-page"><MenuText isActive={activeMenu === 'top-rated'} onClick={() => handleMenuClick('top-rated')}>Top Rated</MenuText></Link>
                <Link to="/up-coming-page"><MenuText isActive={activeMenu === 'up-coming'} onClick={() => handleMenuClick('up-coming')}>Upcoming</MenuText></Link>
            </MenuBox>
        </Navbar>
    );
}

export default NavbarComponent;
