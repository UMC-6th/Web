import './App.css';
import { Container, GlobalStyle } from './styled'
import HeaderComponents from './components/HeaderComponents';
import CartList from './components/CartList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderComponents />
        <CartList></CartList>
      </Container>
    </>
  );
}

export default App;
