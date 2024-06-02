import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useMediaQuery } from "react-responsive";

const StyleHeader = styled.header`
  grid-row: 1;
  background-color: #070a2b;
  margin-bottom: 0;
  margin: 0; 
  text-decoration: none; 
  color: white;
`;

const NavbarLogo = styled.div`
  a {
    color: white;
    text-decoration: none; 
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  text-align: center;
  margin-top: auto;
  text-decoration: none; 
  color: white;
`;

const LogInButton = styled.button`
  margin-top: auto;
  border: none;
  color: white;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: yellow;
  }

  ${props => props.isLogin && `
    color: yellow;
  `}
`;

const NavbarMenu = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  text-align: center;
  margin-top: auto;
  text-decoration: none; 
  color: white;

  li {
    margin-top: auto;
    margin-bottom: auto;
    padding: 8px 12px;
    text-decoration: none; 
    color: white;

    &:hover {
      transform: scale(1.5);
      transition-duration: 0.1s;
      color: yellow;
      text-decoration: none; 
    }

    a {
      text-decoration: none; 
      color: white;

      &:hover {
        color: yellow;
        text-decoration: none;
      }
    }
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #070a2b;
  padding: 10px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  z-index: 1000; /* 높은 z-index 값을 설정하여 스크롤바를 앞으로 가져옴 */
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  text-decoration: none; 
  color: white;

  a {
    text-decoration: none; 
    color: white;

    &:hover {
      color: yellow;
      text-decoration: none;
    }
  }
`;

const SidebarButton = styled.button`
  position: absolute;
  top: 5px;
  right: 15px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
`;

const SidebarLogo = styled.li`
  margin-bottom: 50px; /* 원하는 여백 설정 */
  padding: 8px 12px;
  color: white;
  font-weight: bold;
`
const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SidebarTitle = styled.p`
position: absolute;
left: 3%;
top: 1%;
font-size: small;
`


const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  text-align: center;
  
  text-decoration: none; 
  color: white;

  li {
    list-style-type: none;
    margin-top: 10px;
    margin-bottom: 10px;
    text-decoration: none; 
    color: white;

    a {
      text-decoration: none; 
      color: white;

      &:hover {
        color: yellow;
        text-decoration: none;
      }
    }
  }
`;


export default function Header({ isLogin, onLogout }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
    window.location.reload();
  };

  return (
    <StyleHeader>
      <Navbar>
        <NavbarLogo>
          <Link to="/">UMC movies</Link>
        </NavbarLogo>

        {isMobile ? (
          <>
            <SidebarButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
            ☰
            </SidebarButton>
            <Sidebar isOpen={isSidebarOpen}>
            <SidebarTitle>UMCMovies</SidebarTitle>
              <SidebarButton onClick={() => setSidebarOpen(false)}> ☰</SidebarButton>
              <SidebarMenu>
              <ul>
                <SidebarHeader>
           
              </SidebarHeader>
                <li><Link to="/Signup" onClick={() => setSidebarOpen(false)}>회원가입</Link></li>
                <li>
                  {isLogin ? (
                    <LogInButton isLogin={isLogin} onClick={handleLogout}>로그아웃</LogInButton>
                  ) : (
                    <Link to="/Login" onClick={() => setSidebarOpen(false)}>로그인</Link>
                  )}
                </li>
                
                <li><NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/Popular" onClick={() => setSidebarOpen(false)}>Popular</NavLink></li>
                <li><NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/NowPlaying" onClick={() => setSidebarOpen(false)}>Now Playing</NavLink></li>
                <li><NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/Toprated" onClick={() => setSidebarOpen(false)}>Top Rated</NavLink></li>
                <li><NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/Upcoming" onClick={() => setSidebarOpen(false)}>Upcoming</NavLink></li>
              </ul>
              </SidebarMenu>
            </Sidebar>
          </>
        ) : (
          <NavbarMenu>
            <li><Link to="/Signup">회원가입</Link></li>
            <li>
              {isLogin ? (
                <LogInButton isLogin={isLogin} onClick={handleLogout}>로그아웃</LogInButton>
              ) : (
                <Link to="/Login">로그인</Link>
              )}
            </li>
            <li><NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/Popular">Popular</NavLink></li>
            <li><NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/NowPlaying">Now Playing</NavLink></li>
            <li><NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/Toprated">Top Rated</NavLink></li>
            <li><NavLink style={({ isActive }) => (isActive ? { color: "yellow" } : {})} to="/Upcoming">Upcoming</NavLink></li>
          </NavbarMenu>
        )}
      </Navbar>
    </StyleHeader>
  );
}