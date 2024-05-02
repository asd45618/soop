import React from "react";
import LoginSection from "../components/member/LoginSection";
import Title from "../components/layout/Title";
import styled from "styled-components";

const LoginViewBlock = styled.div`
  margin-bottom: 100px;
`;

const LoginView = () => {
  return (
    <LoginViewBlock>
      <Title title="Login" />
      <LoginSection />
    </LoginViewBlock>
  );
};

export default LoginView;
