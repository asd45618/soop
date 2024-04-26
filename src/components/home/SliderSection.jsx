import React, { useState } from "react";
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
  padding: 10px 30px 100px;

  .slick-slide {
    height: 40vw;
    background: 100% top / cover no-repeat;
    text-align: right;

    img {
      width: 89%;
      float: right;
    }
  }

  .artistMenu {
    position: relative;
    top: -750px;
    right: -30px;
    float: left;

    ul {
      z-index: 99999;

      li {
        margin-bottom: 10px;
        font-size: 20px;
        color: #bbb;
      }

      li.active {
        color: #000;
        font-weight: 600;
      }
    }
  }
`;

const SliderSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const options = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    beforeChange: (current, next) => {
      setActiveSlideIndex(next);
    },
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
      <div className="artistMenu">
        <ul>
          <li className={activeSlideIndex === 0 ? "active" : ""}>GONG YOO</li>
          <li className={activeSlideIndex === 1 ? "active" : ""}>
            KIM JAE-UCK
          </li>
          <li className={activeSlideIndex === 2 ? "active" : ""}>
            NAM JOO-HYUK
          </li>
          <li className={activeSlideIndex === 3 ? "active" : ""}>
            SEO HYUN-JIN
          </li>
          <li className={activeSlideIndex === 4 ? "active" : ""}>SUZY</li>
        </ul>
      </div>
    </SliderSectionblock>
  );
};

export default SliderSection;
