
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

function NavBar() {
  const [isLogIn, setIsLogIn] = useState(false);

  const clickLogin =()=> {
    setIsLogIn(true);
  }
  const clickLogout =()=> {
    setIsLogIn(false);
  }

  return (
    <Wrap>
      <Link className='navmenu' to={'/popular'}><Menu>UMC Movie</Menu></Link>
      <Pages>
        {isLogIn? (
          <Link className='navmenu' onClick={clickLogout}><Menu>로그아웃</Menu></Link>
        ) : (
          <Link className='navmenu' onClick={clickLogin}><Menu>로그인</Menu></Link>
        )}
        <Link className='navmenu' to={'/popular'}><Menu>Popular</Menu></Link>
        <Link className='navmenu' to={'/nowplaying'}><Menu>Now Playing</Menu></Link>
        <Link className='navmenu' to={'/toprated'}><Menu>Top Rated</Menu></Link>
        <Link className='navmenu' to={'/upcoming'}><Menu>Upcoming</Menu></Link>
      </Pages>
    </Wrap>
  );
}

const Wrap = styled.div `
  background-color: rgb(27, 29, 57);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width:100vw;
`;

const Pages = styled.div `
  text-align: right;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
`;

const Menu = styled.div `
  color: white;
  padding-left: 20px;
  transition: transform 0.2s ease-in-out; /* Add transition effect */
  cursor: pointer; /* Change cursor to pointer */

  &:hover {
    transform: scale(1.1); /* Scale up on hover */
  }
`;

export default NavBar;
