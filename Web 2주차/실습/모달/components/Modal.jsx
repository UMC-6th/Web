import React from 'react';
import '../styles/Modal.css'

function Modal({onClose}) { // onClose 상태를 상위에서 받아서 동작
    return (
        <>
            <div class="modal">
                <div class="modalContent">
                    <div class="modalText">
                        <h2>안녕하세요</h2>
                        <p><b>모달 내용은 어쩌고 저쩌고..</b></p>
                    </div>
                    <div class="modalButton">
                        <button id="btn_close_modal" onClick={onClose}>닫기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;