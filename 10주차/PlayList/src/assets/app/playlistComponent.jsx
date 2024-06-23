import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchPlaylists } from './playlistSlice';
import { increase, decrease } from './cartSlice';
import { openModal } from './modalSlice'; // 모달 액션 가져오기
import { ChevronDown, ChevronUp } from '../constants/icon';

const PlaylistContainer = styled.div`
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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingSpinner = styled.div`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const PlaylistComponent = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.cart.playlists);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const status = useSelector((state) => state.playlist.status);
  const error = useSelector((state) => state.playlist.error);
  const [showSpinner, setShowSpinner] = useState(true);

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrease(id));
  };

  const handleOpenModal = () => {
    dispatch(openModal('담아두신 모든 음반을 삭제하시겠습니까?'));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000); // 1초 후에 로딩 스피너 숨기기

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlaylists());
    }
  }, [status, dispatch]);

  if (showSpinner) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <PlaylistContainer>
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
    </PlaylistContainer>
  );
};

export default PlaylistComponent;
