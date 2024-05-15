import styled from 'styled-components';


export const AppContainer = styled.div`
  box-sizing: border-box;
  width:100%;
  
 
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
  height:800px;
  flex-direction:column;
  justify-content:center;
  position:relative;
  padding:50px 30px;
  `;

export const SearchWrap = styled.div`
  display: flex;
  flex-direction:column;
  position:absolute;
  top:20px;
  left:50%;
  transform:translateX(-50%);

  gap: 20px;
  `

export const SearchInputWrap = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  
  `
export const SearchButton = styled.button`
width: 30px;
  height: 30px;
  background-color: aliceblue;
  border: white;
  border-radius:100%;
`
export const SearchInput = styled.input`
    width: 300px;
  height: 40px;
  border-radius: 20px;
  border: none;
`

export const SearchResultWrap = styled.div`
   display:flex;
   flex-wrap: wrap;
   margin-top:200px;
   
   width:800px;
   overflow-y:scroll;
   white-space:nowrap;
   
   
`



//MovieComponent


export const MovieImg = styled.img`
 width: 100%;
    height: 70%;
`
export const MovieTitleWrap = styled.div`
  height: 30%;
    display: flex;
    justify-content: space-around;
    padding: 5% 5%;
  `

export const MovieModal = styled.div`
  background-color: rgba(0,0,0,0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1000;
  `

export const MovieContainer = styled.div`
width: 300px;
height: 400px;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;

&:hover {
  ${MovieModal} {
    opacity: 1;
  }
}
`
export const MovieDesc = styled.p`
  font-size:0.7rem;
  `

export const SmallMovieContainer = styled.div`
width: 180px;
height: 240px;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;

&:hover {
  ${MovieModal} {
    opacity: 1;
  }
}
  `

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