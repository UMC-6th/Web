import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.div`
  text-decoration: none;
    background-color: rgba(3, 37, 65, 1);
    color: white;
    
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height : 60px;
`;

const FooterWrap = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    
`;

const FooterLeftWrap = styled.div`
    margin-right: 15px;
   
    text-align: center;
`;

const FooterNavItem = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 600;
    

    &:hover {
        color: rgb(248, 234, 32);
    }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLeftWrap>
          <ul>
            <div>
              <FooterNavItem to='/'>UMC Movie.com</FooterNavItem>
            </div>
          </ul>
        </FooterLeftWrap>
      </FooterWrap>
    </FooterContainer>
  );
}
