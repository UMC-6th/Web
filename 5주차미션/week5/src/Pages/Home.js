import React,{useState} from "react";
import styled from "styled-components";
import Movies from "./Movies";
import axios from 'axios';


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

    const [search,setSearch] = useState("")
  
    const [state,setState] = useState({
      search:"",
      results:[]
    })

    const handleInput = (event) =>{
      let search = event.target.value;
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&page=1&query=${state.search}`)
      .then(res => {
        setState(prevState=>{
          return {...prevState, search : search,  results :  res.data.results};
        })
      })
      .catch(err=>console.log(err))
    }
  
    return(
      <Container>

      <Aside><AsideText>환영합니다</AsideText></Aside>
      <Footer>
      <Svg1 className='svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"/></Svg1>
      <FooterContainer>
      <FooterText>Find your movie!</FooterText>
      <FooterInput type='text' onChange={handleInput}/>
      </FooterContainer>
      </Footer>
      <div className="rr">
      {/* state.results가 정의되었을 때만 Movies 컴포넌트를 렌더링 */}
          {state.results && state.results.length > 0 && (
          <ScrollContainer>{/* 사이즈를 조절할 수 있는 요소로 감싸기 */}
          <Movies movies={state.results} /> {/* result 대신 movies props 사용 */}
          </ScrollContainer> 
  )}
      </div>
      <Svg2 className='svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></Svg2>

      </Container>
  
    )
}