import styled from "styled-components";
import CartFile from './CartFile';
import CartSlice from "../redux/CartSlice";
import { clearCart, calculateTotals } from "../redux/CartSlice";
import { CartIcon } from "../contents/icons";
import Modal from "./Modal";
import React from 'react';

// Assuming cartSlice is used somewhere else or for future use
// import { cartSlice } from '../redux/CartSlice'; 

import { useDispatch, useSelector } from 'react-redux';
import { modalOpen } from "../redux/ModalSlice";

// Styled components
const ResetButton = styled.button`
margin:auto 45% ;
    background-color:  #4123b0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;


export const Body = styled.div`
    color: antiquewhite;
`;

export const Title = styled.h3`
    color: black;
    text-align: center;
    
    margin-top: 100px;
`

export const TotalPrice = styled.h3`
    color:black;
    margin:auto 40% ;
`

export const HeaderContainer = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 60px;
    background-color: #8434cf;
`

export const HeaderTitle = styled.h3`

    color: white;
    font-size: larger;
    font-style:bold;
    margin-left: 20%;

    
`


export const FooterContainer = styled.div`
    width: 100vw;
    bottom: 0;
    left: 0;
    z-index: 1;
    margin-top: auto;
    height: 60px;
    background-color: #5e00b5;
`

const FooterTitle = styled.p`
    font-size: large;
    color :white;
    font-style: italic;
    font-weight:bold;
    margin-left: 40%;
`

const CartButton = styled.svg `
    width: 24px;  /* 원하는 크기로 변경 */
    height: 24px;
    background: none;
    border: none;
    margin-left: 60%;
        svg {
            width: 100%;
            height: 100%;
            stroke: #ffffff; /* 원하는 색상으로 변경 */
        }
`

const ModalColor = styled.p`
    color: black;
`



export const CartView = () => {
    const cartList = useSelector((state) => state.cart);
    const { totalPrice, totalAmount } = useSelector((state) => calculateTotals(state.cart));
    const modalState = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const Header = () =>{
        return(
            <HeaderContainer> 
            <HeaderTitle> UMC PlayList <CartButton><CartIcon/></CartButton>  {totalAmount} </HeaderTitle>
            </HeaderContainer>
        )
    }

    const Footer = () =>{
        return(
            <FooterContainer>
                <FooterTitle>
                University MakeUs Challenge
                </FooterTitle>
                </FooterContainer>
        )
    }

    const handleReset = () => {
        dispatch(modalOpen());
    };
   

  



    return (
     
        <Body>
       
        <Header/>
            <Title>당신이 선택한 음반</Title> 
            {cartList.map((item) => (
                <CartFile
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    singer={item.singer}
                    img={item.img}
                    amount={item.amount}
                    price={item.price}
                />
            ))}
            
        {/*      <button onClick={() => {
                dispatch(modalOpen());
                dispatch(clearCart());
            }}>초기화</button>
            */}

            <ResetButton onClick={handleReset}>초기화</ResetButton>
            <TotalPrice>total price: {totalPrice}</TotalPrice>
            <Footer/>

            <Modal>
            <ModalColor>
        정말 초기화 하시겠습니까?
        </ModalColor>
            </Modal>
            
        </Body>
     
    );
};

