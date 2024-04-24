import React from "react";
import Video from "../components/home/Video";
import styled from "styled-components";
// import AartistMenu from "../components/home/AartistMenu";
import SliderSection from "../components/home/SliderSection";
import SliderSection2 from "../components/home/SliderSection2";

const HomeViewBlock = styled.div``;

const HomeView = () => {
  return (
    <HomeViewBlock>
      {/* <AartistMenu /> */}
      <SliderSection />
      <SliderSection2 />
      <Video />
    </HomeViewBlock>
  );
};

export default HomeView;
