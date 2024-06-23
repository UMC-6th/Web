
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleModal } from '../redux/modalSlice';
import { clearCart } from '../redux/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.showModal);

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(toggleModal());
  };

  const handleCancel = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      {showModal && (
        <Backdrop>
          <ModalContainer>
            <Message>담아두신 모든 음반을 삭제하시겠습니까?</Message>
            <ButtonContainer>
              <Button onClick={handleClearCart}>예</Button>
              <Button onClick={handleCancel}>아니오</Button>
            </ButtonContainer>
          </ModalContainer>
        </Backdrop>
      )}
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;
const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Modal;
