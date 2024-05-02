import React from "react";
import Title from "../components/layout/Title";
import { useLocation } from "react-router-dom";
import CommunityModify from "../components/community/CommunityModify";

const CommunityModifyView = () => {
  const location = useLocation();
  const { val } = location.state;

  return (
    <div>
      <Title title="COMMUNITY" />
      <CommunityModify val={val} />
    </div>
  );
};

export default CommunityModifyView;
