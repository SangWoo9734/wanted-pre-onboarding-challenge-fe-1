import styled from "styled-components";

export const ComponentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: auto;
`;

export const ComponentInnerWrapper = styled.div`
  border: 2px solid #3d96ff;
  border-radius: 10px;
  padding: 20px;

  & h2 {
    margin-bottom: 15px;
    text-transform: capitalize;
  }
`;

export const NavSector = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    color: lightgray;
    text-decoration: underline;
  }
`;

export const InputSector = styled.div`
  margin-bottom: 10px;

  & p {
    font-size: 1.1rem;
  }

  & input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-size: 1rem;
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

export const AuthModeToggle = styled.button`
  width: 100%;
  margin-top: 10px;
  text-decoration: underline;
  text-align: center;
  color: lightgray;
`;

export const AuthNotice = styled.p`
  margin-top: 15px;
  padding: 5px 0;
  background: #00000018;
  border: 2px solid gray;
  border-radius: 10px;
  text-align: center;
`;
