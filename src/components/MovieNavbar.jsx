import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Styled components
const Navbar = styled.div`
    width: 100vw;
    height: 100px;
    background-color: rgb(19,19,40);
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
    padding-left: 50px;
    font-size: 22px;
`;

const MenuBox = styled.div`
    width: 700px;
    flex-direction: row;
    display: flex;
    justify-content: end;
    padding-right: 70px;
`;

const LoginText = styled.p`
    margin: 0px;
    padding: 0px 10px;
    font-size: 22px;
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
    color: white;
    font-size: 20px;
    &:hover {
        color: orange;
        font-size: 17.5px;
        font-weight: 600;
    }
`;

function MovieNavbar() {
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
            <Link to="/main-page"><MainText>UMC Movie</MainText></Link>
            <MenuBox>
                <Link to="/login-page"><LoginText onClick={handleLoginClick}>{isLoggedIn ? '로그아웃' : '로그인'}</LoginText></Link>
                <Link to="/join-page"><MenuText>회원가입</MenuText></Link>
                <Link to="/popular-page"><MenuText>Popular</MenuText></Link>
                <Link to="/now-playing-page"><MenuText>Now Playing</MenuText></Link>
                <Link to="/top-rated-page"><MenuText>Top Rated</MenuText></Link>
                <Link to="/up-coming-page"><MenuText>Upcoming</MenuText></Link>
            </MenuBox>
        </Navbar>
    );
}

export default MovieNavbar;