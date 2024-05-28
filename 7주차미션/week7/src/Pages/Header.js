import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";


  const StyleHeader = styled.header`
  grid-row: 1;
  background-color: #070a2b;
  margin-bottom: 0;
`;


const NavbarLogo = styled.nav`
    color: white;
`

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    text-align: center;
    margin-top: auto;
`
const LogInButton = styled.nav`
  margin-top: auto;
  border: none;
  color: white;
  background-color: transparent;

  &:hover{
    color: yellow;
  }
  ${props => props.isLogin && `
    color: yellow;
  `}
`

const NavbarMenu = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  text-align: center;
  margin-top: auto;

  li {
    margin-top: auto;
    margin-bottom: auto;
    padding: 8px 12px;
    color: white;

    &:hover {
      transform: scale(1.5);
      transition-duration: 0.1s;
    }

  }
`;


/*

  const [contents,setContents] = useState("로그인");

  const changeContents = () => {
    setContents(prev => prev === "로그인" ? "로그아웃" : "로그인")
}
*/



export default function Header({ isLogin, onLogout }) {
  const activeStyle = {
    color: "yellow",
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // 부모 컴포넌트의 로그아웃 상태 업데이트 함수 호출
    navigate("/");
    window.location.reload(); // 홈페이지 새로고침
  };

  return (
    <StyleHeader>
      <Navbar>
        <NavbarLogo>
          <Link to={"/"}>UMC movies</Link>
        </NavbarLogo>

        <NavbarMenu>
          <li><Link to={'/Signup'}>회원가입</Link></li>
          <li>
            {isLogin ? (
             <LogInButton isLogin={isLogin} onClick={handleLogout}>로그아웃</LogInButton>
            ) : (
              <Link to={'/Login'}>로그인</Link>
            )}
          </li>
        
          <li><NavLink style={({isActive})=>(isActive? activeStyle :{})} to={'/Popular'}>Popular</NavLink></li>
          <li><NavLink style={({isActive})=>(isActive? activeStyle :{})} to={'/NowPlaying'}>Now Playing</NavLink></li>
          <li><NavLink style={({isActive})=>(isActive? activeStyle :{})} to={'/Toprated'}>Top Rated</NavLink></li>
          <li><NavLink style={({isActive})=>(isActive? activeStyle :{})} to={'/Upcoming'}>Upcoming</NavLink></li>
        </NavbarMenu>
      </Navbar>
    </StyleHeader>
  );
}