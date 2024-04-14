import Modal from '../components/Modal.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setModalOpen(true);
  }

  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="btn_open_modal" onClick={handleOpenModal}>버튼 열기</button>

      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </>
  )
}

export default App