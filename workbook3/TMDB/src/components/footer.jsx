
import styled from "styled-components";

function Footer() {
    return (
      <Wrap>
        <p style={{margin: '0'}}>footer</p>
      </Wrap>
    );
  }

  const Wrap = styled.div `
    height: 5vh;
    background-color: rgb(27, 29, 57);
    color: white;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
  `;

  export default Footer;