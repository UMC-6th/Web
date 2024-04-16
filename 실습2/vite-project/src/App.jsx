import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return(
    
    <div className={"container"}>
      <h1>안녕하세요</h1>

      <h5>내용내용내용</h5>
   
      <button className='openBtn' onClick={isModalOpen ? closeModal : openModal}>버튼열기</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>

  )
}

export default App
