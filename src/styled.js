import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(54, 53, 88);
  color: white;
  display: flex;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 70%;
`;

export const TitleWrap = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-around;
  padding: 5% 5%;
`;

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1000;
`;

export const Description = styled.div`
  font-size: 0.7rem;
`;

export const Heading = styled.h4`
  padding-bottom: 20px;
`;

export const BoxHover = styled(Box)`
  &:hover #modal {
    opacity: 1;
  }
`;

