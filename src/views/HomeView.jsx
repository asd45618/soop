import React from "react";
import styled from "styled-components";
import SliderSection from "@/components/home/SliderSection";
import SliderSection2 from "@/components/home/SliderSection2";
import Video from "@/components/home/Video";
import Community from "@/components/home/Community";

const HomeViewBlock = styled.div``;

const HomeView = () => {
  return (
    <HomeViewBlock>
      <SliderSection />
      <SliderSection2 />
      <Video />
      <Community />
    </HomeViewBlock>
  );
};

export default HomeView;