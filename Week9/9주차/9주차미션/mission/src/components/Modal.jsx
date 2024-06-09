import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { modalClose } from '../redux/ModalSlice';
import { clearCart } from '../redux/CartSlice';
import { CartIcon } from "../contents/icons";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  z-index: 9999;
`;

const ModalButton = styled.button`
  background-color: #4123b0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px;
`;

const EmptyScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;


const Modal = ({ children }) => {
  const isOpen = useSelector((state) => state.modal.isOpened);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalClose());
  };

  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(modalClose());
  };


  return (
    <>
      {isOpen && (
        <>
        
          <ModalOverlay onClick={handleClose} />
          <ModalContainer>
            {children}
            <div>
              <ModalButton onClick={handleConfirm}>YES</ModalButton>
              <ModalButton onClick={handleClose}>NO</ModalButton>
            </div>
          </ModalContainer>
          <EmptyScreen /> {/* 화면을 공백으로 만듭니다. */}
         
        </>
      )}
    </>
  );
};

export default Modal;






