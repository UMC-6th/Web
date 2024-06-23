import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { calculateTotals, clearCart } from '../redux/cartSlice';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
  box-sizing:border-box;
`;

const ClearButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  
  box-sizing:border-box;
`;

const CartLine = styled.div`
  width:100%;
  height:2px;
  background-color:#5852FE;
`

const CartList = () => {
  const { cartItems, totalAmount, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <CartContainer>
        
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <CartLine/>
      <h2>Total Price: {totalPrice}원</h2>
      <ClearButton onClick={() => dispatch(clearCart())}>Clear Cart</ClearButton>
    </CartContainer>
  );
};

export default CartList;
