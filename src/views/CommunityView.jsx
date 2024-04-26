import React from "react";
import styled from "styled-components";
import Title from "@/components/layout/Title";
import CommunitySection from "../components/community/CommunitySection";
import Search from "../components/layout/Search";

const CommunityViewBlock = styled.div``;

const CommunityView = () => {
  return (
    <CommunityViewBlock>
      <Title title="COMMUNITY" />
      <CommunitySection />
      <Search />
    </CommunityViewBlock>
  );
};

export default CommunityView;
