import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState({ value: "", error: "" });
  const [id, setId] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [age, setAge] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

  const isFormValid = () => {
    return (
      name.value !== "" &&
      id.value !== "" &&
      email.value !== "" &&
      age.value !== "" &&
      password.value !== "" &&
      password.value === confirmPassword.value
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // 페이지 새로고침(폼 기본동작) 방지
    if (isFormValid()) { // 유효성 검사를 통과 여부 확인
      const userInfo = {
        name: name.value,
        username: id.value,
        email: email.value,
        age: age.value,
        password: password.value,
        passwordCheck: confirmPassword.value
      };

      try {
        const response = await fetch('http://localhost:8080/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        });

        const data = await response.json();
        
        if (response.ok) {
          localStorage.setItem('signup_token', data.token);
          navigate('/login');
          window.alert("회원가입이 성공했습니다!");
        } else {
          window.alert(data.message || "회원가입에 실패했습니다.");
        }
      } catch (error) {
        window.alert("네트워크 오류가 발생했습니다.");
        console.error("회원가입 실패:", error);
      }
    }
  };

  // 이름
  const handleNameChange = (e) => {
    const value = e.target.value;
    let error = "";
    if (typeof value !== 'string' || value === "") {
      error = "이름을 입력해주세요!";
    }
    setName({ value, error });
  };
  // 아이디
  const handleIdChange = (e) => {
    const value = e.target.value;
    let error = "";
    if (typeof value !== 'string' || value === "") {
      error = "아이디를 입력해주세요!";
    }
    setId({ value, error });
  }
  // 이메일
  const handleEmailChange = (e) => {
    const value = e.target.value;
    let error = "";
    // .com 까지 확인
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+[^\s@]+$/;
    if (value === "") {
      error = "이메일을 입력해주세요!";
    } else if (typeof value !== 'string' || !emailRegex.test(value)) {
      error = "이메일 형식에 맞게 다시 입력해주세요!";
    }
    setEmail({ value, error });
  };
  // 나이
  const handleAgeChange = (e) => {
    const value = e.target.value;
    let error = "";
    if (value === "") {
      error = "나이를 입력해주세요!";
    } else if (isNaN(value)) {
      error = "나이는 숫자로 입력해주세요!";
    } else if (value < 0) {
      error = "나이는 음수가 될 수 없습니다!";
    } else if (!Number.isInteger(Number(value))) {
      error = "나이는 소수가 될 수 없습니다!";
    } else if (value <= 19) {
      error = "우리 영화 사이트는 19살 이상만 가입이 가능합니다!";
    }
    setAge({ value, error });
  };
  // 비밀번호
  const handlePasswordChange = (e) => {
    const value = e.target.value.toLowerCase();
    const lowerCase = /[a-z]/.test(value);
    const num = /[0-9]/.test(value);
    const specialChar = /[^a-z0-9]/.test(value); // 대소문자와 숫자를 제외한 모든 문자
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
    setPassword({ value: e.target.value, error }); // 원본 입력값 그대로 사용
  };
  // 비밀번호 확인
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    let error = "";
    if (value === "") {
      error = "비밀번호 확인을 입력해주세요";
    } else if (password.value !== value) {
      error = "비밀번호가 일치하지 않습니다";
    }
    setConfirmPassword({ value, error });
  };
  

  return (
    <Container>
      <form className="signupForm" onSubmit={handleSubmit}>
        <table>
          <caption style={{ color: "white" }}>회원가입 페이지</caption>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요"
                  value={name.value}
                  onChange={handleNameChange}
                />
                {name.error && <span style={{ color: "red" }}>{name.error}</span>}
              </td>
            </tr>
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
                  type="text"
                  placeholder="이메일을 입력해주세요"
                  value={email.value}
                  onChange={handleEmailChange}
                />
                {email.error && <span style={{ color: "red" }}>{email.error}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="나이를 입력해주세요"
                  value={age.value}
                  onChange={handleAgeChange}
                />
                {age.error && <span style={{ color: "red" }}>{age.error}</span>}
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
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword.value}
                  onChange={handleConfirmPasswordChange}
                />
                {confirmPassword.error && <span style={{ color: "red" }}>{confirmPassword.error}</span>}
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

      <div className="id">
        <div>이미 아이디가 있으신가요?</div>
        <a style={{ color: "white", fontStyle: "bold" }} href="/login">
          {" "}
          로그인 페이지로 이동하기
        </a>
      </div>
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

export default SignUp;
