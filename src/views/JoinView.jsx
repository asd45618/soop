import React from "react";
import JoinSection from "../components/member/JoinSection";
import Title from "../components/layout/Title";
import styled from "styled-components";

const JoinViewBlock = styled.div`
  margin-bottom: 100px;
`;

const JoinView = () => {
  return (
    <JoinViewBlock>
      <Title title="JOIN" />
      <JoinSection />
    </JoinViewBlock>
  );
};

export default JoinView;
