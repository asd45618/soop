import React from "react";
import CommunityDetail from "../components/community/CommunityDetail";
import { useLocation } from "react-router-dom";
import Title from "../components/layout/Title";

const CommunityDetailView = () => {
  const location = useLocation();
  const { val } = location.state;
  return (
    <div>
      <Title title="COMMUNITY" />
      <CommunityDetail val={val} />
    </div>
  );
};

export default CommunityDetailView;
