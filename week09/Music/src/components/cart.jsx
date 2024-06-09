// Cart.jsx

import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, clearCart, calculateTotals } from '../redux/cartSlice';
import { CartIcon } from '../constants/icons.jsx';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 50px;
  height: 80%;
  width: 70vw;
  background-color: white;
  border-radius: 30px;
  padding: 100px;


`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;

`;

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, items]); // 장바구니 아이템이 변경될 때마다 총 가격과 수량을 다시 계산

  return (
    <CartContainer>
      <MusicBanner>
        
        <Playlist>UMC PlayList</Playlist>
        <Carttitle>Your Cart<CartIcon></CartIcon> {totalQuantity}</Carttitle>
        
      </MusicBanner>
      {items.map((item) => (
        <CartItem key={item.id}>
          
          <MusisContents>
            <MusicImg src={item.img} alt={item.title} />
            <Music>
              <MusicTitle>{item.title}</MusicTitle>
              <MusicSinger>{item.singer}</MusicSinger>
              <MusicPrice>{item.price} 원</MusicPrice>
            </Music>
            <Btn>
            <Btn_updown onClick={() => dispatch(decrease(item.id))}>
            ➖
            </Btn_updown>
            <p>{item.amount}</p>
            <Btn_updown onClick={() => dispatch(increase(item.id))}>
            ➕
            </Btn_updown>
            </Btn>
          </MusisContents>
        </CartItem>
      ))}
      <div>
      <Clearbtn onClick={() => dispatch(clearCart())}>Clear Cart</Clearbtn>
        <h3>Total Price: {totalPrice} 원</h3>
      </div>
    </CartContainer>
  );
};

const MusicBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: mediumseagreen;
  padding: 10px;
  border-radius: 10px;
`;

const Playlist = styled.h1`
  margin: 0;

`;

const Carttitle = styled.h4`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;


const MusicImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
`;

const MusisContents = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin-bottom: 10px ;
`;

const Music = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 5px;
  margin-top: 0px;


`;

const MusicTitle = styled.h3`
  margin: 0;
`;

const MusicSinger = styled.p`
  margin: 0;
`;

const MusicPrice = styled.p`
  margin: 0;
`;

const Btn = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  border: none;


`;

const Btn_updown = styled.button`
  width: 30px;
  height: 30px;
  background-color: yellowgreen;
  color: white;
  border: none;
  border-radius: 50px;
`;

const Clearbtn = styled.button`
  width: 100%;
  height: 40px;
  background-color: lightcoral;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`;



export default Cart;
