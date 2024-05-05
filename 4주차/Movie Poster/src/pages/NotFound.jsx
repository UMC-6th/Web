import React from 'react';
import './NotFound.css';
import { Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='NotFound-item'>
            <div className='Oops'>Oops!</div>
            <div>예상치 못한 에러가 발생했습니다.</div>
            <div className= 'error'>Not Found</div>
            <Link className = 'ReturnToMain' to='/'>메인으로 이동하기</Link>
        </div>
    )
}
