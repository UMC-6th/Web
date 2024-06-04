import styled from 'styled-components';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = styled.div`
    width: 100vw;
    height: 60px;
    background-color: rgb(19, 19, 19);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 25px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const MenuBox = styled.div`
    width: 500px;
    flex-direction: row;
    display: flex;
    padding-right: 20px;
`;

const MenuText = styled.p`
    margin-right: -10px;
    padding: 10px;
    color: ${({ clicked }) => (clicked ? 'skyblue' : 'white')}; 
    font-size: 17px;
    font-weight: ${({ clicked }) => (clicked ? '800' : 'normal')};
    cursor: pointer; 
`;

const MainText = styled.p`
    margin: 0px;
    color: white;
    padding-left: 20px;
    font-size: 20px;
    font-weight: bold;
`;



const Sidebar = styled.div`
    display: none;
    background-color: rgb(19, 19, 19,0.8);
    color: white;
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 60px;
    z-index: 1000;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;

    @media (max-width: 768px) {
        display: flex;
    }
`;

const SidebarMenuText = styled(MenuText)`
    width: 100%;
    text-align: left;
    padding-left: 20px;
`;

const SideToggle = styled.span`
    display: none;
    position: fixed;
    top: 20px;
    left: 20px;
    color: white;
    font-size: 24px;
    z-index: 1100;

    @media (max-width: 768px) {
        display: block;
    }
`;

function NavbarComponent() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Navbar>
                <Link to="/main-page"><MainText>Movie</MainText></Link>
                <MenuBox>
                    <Link to="/signup">
                        <MenuText clicked={location.pathname === '/signup'}>
                            회원가입
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
            <SideToggle onClick={handleToggle}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </SideToggle>
            <Sidebar isOpen={isOpen}>
                <Link to="/signup" onClick={handleLinkClick}>
                    <SidebarMenuText clicked={location.pathname === '/signup'}>
                        회원가입
                    </SidebarMenuText>
                </Link>
                <Link to="/popular-page" onClick={handleLinkClick}>
                    <SidebarMenuText clicked={location.pathname === '/popular-page'}>
                        Popular
                    </SidebarMenuText>
                </Link>
                <Link to="/now-playing-page" onClick={handleLinkClick}>
                    <SidebarMenuText clicked={location.pathname === '/now-playing-page'}>
                        Now Playing
                    </SidebarMenuText>
                </Link>
                <Link to="/top-rated-page" onClick={handleLinkClick}>
                    <SidebarMenuText clicked={location.pathname === '/top-rated-page'}>
                        Top Rated
                    </SidebarMenuText>
                </Link>
                <Link to="/up-coming-page" onClick={handleLinkClick}>
                    <SidebarMenuText clicked={location.pathname === '/up-coming-page'}>
                        Upcoming
                    </SidebarMenuText>
                </Link>
            </Sidebar>
        </>
    );
}

export default NavbarComponent;
