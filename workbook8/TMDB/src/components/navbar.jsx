import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from './auth';

function NavBar() {
  const { auth, logout } = useContext(AuthContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    // 페이지가 로드될 때 사이드바를 닫은 상태로 설정
    setSidebarOpen(false);
  }, []);

  return (
    <>
      <Wrap>
        <Link className='navmenu-main' to={'/'} onClick={closeSidebar}><MainMenu>UMC Movie</MainMenu></Link>
        <MenuButton onClick={toggleSidebar}>≡</MenuButton>
        <ResponsivePages isOpen={isSidebarOpen}>
          {auth.isAuthenticated ? (
            <Menu onClick={() => { logout(); closeSidebar(); }} isSidebarOpen={isSidebarOpen}>로그아웃</Menu>
          ) : (
            <Link className='navmenu' to={'/login'} onClick={closeSidebar}><Menu isSidebarOpen={isSidebarOpen}>로그인</Menu></Link>
          )}
          <Link className='navmenu' to={'/signup'} onClick={closeSidebar}><Menu isSidebarOpen={isSidebarOpen}>회원가입</Menu></Link>
          <Link className='navmenu' to={'/popular'} onClick={closeSidebar}><Menu isSidebarOpen={isSidebarOpen}>Popular</Menu></Link>
          <Link className='navmenu' to={'/nowplaying'} onClick={closeSidebar}><Menu isSidebarOpen={isSidebarOpen}>Now Playing</Menu></Link>
          <Link className='navmenu' to={'/toprated'} onClick={closeSidebar}><Menu isSidebarOpen={isSidebarOpen}>Top Rated</Menu></Link>
          <Link className='navmenu' to={'/upcoming'} onClick={closeSidebar}><Menu isSidebarOpen={isSidebarOpen}>Upcoming</Menu></Link>
        </ResponsivePages>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  background-color: rgb(27, 29, 57);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Pages = styled.div`
  text-align: right;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
`;

const ResponsivePages = styled(Pages)`
  @media (max-width: 654px) {
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: rgb(34, 37, 75);
    width: 100%;
    height: calc(100% - 85px);
    text-align: left;
    z-index: 1000;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')}; /* 수정된 부분 */
  }
`;

const MenuButton = styled.div`
  display: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding-right: 10px;

  @media (max-width: 654px) {
    display: block;
  }
`;

const MainMenu = styled.div`
  color: white;
  padding-left: 20px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Menu = styled.div`
  color: white;
  padding-left: 20px;
  cursor: pointer;
  font-weight: normal;

  &:hover {
    color: ${({ isSidebarOpen }) => (isSidebarOpen ? 'gold' : 'white')};
    font-weight: ${({ isSidebarOpen }) => (isSidebarOpen ? 'bold' : 'normal')};
    transform: ${({ isSidebarOpen }) => (isSidebarOpen ? 'none' : 'scale(1.1)')};
  }

  @media (max-width: 654px) {
    margin: 10px 0 10px 20px;
  }
`;

export default NavBar;
