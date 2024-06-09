import {createSlice} from '@reduxjs/toolkit'

let nextId =0;
const initialState = [];

export const todoSlice = createSlice({ //createSlice각 함수의 액션 생성자를 생성
    name : 'todofunction',
    initialState,
    reducers:{
        add : (state,action) => { //액션 처리 기능(추가)
            nextId++;
            state.push({
                id : nextId,
                text : action.payload,
                complete : false,
            })
    },   
    remove : (state, action) =>{ //삭제기능
        return state.filter(e => e.id !== action.payload)
    },

    complete : (state, action) =>{
        return state.map(e => e.id === action.payload ? {...e, complete : !e.complete} : e)
    }


}
})

export const {add , remove, complete} = todoSlice.actions  //생성자를 외부로 보냄
//store에서 add, remove, complte 액션을 내보낸다.
export default todoSlice.reducer