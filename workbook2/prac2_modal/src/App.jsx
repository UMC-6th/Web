
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import MakeModal from './components/Modal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function open() {
    setModalIsOpen(true);
    console.log('모달이 켜짐');
  }

  function close() {
    setModalIsOpen(false);
    console.log('모달이 꺼짐');
  }

  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id='open' onClick={open}>버튼 열기</button>
      <MakeModal isOpen={modalIsOpen} closeModal={close} />
    </div>
  );
}


export default App;
