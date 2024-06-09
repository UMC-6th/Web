import { useDispatch } from 'react-redux'
import { increase } from '../redux/CartSlice';
import { decrease } from '../redux/CartSlice';
import PropTypes from 'prop-types';
import { ChevronUp } from '../contents/icons';
import { ChevronDown } from '../contents/icons';
import styled from 'styled-components';
import{removeItems,clearCart} from'../redux/CartSlice';
import { useSelector } from 'react-redux';

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 
`;

const ButtonBackGround = styled.button`
    background-color: white;
`

const Button = styled.svg `
    width: 20px;  /* 원하는 크기로 변경 */
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    display: flex;

        svg {
            width: 100%;
            height: 100%;
            stroke: #4123b0; /* 원하는 색상으로 변경 */
        }
`

const CartAmount = styled.p`
    color: black;
`


export default function CartButton({id}){
    const cart =  useSelector((state) => state.cart.find(item => item.id === id)); 
  
    const dispatch = useDispatch();

    return(
        <ButtonContainer>
        <ButtonBackGround onClick={()=>{
            dispatch(increase({id}))
        }}> <Button><ChevronUp/></Button> </ButtonBackGround>
        <CartAmount> {cart.amount}</CartAmount>
        <ButtonBackGround onClick={()=>{
            dispatch(decrease({id}))
            dispatch(removeItems({id}))
        }}> <Button><ChevronDown/> </Button></ButtonBackGround>
        </ButtonContainer>
    )
}

CartButton.propTypes = {
    id: PropTypes.number.isRequired,
};