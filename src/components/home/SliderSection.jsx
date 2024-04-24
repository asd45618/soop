import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gy2 from "@/assets/image/gy2.jpg";
import kju2 from "@/assets/image/kju2.jpg";
import njh2 from "@/assets/image/njh2.jpg";
import shj2 from "@/assets/image/shj2.jpg";
import sz2 from "@/assets/image/sz2.jpg";

const SliderSectionblock = styled.div`
  position: relative;
  .slick-slide {
    height: 40vw;
    background: 100% top / cover no-repeat;
    text-align: right;
    img {
      width: 85%;
      float: right;
    }
  }
`;

const SliderSection = () => {
  const options = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
  };

  return (
    <SliderSectionblock>
      <Slider {...options}>
        <div className="slide">
          <img src={gy2} alt="slide1" />
        </div>
        <div className="slide">
          <img src={kju2} alt="slide2" />
        </div>
        <div className="slide">
          <img src={njh2} alt="slide3" />
        </div>
        <div className="slide">
          <img src={shj2} alt="slide4" />
        </div>
        <div className="slide">
          <img src={sz2} alt="slide5" />
        </div>
      </Slider>
    </SliderSectionblock>
  );
};

export default SliderSection;
