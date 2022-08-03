import React from "react";
import styled from "styled-components";

interface Props {
  content: string;
  onClick?: () => void;
}

const ButtonWrapper = styled.button`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border-radius: 25px;
  background-color: #3d96ff;
  box-shadow: 0 4px 4px 0 #0000004f;
  color: white;
  font-size: 1rem;
`;

function Button({ content, onClick }: Props) {
  return <ButtonWrapper onClick={onClick}>{content}</ButtonWrapper>;
}

export default Button;
