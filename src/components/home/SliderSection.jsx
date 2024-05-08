import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { changeCurrentArtist } from "../../store/artist";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const SliderSectionblock = styled.div`
  position: relative;
  padding: 10px 30px 100px;

  .slick-slide {
    height: 40vw;
    background: 100% top / cover no-repeat;
    text-align: right;
    .slide {
      img {
        width: 89%;
        float: right;
        cursor: pointer;
        @media (max-width: 768px) {
          width: 100%;
        }
      }
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
        cursor: pointer;
      }

      li.active {
        color: #000;
        font-weight: 600;
      }
    }
  }
`;

const SliderSection = () => {
  const mobile = useMediaQuery({ maxWidth:768 })
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const artistSlider = [
    { img: "./assets/image/gy2.jpg", name: "GONG YOO" },
    { img: "./assets/image/kju2.jpg", name: "KIM JAE-UCK" },
    { img: "./assets/image/njh2.jpg", name: "NAM JOO-HYUK" },
    { img: "./assets/image/shj2.jpg", name: "SEO HYUN-JIN" },
    { img: "./assets/image/sz2.jpg", name: "SUZY" },
  ];

  const goToArtist = (name) => {
    dispatch(changeCurrentArtist(name));
    navigate("/artist");
  };

  return (
    <SliderSectionblock>
      { mobile &&
      <Slider {...options}>
        {artistSlider.map((val, idx) => (
          <div className="slide" key={idx}>
            <img
              src={val.img}
              alt={val.name}
              onClick={() => goToArtist(val.name)}
            />
          </div>
        ))}
      </Slider> }
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
