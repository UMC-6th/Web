// src/App.js

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CartIcon } from './assets/constants/icon';
import Modal from './Modal'; // 모달 컴포넌트 가져오기
import PlaylistComponent from './assets/app/playlistComponent'


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
  
  const totalItems = useSelector((state) => state.cart.totalItems);
 
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

      <PlaylistComponent></PlaylistComponent>
      
      <Footlist>
        <div>University MakeUs Challenge</div>
      </Footlist>

      <Modal />
    </Allbody>
  );
}

export default App;
