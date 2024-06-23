import React from 'react';
import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../constants/icons';
import { increase, decrease, removeItem } from '../redux/cartSlice';
import styled from 'styled-components';

const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding:30px 5%;
  margin-bottom: 20px;
  
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  box-sizing:border-box;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  box-sizing:border-box;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
`;

const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align:center;
  box-sizing:border-box;
`;

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <ItemDetails>
        <ItemImage src={img} alt={title} />
        <ItemInfo>
          <h4>{title} | {singer}</h4>
          
          <h5>{price} 원</h5>
        </ItemInfo>
      </ItemDetails>
      <ItemActions>
        <button onClick={() => dispatch(increase(id))}><ChevronUp /></button>
        <p>{amount}</p>
        <button onClick={() => dispatch(decrease(id))}><ChevronDown /></button>
      </ItemActions>
    </CartItemContainer>
  );
};

export default CartItem;
