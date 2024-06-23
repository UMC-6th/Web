import styled, {createGlobalStyle} from 'styled-components'



export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  button{
    border:none;
    background-color:transparent;
    cursor: pointer;
  }
`;


export const Container = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  width:100vw;
  `
export const HeaderContainer = styled.div`
  position:relative;
  width:100%;
  height:100px;
  padding:10px 10%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:#5852FE;

  
`

export const HeadLine = styled.h1`
  color:white;
`

export const HeadIcon = styled.div`
  position:relative;
  width:50px;
  height:50px;
`
export const CartNum = styled.div`
  position:absolute;
  top:0;
  right:0;
  width:20px;
  height:20px;
  background-color:#d9d9d9;
  border-radius:50%;

`


