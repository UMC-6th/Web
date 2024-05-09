import React from "react";
import styled from "styled-components";


export default function Home(){


  const Container = styled.div`
  display: grid;
  grid-template-rows: calc(1/9 * 100vh) calc(4/9 * 100vh) calc(4/9 * 100vh);
  grid-gap: 0;
`;


const Aside = styled.aside`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AsideText = styled.p`
  color: white;
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
  margin-top: 8%;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Footer = styled.footer`
  grid-row: 3;
  background-color: #22254b;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  height: 100px; 
`;

const FooterText = styled.p`
  position:absolute;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FooterInput = styled.input`
  position: relative;
  margin-top: 85%;
  left: 30%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

`;

const FooterSvg = styled.svg`
  height: 20px;
  right: 36%;
  top: 75%;
  position: absolute;
`;

const Svg1 = styled(FooterSvg)`
  left: 30%;
  top: 300%;
`;

const Svg2 = styled(FooterSvg)`
  position: absolute;
  right: 500px;
  top: 450px;
`;

    return(
      <Container>

      <Aside><AsideText>환영합니다</AsideText></Aside>
      <Footer>
      <Svg1 className='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"/></Svg1>
      <FooterContainer>
      <FooterText>Find your movie!</FooterText>
      <FooterInput type='text' />
      </FooterContainer>
      <Svg2 className='svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></Svg2>
      </Footer>
      </Container>
  
    )
  }