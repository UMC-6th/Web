import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "./AuthAPI";
export const ErrorText = styled.small`
    color: red;
    @media (max-width: 600px) {
        text-align: center;
        margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
    }
`;

export const SubmitButton = styled.input`
    background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export const SubmitTitle = styled.h3`
    text-align: center;
    color: white;
    @media (max-width: 600px) {
        text-align: center;
        margin: 0 auto; 
    }
`;

export const SubmitContainer = styled.div`
    width: 400px;
    margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
    border-radius: 30px;
    text-align: center;
    input {
  display: block;
  border-radius: 20px;
  width: 400px;
  height: 35px;
  margin: 5% auto; /* 수정된 부분 */
  @media (max-width: 600px) {
    display: block;
    border-radius: 20px;
    width: 200px;
    height: 20px;
    margin: 5% auto; /* 수정된 부분 */
    text-align: center;
  }
}


`;

export const SubmitOption = styled.div`
    display: flex;
    color: white;
    margin: 0 auto;

    p {
        color: white;
        font-size: small;
        margin-right: 12%;
        margin-left: 12%;

        @media (max-width: 600px) {
            display: flex;
            font-size: xx-small;
            text-align: center;
            margin: 0 auto;
        }
    }

    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: yellow;
        }
    }

    @media (max-width: 600px) {
        display: flex;
        font-size: xx-small;
        margin-right: 3%;
        margin-left: 3%;
        text-align: center;
    }
`;

export default function Signup() {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({ mode: "onChange" });

    const handleFormSubmit = async (data) => {
        try {
            console.log(data); // 전송하는 데이터 확인용
            const response = await signUp(data);
            localStorage.clear();
            localStorage.setItem('tokenType', response.tokenType);
            localStorage.setItem('accessToken', response.accessToken);
            alert("회원가입이 완료되었습니다.");
            navigate('/Login');
        } catch (error) {
            console.error("Error during sign up:", error.response ? error.response.data : error.message);
            if (error.response && error.response.status === 409) {
                alert("이미 존재하는 사용자명 또는 이메일입니다.");
            } else {
                alert("입력 값이 유효하지 않습니다.");
            }
        }
    };

    const validateAge = (value) => {
        if (!value) return "나이는 필수 입력입니다.";
        if (!/^[+-]?\d*(\.?\d*)?$/.test(value)) return "나이는 숫자만 입력 가능합니다.";
        if (parseFloat(value) < 0) return "나이는 음수가 될 수 없습니다.";
        if (parseFloat(value) % 1 !== 0) return "나이는 소수가 될 수 없습니다.";
        if (parseFloat(value) < 19) return "나이는 19세 이상이어야 합니다.";
        return true;
    };

    return (
        <div>
            <SubmitTitle>회원가입 페이지</SubmitTitle>
            <SubmitContainer>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <input
                        type="text"
                        id="name"
                        placeholder="이름을 입력해주세요"
                        {...register("name", {
                            required: "이름은 필수 입력입니다.",
                            pattern: {
                                value: /^[a-zA-Z가-힣]+$/u,
                                message: "이름은 문자열만 입력 가능합니다."
                            }
                        })}
                    />
                    {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

                    <input
                        type="text"
                        id="username"
                        placeholder="아이디를 입력해주세요"
                        {...register("username", {
                            required: "아이디는 필수 입력입니다.",
                            pattern: {
                                value: /[a-zA-Z0-9]/,
                                message: "아이디는 문자열만 입력 가능합니다."
                            }
                        })}
                    />
                    {errors.username && <ErrorText>{errors.username.message}</ErrorText>}

                    <input
                        type="text"
                        id="email"
                        placeholder="이메일을 입력해주세요"
                        {...register("email", {
                            required: "이메일은 필수 입력입니다.",
                            pattern: {
                                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                                message: "이메일 형식에 맞지 않습니다."
                            }
                        })}
                    />
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

                    <input
                        type="text"
                        id="age"
                        placeholder="나이를 입력해주세요"
                        {...register("age", {
                            required: true,
                            validate: validateAge
                        })}
                    />
                    {errors.age && <ErrorText>{errors.age.message}</ErrorText>}

                    <input
                        type="password"
                        id="password"
                        placeholder="비밀번호를 입력해주세요"
                        {...register("password", {
                            required: "비밀번호는 필수 입력입니다.",
                            minLength: {
                                value: 4,
                                message: "비밀번호는 4자리 이상이어야 합니다."
                            },
                            maxLength: {
                                value: 12,
                                message: "비밀번호는 12자리 이하여야 합니다."
                            },
                            pattern: {
                                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/,
                                message: "비밀번호는 영어, 숫자, 특수문자를 하나씩 포함해야 합니다."
                            }
                        })}
                    />
                    {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

                    <input
                        type="password"
                        id="passwordCheck"
                        placeholder="비밀번호 확인"
                        {...register("passwordCheck", {
                            required: "비밀번호 확인은 필수입니다.",
                            validate: {
                                matchPassword: (value) => {
                                    const { password } = getValues();
                                    return password === value || "비밀번호가 일치하지 않습니다";
                                }
                            }
                        })}
                    />
                    {errors.passwordCheck && <ErrorText>{errors.passwordCheck.message}</ErrorText>}

                    <SubmitButton type="submit" value="제출하기" isActive={isActive} />
                </form>
                <SubmitOption>
                    <p><Link to="/Login">아이디가 있으신가요?</Link></p>
                    <p>회원가입하기</p>
                </SubmitOption>
            </SubmitContainer>
        </div>
    );
}