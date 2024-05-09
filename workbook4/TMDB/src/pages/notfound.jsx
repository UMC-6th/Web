// import Fetch from '../components/fetch';
import styled from "styled-components";

function NotFound() {
  return (
    <Container>
        <div className='notice'>Not found</div>
        <a href="/"> → main페이지로 이동 ← </a>
    </Container>
  );
}

export default NotFound;


const Container = styled.div `
    width: 100vw;
    height: 90vh;
    padding-top: 40vh;

    .notice {
        color: white;
        font-size: 20px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    a {
        color: white;
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;