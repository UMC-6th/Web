import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../contents/cartItems';
import { TotalPrice } from '../components/cartView';


const initialState = cartItems; 
//initialState가 배열인 경우: 상태는 단순히 항목 배열입니다. 리듀서에서 배열을 직접 수정합니다.(내가 사용한건 배열)
//initialState가 객체인 경우: 상태는 여러 속성을 포함할 수 있습니다. 리듀서에서 객체의 속성을 수정합니다.
//객체인 경우에는 const initialState ={cartItems:cartItems}로 해줘야함

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { //리듀서 로직 작성
        increase: (state, action) => {
            const item = state.find(item => item.id === action.payload.id); //payload사용시 추가 데이터 함께 전달(Button함수에서 만들어진 {id}객체에 접근) payload.id는 증가,감소 버튼 누를때 변화가 일어나는 카트 항목의 id
            if (item) {
                item.amount += 1;
            }
        },
        decrease: (state, action) => {
            const item = state.find(item => item.id === action.payload.id);//item.id === action.payload.id는 현재 처리 중인 카트 항목의 ID가 액션으로부터 받은 ID와 동일한지를 확인하는 조건
            if (item && item.amount > 0) {
                item.amount -= 1;
            }
        },
        removeItems: (state,action) =>{
          return state.filter(item => item.id !== action.payload.id || item.amount > 0);
        },
        clearCart: (state) =>{ //목록 초기화기능,전체삭제
          return [];
        },
    },
});

export const { increase, decrease,removeItems,clearCart} = CartSlice.actions;

export const calculateTotals = state => {
  const totalPrice = state.reduce((acc, item) => acc + (item.price * item.amount), 0);
  const totalAmount = state.reduce((totalAmount, item) => totalAmount + item.amount, 0);
  return { totalPrice, totalAmount };
};

export default CartSlice.reducer;

/*

let cast = createSlice({
  name: 'user',
  initialState: cartItems,
  reducers: {
    increase(state) {
      state.amount += 1; // 오타 수정: state.amount로 수정
    }
  }
});

export let { increase } = cast.actions; // 오타 수정: cast.actions로 수정
export default cast.reducer;
*/