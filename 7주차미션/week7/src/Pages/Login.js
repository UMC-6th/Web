import React,{useState} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { login } from "./AuthAPI";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useEffect } from "react";

const LoginTitle = styled.h3`
    color:white;
`

const LoginContainer = styled.div`
    
  width: 400px;
  margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
  border-radius: 30px;
  text-align: center;

  input {
      display: block;
      border-radius: 20px;
      width: 400px;
      height: 35px;
      margin-top: 5%;
  }
`
const ErrorText = styled.small`
    color: red;
`

export default function Login({ onLogin }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
  
    const handleFormSubmit = async (data) => {
      try {
        console.log(data); // 전송하는 데이터 확인용
        const response = await login(data);
        localStorage.setItem("tokenType", response.tokenType);
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("username", data.username);
        alert("로그인이 완료되었습니다.");
        onLogin(); // 부모 컴포넌트의 로그인 상태 업데이트 함수 호출
        navigate("/");
      } catch (error) {
        console.error("Error during sign up:", error.response ? error.response.data : error.message);
        if (error.response && error.response.status === 409) {
          alert("이미 존재하는 사용자명 또는 이메일입니다.");
        } else {
          alert("아이디 비밀번호가 일치하지 않습니다.");
        }
      }
    };
  
    /*

    const storageState = localStorage.getItem("accessToken");
    console.log(storageState);
  
    const initialState = {
      isLogin: false,
      user: {},
    };
  
    // 로컬스토리지의 데이터 타입은 스트링
    const initial = !storageState ? initialState : JSON.parse(storageState);
  
    const [state, dispatch] = useReducer(Login, initial);

    const globalState = {
      state, 
      dispatch: (action) => {
        dispatch(action);
        // 로컬 스토리지에 관련된 코드 작성
          // setItem을 할 때는 key, value 형태로 입력해야 합니다
        localStorage.setItem('accessToken', JSON.stringify(Login(state, action)));
      }
    }
  
*/
  
    return(
  
    <div>
    <LoginContainer>
        <LoginTitle>로그인페이지</LoginTitle>
        <form className="loginPage"  onSubmit={handleSubmit(handleFormSubmit)}>
        <input
         type="text"
         placeholder="아이디"
                {...register("username",{
                required:"아이디는 필수입력입니다.",
                pattern:{
                    value:/^[a-zA-Z가-힣]+$/u,
                    message:"아이디는 문자열만 입력가능합니다."
                }
            })
        }/>
        {errors.username && <ErrorText>{errors.username.message}</ErrorText>}
 
        <input type="password" id="su-password" placeholder="비밀번호를 입력해주세요"
            {...register("password",{
                required:true, 
                minLength:4, maxLength:12, pattern:/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/
            })
            }/>
            {errors.password&& errors.password.type==="required"&&<ErrorText>비밀번호는 필수 입력입니다.</ErrorText>}
            {errors.password&& errors.password.type==="minLength"&&<ErrorText>비밀번호는 4자리 이상이어야합니다.</ErrorText>}
            {errors.password&& errors.password.type==="maxLength"&&<ErrorText>비밀번호는 12자리 이하여야합니다.</ErrorText>}
            {errors.password&& errors.password.type==="pattern"&&<ErrorText>비밀번호는  영어, 숫자, 특수문자를 하나씩은 포함하여야 합니다.</ErrorText>}
          
        <input type="submit" value="로그인"></input>
        </form>
    </LoginContainer>
    </div>
    );
}