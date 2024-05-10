import React from "react";
import Title from "@/components/layout/Title";
import CommunitySection from "../components/community/CommunitySection";
import Search from "../components/layout/Search";

const CommunityView = () => {
  return (
    <div>
      <Title title="COMMUNITY" />
      <CommunitySection />
      <Search />
    </div>
  );
};

export default CommunityView;
