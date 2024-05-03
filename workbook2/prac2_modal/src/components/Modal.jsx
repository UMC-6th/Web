
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
function MakeModal({ isOpen, closeModal }) {
  return (
    <Modal
     isOpen={isOpen}
     onRequestClose={closeModal}
     style={{
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        }}}
     contentLabel="Custom Modal">
     
     <div className="modal" >
        <div id='content'>
            <h1>안녕하세요</h1>
            <p>모달 내용은 어쩌고저쩌고..</p>
            <div id='close-wrapper'><button id='close' onClick={closeModal}>닫기</button></div>
        </div>
     </div>
    </Modal>
  );
}

export default MakeModal;


