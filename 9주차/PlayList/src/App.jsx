// src/App.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { increase, decrease } from './assets/app/cartSlice';
import { openModal } from './assets/app/modalSlice'; // 모달 액션 가져오기
import { CartIcon, ChevronDown, ChevronUp } from './assets/constants/icon';
import Modal from './Modal'; // 모달 컴포넌트 가져오기

const Allbody = styled.div`
  .number {
    text-align: center;
  }
`;

const Headlist = styled.div`
  width: 100%;
  height: 70px;
  background-color: #5353db;
  align-items: center;
  justify-content: center;
  display: flex;
  div {
    color: white;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
    padding: 50px;
    width: 1100px;
  }
  span {
    color: white;
    font-weight: bold;
    align-items: center;
    padding: 50px;
    width: 50px;
  }
  .cart-count {
    position: absolute;
    color: white;
    text-align: center;
    padding: 0px;
    top: -50px;
    left: 40px;
    border-radius: 25px;
    width: 30px;
    height: 30px;
    background-color: #7467eb;
  }
`;

const Playlist = styled.div`
  display: grid;
  justify-content: center;
  .title {
    font-size: 50px;
    color: black;
    font-weight: bolder;
    text-align: center;
    margin: 100px;
  }
`;

const PlaylistItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  padding: 10px;
  border: none;
  font-size: 30px;
  img {
    width: 100px;
    height: 100px;
  }
  .details {
    flex-grow: 1;
    margin-left: 40px;
  }
`;

const Button = styled.div`
  display: grid;
  color: #5353db;
  width: 50px;
  border: none;
  background: none;
  :hover {
    color: #b6853d;
  }
`;

const Price = styled.div`
  width: 1400px;
  height: 10px;
  background-color: black;
  margin: 10px;
  display: flex;
  div {
    font-size: 40px;
    color: black;
    font-weight: bolder;
    width: 1100px;
    padding: 20px;
  }
  span {
    font-size: 40px;
    color: black;
    font-weight: bolder;
    padding: 20px;
  }
`;

const CartEmpty = styled.div`
  border: none;
  background: none;
  margin: 120px;
  display: flex;
  justify-content: center;
  button {
    border-color: red;
    color: red;
    background: none;
    width: 300px;
    height: 70px;
    border-radius: 10px;
    font-size: 20px;
  }
  button:hover {
    color: white;
    border-color: white;
    background-color: black;
  }
`;

const Footlist = styled.div`
  width: 100%;
  height: 75px;
  background-color: #5353db;
  div {
    color: white;
    font-weight: bold;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: grid;
    padding: 25px;
  }
`;

const Count = styled.div`
  color: black;
  z-index: 10;
  position: absolute;
  left: 80%;
`;

function App() {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.cart.playlists);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrease(id));
  };

  const handleOpenModal = () => {
    dispatch(openModal('담아두신 모든 음반을 삭제하시겠습니까?'));
  };

  return (
    <Allbody>
      <Headlist>
        <div>UMC PlayList</div>
        <span>
          <CartIcon />
          <Count>
            <div>{totalItems > 0 && <div className="cart-count">{totalItems}</div>}</div>
          </Count>
        </span>
      </Headlist>

      <Playlist>
        <div className="title">당신이 선택한 음반</div>
        <div>
          {playlists.map((item) => (
            <PlaylistItem key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="details">
                <div>
                  {item.title} | {item.singer}
                </div>
                <div>₩ {item.price}</div>
              </div>
              <div>
                <Button onClick={() => handleIncrease(item.id)}>
                  <ChevronUp />
                </Button>
                <div className="number">{item.quantity}</div>
                <Button onClick={() => handleDecrease(item.id)}>
                  <ChevronDown />
                </Button>
              </div>
            </PlaylistItem>
          ))}
        </div>
        <Price>
          <div>총 가격</div>
          <span>₩ {totalPrice}</span>
        </Price>
        <CartEmpty>
          <button onClick={handleOpenModal}>장바구니 비우기</button>
        </CartEmpty>
      </Playlist>

      <Footlist>
        <div>University MakeUs Challenge</div>
      </Footlist>

      <Modal />
    </Allbody>
  );
}

export default App;
