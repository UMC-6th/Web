import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <div>
    <h1>안녕하세요!</h1>
    <p>내용내용내용</p>
    <button id="open" onClick={handleOpenModal}>버튼 열기</button>
    {modalVisible && (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-title">안녕하세요</div>
          <p>모달 내용은 어쩌고 저쩌고..</p>
          <div className="close-wrapper">
            <button id="close" onClick={handleCloseModal}>닫기</button>
          </div>
        </div>
      </div>
    )}
  </div>
    
  )
}

export default App
