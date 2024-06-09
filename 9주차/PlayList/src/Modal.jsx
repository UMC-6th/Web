// src/components/Modal.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { closeModal } from './assets/app/modalSlice';
import { clearCart } from './assets/app/cartSlice';

const ModalBackground = styled.div`
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
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

const ModalButton = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  background-color: #5353db;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3333bb;
  }
`;

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state) => state.modal);

  if (!isOpen) return null;

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <h2>{content}</h2>
        <ModalButton onClick={handleClearCart}>예</ModalButton>
        <ModalButton onClick={() => dispatch(closeModal())}>아니요</ModalButton>
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
