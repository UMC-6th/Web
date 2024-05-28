// src/components/Login.jsx
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/auth";
import styled from "styled-components";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [id, setId] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const isFormValid = () => {
    return id.value !== "" && password.value !== "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const loginData = {
        username: id.value,
        password: password.value,
      };

      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        if (response.ok) {
          const data = await response.json();
          login(data.token, id.value); // 로그인 성공 시 AuthContext의 login 함수 호출
          window.alert("로그인이 성공했습니다!");
          navigate('/');
        } else {
          window.alert("로그인 실패");
        }
      } catch (error) {
        console.error("로그인 요청 중 에러 발생:", error);
      }
    }
  };

  const handleIdChange = (e) => {
    const value = e.target.value;
    let error = "";
    if (typeof value !== 'string' || value === "") {
      error = "아이디를 입력해주세요!";
    }
    setId({ value, error });
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value.toLowerCase();
    const lowerCase = /[a-z]/.test(value);
    const num = /[0-9]/.test(value);
    const specialChar = /[^a-z0-9]/.test(value);
    let error = "";

    if (value === "") {
      error = "비밀번호를 입력해주세요";
    } else if (value.length < 4) {
      error = "비밀번호는 최소 4자리 이상이어야 합니다!";
    } else if (value.length > 12) {
      error = "비밀번호는 최대 12자리까지 가능합니다!";
    } else if (!lowerCase || !num || !specialChar) {
      error = "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다!";
    }
    setPassword({ value: e.target.value, error });
  };

  return (
    <Container>
      <form className="signupForm">
        <table>
          <caption style={{ color: "white" }}>로그인 페이지</caption>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  value={id.value}
                  onChange={handleIdChange}
                />
                {id.error && <span style={{ color: "red" }}>{id.error}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={password.value}
                  onChange={handlePasswordChange}
                />
                {password.error && <span style={{ color: "red" }}>{password.error}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <button disabled={!isFormValid()} onClick={handleSubmit}>제출하기</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-top: 20px;
  padding: 10vh 33vw;
  min-height: 90vh;
  overflow: hidden;

  table {
    width: 100%;
    align: center;
  }
  input {
    width: 100%;
    height: 35px;
    border-radius: 15px;
  }
  button {
    width: 100%;
    height: 35px;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  td {
    height: 40px;
  }

  .submit {
    margin-top: 16px;
  }

  .id {
    margin-top: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
  }
`;

export default Login;
