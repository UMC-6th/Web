import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import styled from "styled-components";
import CartButton from './CartButton';
import CartSlice from '../redux/CartSlice';


const ContainerBody = styled.div`
    position: relative;
   
`
// Styled components
const CartContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;

  padding: 10px;
  margin: 10px 0;
`;


const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    flex-grow: 1; /* TextContainer가 가능한 너비를 차지하도록 */
`

const CartTitle = styled.h5`
     margin: 0; /* 상하 여백 제거 */
     color: black;

`;

const CartImg = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-left: 20%;
`;

const CartPrice =  styled.div`
    display: flex;
    color: gray;
    font-size: small;
    flex-basis: 100%;
    
`
const CartButtonContainer = styled.div`
    margin-right:20%; /* 자동 왼쪽 마진으로 버튼을 오른쪽으로 밀기 */
`;



function CartFile({id}) {

    const cart =  useSelector((state) => state.cart.find(item => item.id === id)); //item.id === id는 주어진 id와 일치하는 카트 항목을 찾는 조건
    //find는 배열에서 사용되는 메서드, cart는 객체(img,title,singer등을 속성으로 갖는다)


    return (
        <ContainerBody>
        <CartContainer>
            <CartImg src={cart.img} alt={cart.title} />
            <TextContainer>
                <CartTitle>Title: {cart.title} | Singer: {cart.singer}</CartTitle>
                <CartPrice>\{cart.price}</CartPrice>
            </TextContainer>
            <CartButtonContainer>
                <CartButton  id={cart.id} />
            </CartButtonContainer>
        </CartContainer>
        </ContainerBody>
    );
}
CartFile.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired // amount prop 유효성 검사 추가
};

export default CartFile;