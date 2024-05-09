import styled from 'styled-components';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    color: ${({ clicked }) => (clicked ? 'skyblue' : 'white')}; /* 클릭된 경우 skyblue, 아닌 경우 white */
    font-size: 17px;
    font-weight: ${({ clicked }) => (clicked ? '800' : 'normal')};
    cursor: pointer; /* 마우스 커서를 포인터로 변경하여 클릭 가능한 요소임을 표시합니다. */
`;

const MainText = styled.p`
    margin: 0px;
    color: white;
    padding-left: 20px;
    font-size: 20px;
    font-weight: bold;
`;

const Toggle = styled.span`
    cursor: pointer;
`;

function NavbarComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const location = useLocation();

    const handleLoginClick = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <Navbar>
            <Link to="/popular-page"><MainText> Movie</MainText></Link>
            <MenuBox>
                <Link to="/main-page">
                    <MenuText clicked={location.pathname === '/main-page'}>
                        <Toggle onClick={handleLoginClick}>{isLoggedIn ? '로그인' : '로그아웃'}</Toggle>
                    </MenuText>
                </Link>

                <Link to="/popular-page">
                    <MenuText clicked={location.pathname === '/popular-page'}>
                        Popular
                    </MenuText>
                </Link>
                <Link to="/now-playing-page">
                    <MenuText clicked={location.pathname === '/now-playing-page'}>
                        Now Playing
                    </MenuText>
                </Link>
                <Link to="/top-rated-page">
                    <MenuText clicked={location.pathname === '/top-rated-page'}>
                        Top Rated
                    </MenuText>
                </Link>
                <Link to="/up-coming-page">
                    <MenuText clicked={location.pathname === '/up-coming-page'}>
                        Upcoming
                    </MenuText>
                </Link>
            </MenuBox>
        </Navbar>
    );
}

export default NavbarComponent;
