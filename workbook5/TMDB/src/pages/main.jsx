
import styled from "styled-components";
import Banner from "../components/banner";
import movieIcon from "../assets/movieicon.png";
import search from  "../assets/search.png";
import Fetch from "../components/fetch";
import { useState } from "react";

function Main() {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 -> 페이지 리로드 방지
    const encodedQuery = encodeURIComponent(query);
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=ko-KR&page=1`;
    setUrl(searchUrl);
  };

  return (
    <div className="welcome">
      <Welcome>
        <Banner />
      </Welcome>
      <Search url={url}>
        <div>
          <div className="search_comment">
              <img src={movieIcon} alt="Movie Icon" style={{height: '40px'}} />
              <h2>Find your movies!</h2>
          </div><br />
          <div className="search_input">
            <form onSubmit={handleSubmit}> 
              <input type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
              <button type="submit" style={{background: 'none', border: 'none', cursor: 'pointer', padding: '0'}}>
                <img src={search} alt="Search" style={{height: '25px'}} />
              </button>
            </form>
          </div>
        </div>
      </Search>
      {url && (
        <FetchContainer>
          <Fetch url={url} />
        </FetchContainer>
      )}
    </div>
  );
}

const Welcome = styled.div`
  width: 100vw; 
  height: 25vh;
  background-color: black;
  display: flex;
  justify-content : center;
  align-items: center;
`;
const Search = styled.div`
  width: 100vw;
  height: ${props => props.url ? '22vh' : '65vh'};
  display: flex;
  justify-content : center;
  padding-top: 20px;
  text-align: center;
  flex-direction: row;
  margin:0;

  input {
    width: 230px;
    height: 25px;
    border-radius: 15px;
  }
  .search_comment {
    display: flex;
    align-items: center;
    justify-content : center;
    color: white; 
    margin: 0; 
  }
  form {
    display: flex;
    justify-content : center;
    align-items: center;
    gap: 10px;
  }
`;
const FetchContainer = styled.div`
  display: flex;
  justify-content : center;
  width: 80vw;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: black;
  margin: auto;
  margin-bottom: 5vh;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: black;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  
`;



export default Main;
