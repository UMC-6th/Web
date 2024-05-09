import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

export default function Header() {

  const Header = styled.header`
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




  const [contents,setContents] = useState("로그인");

  const changeContents = () => {
    setContents(prev => prev === "로그인" ? "로그아웃" : "로그인")
}
    const activeStyle = {
      color: 'yellow'
    }
  
  return (
   
    <Header>
      <Navbar>
       <NavbarLogo>
          <Link to={"/"}>UMC movies</Link>
        </NavbarLogo>

        <NavbarMenu>
        <li><LogInButton onClick={changeContents}>{contents}</LogInButton></li>
          

          <li><NavLink style={({isActive})=>(isActive? activeStyle :{})} to={'/Popular'}>Popular</NavLink></li>
          <li><NavLink style={({isActive})=>(isActive? activeStyle :{})} to={'/NowPlaying'}>Now Playing</NavLink></li>
          <li><NavLink style={({isActive})=>(isActive? activeStyle :{})} to={'/Toprated'}>Top Rated</NavLink></li>
          <li><NavLink style={({isActive})=>(isActive? activeStyle :{})} to={'/Upcoming'}>Upcoming</NavLink></li>
          </NavbarMenu>
        </Navbar>
        </Header>
  );
}