import styled from "styled-components";

export const ComponentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 220px;
  padding: 0 20px;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  border-radius: 25px;
  background-color: #1363df;
  box-shadow: 0 0 20px 0 #d7d7d7;
  color: white;
  font-size: 1rem;

  :active {
    background-color: #1363dfe0;
  }
`;
