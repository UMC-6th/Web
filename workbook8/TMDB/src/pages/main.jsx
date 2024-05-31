
import styled from "styled-components";
import Banner from "../components/banner";
import movieIcon from "../assets/movieicon.png";
import search from  "../assets/search.png";
import Fetch from "../components/fetch";
import { useState, useEffect } from "react";

function Main() {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');

  // Debounce timeout duration (in milliseconds)
  const debounceTimeout = 500;

  let timeoutId = null;

  const debouncedhandleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 -> 페이지 리로드 방지

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      const encodedQuery = encodeURIComponent(query);
      const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=ko-KR&page=1`;
      setUrl(searchUrl);
    }, debounceTimeout);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
  }, [timeoutId]);

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
            <form onSubmit={debouncedhandleSubmit}> 
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
  width: 100%; 
  height: 180px;
  background-color: black;
  display: flex;
  justify-content : center;
  align-items: center;
  top: 50px;
`;
const Search = styled.div`
  width: 100%;
  height: ${props => props.url ? 'calc(100% - 85px)' : '65vh'};
  display: flex;
  justify-content : center;
  padding-top: 20px;
  text-align: center;
  flex-direction: row;

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
  margin-bottom: 10vh;
  margin-top: 5vh;

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
