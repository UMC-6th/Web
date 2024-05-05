import styled from 'styled-components';
//import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = styled.div`
    width: 100vw;
    height: 60px;
    background-color: rgb(19, 19, 19);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 25px;
`;

const MenuBox = styled.div`
    width: 500px;
    flex-direction: row;
    display: flex;
    padding-right: 20px;
`;

const MenuText = styled.p`
    margin-right: -10px;
    padding: 0px 10px;
    color: white;
    font-size: 17px;
    &:hover {
        color: skyblue;
        font-weight: 800;
    }
`;
const MainText = styled.p`
    margin: 0px;
    color: white;
    padding-left: 20px;
    font-size: 20px;
    font-weight: bold;
`;
function NavbarComponent() {
    return (
        <Navbar>
            <Link to="/popular-page"><MainText> Movie</MainText></Link>
            <MenuBox>
                <Link to="/main-page"><MenuText>회원가입</MenuText></Link>
                <Link to="/popular-page"><MenuText>Popular</MenuText></Link>
                <Link to="/now-playing-page"><MenuText>Now Playing</MenuText></Link>
                <Link to="/top-rated-page"><MenuText>Top Rated</MenuText></Link>
                <Link to="/up-coming-page"><MenuText>Upcoming</MenuText></Link>
            </MenuBox>
        </Navbar>
    );
}

export default NavbarComponent;
