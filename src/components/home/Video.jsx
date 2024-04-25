import React, { useState } from "react";
import styled from "styled-components";

import VideoSlider from "./VideoSlider";

const VideoBlock = styled.div`
  .title__box {
    text-align: center;
    margin-top: 100px;
    span {
      display: inline-block;
      width: 56px;
      height: 4px;
      font-size: 0px;
      line-height: 0px;
      background: #313131;
    }
    h3 {
      font-size: 30px;
      color: #333;
      font-weight: 600;
      margin-top: 9px;
    }
  }

  .video__wrapper {
    margin-top: 60px;
    .video__main {
      display: flex;
      justify-content: center;
      .video__left {
      }
      .video__right {
        padding-left: 20px;
      }
    }
    .video__slide {
      margin: 50px auto;
    }
  }
`;

const Video = () => {
  const [currentVid, setCurrentVid] = useState(
    "https://www.youtube.com/embed/O3GM4cGLV-4?si=lsj_nbJ1s4_ph_6U"
  );

  return (
    <VideoBlock>
      <div className="title__box">
        <span></span>
        <h3>VOD</h3>
      </div>
      <div className="video__wrapper">
        <div className="video__main">
          <div className="video__left">
            <iframe
              width="525"
              height="352"
              src={currentVid}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video__right">
            <iframe
              width="525"
              height="352"
              src="https://www.youtube.com/embed/QMjxMBG-Irs?si=ZcSlOJFiNiQHyjLP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video__slide">
          <VideoSlider
            // videoData={videoData}
            setCurrentVid={setCurrentVid}
          ></VideoSlider>
        </div>
      </div>
    </VideoBlock>
  );
};

export default Video;
