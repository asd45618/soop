import React from "react";
import SliderSection from "@/components/home/SliderSection";
import SliderSection2 from "@/components/home/SliderSection2";
import Video from "@/components/home/Video";
import Community from "@/components/home/Community";

const HomeView = () => {
  return (
    <div>
      <SliderSection />
      <SliderSection2 />
      <Video />
      <Community />
    </div>
  );
};

export default HomeView;
