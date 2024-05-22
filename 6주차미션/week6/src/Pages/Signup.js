'use-client';
import styled from "styled-components";
import {useForm} from "react-hook-form"
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


const ErrorText = styled.small`
    color: red`;

const SubmitButton  = styled.input`
  background-color: ${(props) => props.isActive ? "yellow" : ""};
`;


 const SubmitTitle = styled.h3`
    text-align: center;
    color: white;
  `
  
  const SubmitContainer = styled.div`
    
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
  

  
  const SubmitOption = styled.div`
  
    display: flex;
    color: white;
    margin: 0 auto; 

    & p {
        font-size:small;
        margin-right: 12%;
        margin-left: 12%
    }
`

  

export default function Signup(){

        const navigate = useNavigate()
        const [isActive, setIsActive] = useState(false); //setIsActive&&{}사용해보기

        const {register, //input요소를 React hook form과 연결해 검증규칙을 적용할 수 있게 하는 메소드
            handleSubmit, //form을 submit할때 실행할 함수, 자동으로 e.preventDefault된다.
            formState:{errors}, //formState에 관한 정보,에러를 담고 있는 객체
            setError, 
            getValues,  
        } = useForm({mode:"onChange"}); //input값이 바뀔때마다 검증 로직이 바뀜

     
        const inputVal = (val) =>{
            console.log(val);
            navigate("/Login");
        }

        const validateAge = (value) => {
            if (!value) return "나이는 필수 입력입니다.";
            if (!/^[+-]?\d*(\.?\d*)?$/.test(value)) return "나이는 숫자만 입력 가능합니다.";
            if (parseFloat(value) < 0 ) return "나이는 음수가 될 수 없습니다.";
            if(parseFloat(value) % 1 !== 0) return "나이는 소수가 될 수 없습니다.";
            if (parseFloat(value) < 19) return "나이는 19세 이상이어야합니다.";
            return true;
        };      

    return( 

    <div>
    <SubmitTitle>회원가입페이지</SubmitTitle>
    
    <SubmitContainer>

    <form className="ReviewForm" onSubmit={handleSubmit(inputVal)} >
    <input 
        type="text" 
        id="username" 
        placeholder="이름을 입력해주세요"
        {...register("name",{
                required:"이름은 필수입력입니다.",
                pattern:{
                    value:/^[a-zA-Z가-힣]+$/u,
                    message:"이름은 문자열만 입력가능합니다."
                }
            })
        }/> 
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

    <input type="text" id="useremail" placeholder="이메일을 입력해주세요"
    {...register("email",{
            required: "이메일은 필수입력입니다.",
            pattern:{
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "이메일 형식에 맞지 않습니다."
            }
        })
    }/> 
    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

    <input type="text" id="userage" placeholder="나이를 입력해주세요"
                        {...register("age", {
                            required: true,
                            validate: validateAge
                        })}
                    />
                     {errors.age&& errors.age.type==="required"&&<ErrorText>나이는 필수 입력입니다.</ErrorText>}
                    {errors.age && <ErrorText>{errors.age.message}</ErrorText>}



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
   
    <input type="password" id="su-repassword" placeholder="비밀번호 확인"
    {...register("passwordConfirm",{
        required:true,
        validate:{
        matchPassword: (value) => {
            const { password } = getValues();
            return password === value || '비밀번호가 일치하지 않습니다'
       
        }}
    })}/>
    {errors.passwordConfirm&& errors.passwordConfirm.type==="required"&&<ErrorText>비밀번호확인은 필수입니다.</ErrorText>}
    {errors.passwordConfirm && (
                        <ErrorText>{errors.passwordConfirm.message}</ErrorText>)}
   
    <SubmitButton type="submit" id="su-submit" value="제출하기" isActive={isActive} />
    </form>
    <SubmitOption >
    <p>아이디가 있으신가요?</p>
    <p>회원가입하기</p>
    </SubmitOption>
    </SubmitContainer>
    </div>
    

)
}

/* (value)=>
                value.password !== value.passwordConfirm?"비밀번호가 일치하지 않습니다":true */