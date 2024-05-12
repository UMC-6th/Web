import styled from 'styled-components';


export const AppContainer = styled.div`
  box-sizing: border-box;
  width:100%;
  height:100vh;
  margin:0;
  padding: 0;
  background-color: rgb(54, 53, 88);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing:border-box;
  
  
`;

export const Navbar = styled.div`
  width:100%;
  height:100px;
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  
  background-color: rgb(45, 53, 88);
`;

export const HiContainer = styled.div`
  height:300px;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:rgb(0, 0, 0);
  `;
export const SearchContainer = styled.div`
  display:flex;
  height:400px;
  flex-direction:column;
  justify-content:center;
  padding:50px 30px;
  `;









//MovieDetailComponent

export const DetailContainer = styled.div`
  box-sizing:border-box;
  width:100%;
  height:100vh;
  overflow:hidden;
  position:relative;
  padding:10% 10%;
  display:flex;
`

export const DetailWrap = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:left;
  padding:0 30px;
  gap:20px;
  z-index:100;
`


//notfound
export const NotFoundContainer = styled.div`
  width:100%;
  height:100vh;
  position:relative;
  background-color: rgb(54, 53, 88);
  display:flex;
  justify-content:center;
  align-items:center;
`

export const NotFoundWrap = styled.div`
  width:300px;
  display:flex;
  flex-direction:column;
  gap:10px;
  `