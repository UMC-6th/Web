import React,{useEffect, useState} from "react";
import styled from "styled-components";
import Movies from "./Movies";
import axios from 'axios';
import { Debounce } from "./Debounce";
import { getUserInfo } from './AuthAPI';

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
  margin-top: 75%;
  left: 30%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 200px;
  height: 30px;

`;

const FooterSvg = styled.svg`
  height: 20px; 
`;

const Svg1 = styled(FooterSvg)`
position: absolute;
left:40%;
top:80%
`;

 
const Svg2 = styled(FooterSvg)`
  position: absolute;
  right: 38%;
  top: 90%;
    
`;

const ScrollContainer = styled.div`
  display: flex;
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  border:2px solid red;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color:#0e0682;
    border-radius: 20px;
  }
`;

const LoadingDiv = styled.div`
  position: relative;
  font-size: medium;
  color:white;
  text-align: center;
  margin: 0 auto;
`

const Username = styled.p`
color: white;
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
  margin-top: 8%;
  `

export default function Home(){



    const API_KEY = '40af110aa06b1051f6264617ea84fe22';
   
    /* GPT코드
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    
  useEffect(() => {
    if (search.trim() !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&page=1&query=${search}`
        )
        .then((res) => {
          setResults(res.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      setResults([]);
    }
  }, [search]);

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

    */

    
  
    const [state,setState] = useState({
      search:"",
      results:[]
    })

    
    const [isLoading,setIsLoading] = useState(false);
    const [showLoading,setShowLoading] = useState(false);
    const [username, setUsername] = useState("");

    const debouncedSearchTerm = Debounce(state.search, 300);

  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      setIsLoading(true)
      setShowLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&page=1&query=${debouncedSearchTerm}`
        )
        .then((res) => {
          setState(prevState => ({ ...prevState, results: res.data.results }));
          
          
        })
        .catch((err) => console.log(err))

        .finally(() => {
        setIsLoading(false);
        setShowLoading(false); // 요청 완료 후 로딩 메시지 숨기기
      });
    } else {
      setState(prevState => ({ ...prevState, results: [] }));
      setIsLoading(false)
      setShowLoading(false);
    }
  }, [debouncedSearchTerm]);

  
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowLoading(false), 1000); 
      return () => clearTimeout(timer);
    }
  }, [isLoading]);


  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


    const handleInput = (event) => {
      setState(prevState => ({ ...prevState, search: event.target.value }));
    };


  /*
    const handleInput = (event) =>{
      let search = event.target.value;
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&page=1&query=${state.search}`)
      .then(res => {
        setState(prevState=>{
          return {...prevState, search : search,  results : res.data.results};
        })
      })
      .catch(err=>console.log(err))
    }
*/
  
    return(
      <Container>

      <Aside><AsideText>{username}환영합니다</AsideText></Aside>
     
      <Footer>
      
      <FooterContainer>
      <FooterText>Find your movie!</FooterText>
      <FooterInput type='text' onChange={handleInput}/>
      </FooterContainer>
      </Footer>
      {showLoading && (
    <LoadingDiv>데이터를 받아오는 중입니다</LoadingDiv>
  )}
  <div className="rr">
    {state.results && state.results.length > 0 && (
      <ScrollContainer>
        <Movies movies={state.results} />
      </ScrollContainer> 
    )}
  </div>
      <Svg2 className='svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></Svg2>

      </Container>
  
    )
}