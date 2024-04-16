import react from 'react';
import {useState} from 'react'

export default function Modal(){
    const [modal, modalOpen] = useState(true);

    const modalClose = () => {
      modalOpen(false);
    };
  


    return(
        <>
        <div className='modal-container'>
        {modal&&(
        <div className='modal-content'>
             

        <h3>안녕하세요</h3>
        <h5>모달 내용은 어쩌고 저쩌고</h5>
        <button className='closeBtn' onClick={modalClose}>닫기</button>
        </div>)
        }
        </div>
        </>
    )
}