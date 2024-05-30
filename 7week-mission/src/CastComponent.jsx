import React from "react";
import { CastContainer, CastTitle, CastWrap, CastBox, CastImg } from "./styled";

function CastComponent({ imgUrl, name }) {
  
  return (
    <CastWrap>
      <CastImg src={imgUrl} alt={name} />
      <CastBox>{name}</CastBox>
    </CastWrap>
  );
}

export default CastComponent;
