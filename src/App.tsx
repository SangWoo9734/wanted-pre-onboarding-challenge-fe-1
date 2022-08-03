import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";
import TodoForm from "./components/TodoForm";
import TodoDetail from "./pages/TodoDetail";

const ContentWrapper = styled.div`
  position: relative;
  height: 100vh;
`;

function App() {
  return (
    <ContentWrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo/new" element={<TodoForm />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </ContentWrapper>
  );
}

export default App;
