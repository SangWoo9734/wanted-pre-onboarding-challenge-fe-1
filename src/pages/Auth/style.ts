import styled from "styled-components";

export const ComponentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: auto;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;

  & h1 {
    margin-bottom: 10px;
  }
`;

export const InputSector = styled.div`
  & * {
    margin-bottom: 10px;
  }
  & p {
    font-size: 1.2rem;
  }

  & input {
    width: 100%;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-size: 1.1rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 25px;
  background-color: #1363df;
  box-shadow: 0 0 20px 0 #d7d7d7;
  color: white;

  :active {
    background-color: #1363dfe0;
  }
`;

export const GoBackButton = styled.button``;
