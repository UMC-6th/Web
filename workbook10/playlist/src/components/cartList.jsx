import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, clearCart, calculateTotals, fetchMusicData } from '../redux/cartSlice';

const CartList = () => {
  const { cart, totalPrice, status } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchMusicData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart, dispatch]);

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrease(id));
  };

  const handleClearCart = () => {
    setShowModal(true);
  };

  const handleConfirmClearCart = () => {
    dispatch(clearCart());
    setShowModal(false);
  };

  const handleCancelClearCart = () => {
    setShowModal(false);
  };

  if (status === 'loading') {
    return (
      <LoadingContainer>
        <LoadingMessage>로딩 중입니다...</LoadingMessage>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (status === 'failed') {
    return (
      <ErrorContainer>
        <h1 style={{textAlign:'center', paddingTop:'20px'}}>당신이 선택한 음반</h1>
        <EmptyCartMessage><p>고객님이 좋아하는 음반을 담아보세요~!</p></EmptyCartMessage>
      </ErrorContainer>
    )
  }

  return (
    <Container>
      <h1>당신이 선택한 음반</h1>
      {cart.length > 0 ? (
        <>
          <Items>
            {cart.map((item) => (
              <table key={item.id}>
                <tbody>
                  <tr>
                    <td className='record-cover'>
                      <img style={{ width: '100px' }} src={item.img} alt={item.title} />
                    </td>
                    <td className='record-info'>
                      <p>{item.title} | {item.singer}</p>
                      <p style={{ color: 'rgb(89, 112, 164)' }}>\ {item.price}</p>
                    </td>
                    <td className='record-amount'>
                      <button onClick={() => handleIncrease(item.id)}>△</button>
                      <p>{item.amount}</p>
                      <button onClick={() => handleDecrease(item.id)}>▽</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
            <hr />
            <div className='price'>
              <p style={{ textAlign: 'left' }}>총 가격</p>
              <p style={{ textAlign: 'right' }}>\ {totalPrice}</p>
            </div>
          </Items>
          <ClearButton onClick={handleClearCart}>장바구니 초기화</ClearButton>
        </>
      ) : (
        <EmptyCartMessage><p>고객님이 좋아하는 음반을 담아보세요~!</p></EmptyCartMessage>
      )}
      {showModal && (
        <ModalOverlay>
          <Modal>
            <p><strong>담아두신 모든 음반을 삭제하시겠습니까?</strong></p>
            <ButtonGroup>
              <ConfirmButton onClick={handleConfirmClearCart}>네</ConfirmButton>
              <CancelButton onClick={handleCancelClearCart}>아니요</CancelButton>
            </ButtonGroup>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};


const Container = styled.div`
  text-align: center;
  background-color: rgb(239,243,246);
  position: relative;
  width: 100vw;
  padding-top: 20px; padding-bottom: 20px;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  height: 100vh;
  background-color: rgb(239, 243, 246);
`;
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;
const LoadingMessage = styled.h3`
  margin-top: 50px;
  color: #333;
`;
const Items = styled.div`
  background-color: rgb(239,243,246);
  margin: 20px 8vw;
  width: 80vw;
  overflow-x: hidden;
  table {
    width: 100%;
  }
  .record-cover {
    width: 100px;
  }
  .record-info {
    text-align: left;
    padding-left: 23px;
  }
  .record-amount {
    width: 30px;
    button {
      border:none;
      background-color:transparent;
    }
  }
  p {
    line-height: 5px;
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
`;
const ClearButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: rgb(239,243,246);
  color: red;
  border-width: 1px;
  border-color:red;
  border-radius: 5px;
  cursor: pointer;
`;
const EmptyCartMessage = styled.p`
  text-align: center;
  margin-top: 50px;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  background-color: white;
  padding: 15px 30px;
  border-radius: 5px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -20px;
`;
const ConfirmButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 5px 20px;
  background-color: white;
  color: blue;
  border-width: 1px;
  border-color: blue;
  border-radius: 5px;
  cursor: pointer;
`;
const CancelButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 5px 20px;
  background-color: white;
  color: red;
  border-width: 1px;
  border-color: red;
  border-radius: 5px;
  cursor: pointer;
`;
const ErrorContainer = styled.div `
`;

export default CartList;