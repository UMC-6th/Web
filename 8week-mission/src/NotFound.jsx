import React from "react";
import {NotFoundContainer, NotFoundWrap} from "./styled";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <NotFoundWrap>
        <h1>Oops!</h1>
        <h3>예상치 못한 에러가 발생했습니다.</h3>
        <div onClick={() => navigate('/')}>메인으로 이동</div>
      </NotFoundWrap>
    </NotFoundContainer>
  );
}

export default NotFound;