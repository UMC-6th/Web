
import styled from "styled-components";
import Banner from "../components/banner";
function Main() {
  return (
    <div className="welcome">
      <Welcome>
        <Banner />
      </Welcome>
      <Search>
        <div>
          <h2 style={{color: 'white', margin: '0'}}>Find your movies!</h2><br />
          <div>
            <input type="text" />
            <input type="submit" />
          </div>
        </div>
      </Search>
      
    </div>
  );
}

const Welcome = styled.div`
  width: 100vw; 
  height: 251px;
  background-color: black;
  display: flex;
  justify-content : center;
  align-items: center;
`;
const Search = styled.div`
  width: 100vw;
  min-height: 390.5px;
  display: flex;
  justify-content : center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  margin:0;
`;

export default Main;
