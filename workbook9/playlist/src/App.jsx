import { createGlobalStyle } from 'styled-components';
import CartList from './components/cartList';
import Navbar from './components/navbar';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: rgb(239,243,246);
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <CartList />
    </>
  );
};

export default App;
