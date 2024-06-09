import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

export default configureStore({ //reduce store를 생성하는 함수
    reducer : { //reducer는 어플리케이션 상태관리
        todo : todoSlice //todo라는 이름으로 todoSlice생성
    }
})