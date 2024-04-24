import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const VideoSliderBlock = styled.div``;

const VideoSlider = ({ videoData, setCurrentVid }) => {
  const options = {
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowDropleftCircle />,
    nextArrow: <IoIosArrowDroprightCircle />,
  };

  return (
    <VideoSliderBlock>
      <Slider {...options}>
        {videoData.map((val, idx) => (
          <div key={idx} className="thumb">
            <img
              src={val.imgUrl}
              alt="slideImg"
              onClick={() => setCurrentVid(val.vidSrc)}
            />
          </div>
        ))}
      </Slider>
    </VideoSliderBlock>
  );
};

export default VideoSlider;
