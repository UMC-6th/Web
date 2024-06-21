import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { CartIcon } from '../constants/icons';

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Nav>
      <NavContainer>
        <Logo href='/'>UMC Playlist</Logo>
        <Actions>
          <CartButton>
            <CartIcon />
            {totalAmount > 0 && <Badge>{totalAmount}</Badge>}
          </CartButton>
        </Actions>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: rgb(88, 82, 254);
  color: white;
  padding: 15px 50px;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;
const Logo = styled.a`
  font-size: 22px;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CartButton = styled.button`
  position: relative;
  padding: 5px 10px;
  border: none;
  background-color: transparent;
  color: white;
`;
const Badge = styled.span`
  position: absolute;
  top: 1px; right: 2px;
  background-color: rgb(151, 146, 253);
  color: white;
  font-size: 12px;
  width: 20px; height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Navbar;
