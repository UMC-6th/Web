import React, { useState } from 'react';
import './Modal.css';

export function Modal() {
    const [isOpen, setIsOpen] = useState(false); 

    const openModal = () => {
        setIsOpen(true); 
    };

    const closeModal = () => {
        setIsOpen(false); 
    };

    return (
        <div>
            <div>
                <h2>안녕하세요</h2>
                <h4>모달 내용은 어쩌고 저쩌고..</h4>
                <button className="open" onClick={openModal}>버튼 열기</button>
            </div>

            {isOpen && (
                <div className="modal-container">
                    <div className="modal-wrap">
                        <div className="modal-content">
                            <h4>모달 내용 어쩌고저쩌고</h4>
                            <button className="close" onClick={closeModal}>버튼 닫기</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
