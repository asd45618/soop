import React, { useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import VideoSlider from "./VideoSlider";

const VideoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  .video__wrapper {
    margin-top: 60px;
    .video__main {
      display: flex;
      .video__left {
      }
      .video__right {
        padding-left: 20px;
      }
    }
    .video__slide {
      margin: 50px auto;
      position: relative;
      .slide {
        height: 40vw;
        z-index: 10;
        background: 50% top / cover no-repeat;
        height: 800px;
        display: none;
      }
      img {
        width: 100%;
        padding: 0 20px;
      }
      .slick-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 50px;
        color: #f00;
        &.slick-prev {
          left: -50px;
          z-index: 9999;
        }
        &.slick-next {
          right: -50px;
        }
      }
    }
  }
`;

const Video = () => {
  const [currentVid, setCurrentVid] = useState(
    "https://www.youtube.com/embed/O3GM4cGLV-4?si=lsj_nbJ1s4_ph_6U"
  );

  const videoData = [
    {
      imgUrl: "/assets/images/slideImg1.jpg",
      vidSrc: "https://www.youtube.com/embed/O3GM4cGLV-4?si=lsj_nbJ1s4_ph_6U",
      text: "[] [숲포일러] 신이 되는 ...",
    },
    {
      imgUrl: "/assets/images/slideImg2.jpg",
      vidSrc: "https://www.youtube.com/embed/QMjxMBG-Irs?si=ZcSlOJFiNiQHyjLP",
      text: "[수지] [숲포일러] 유튜버 수 ...",
    },
    {
      imgUrl: "/assets/images/slideImg3.jpg",
      vidSrc: "https://www.youtube.com/embed/Gs0VjN71wy0?si=B2rpG_5NWTvJofQe",
      text: "[김재욱] [숲포일러] 김재욱에게",
    },
    {
      imgUrl: "/assets/images/slideImg4.jpg",
      vidSrc: "https://www.youtube.com/embed/0sa1KwudS7I?si=-oLXElNQJaiEFhsz",
      text: "[남주혁] [숲포일러] 신이 지용 ...",
    },
    {
      imgUrl: "/assets/images/slideImg5.jpg",
      vidSrc: "https://www.youtube.com/embed/rbr7K_y_xdo?si=mIx6xBwvXBxzKYpI",
      text: "[정유미] [숲포일러] 우당탕탕 ...",
    },
    {
      imgUrl: "/assets/images/slideImg6.jpg",
      vidSrc: "https://www.youtube.com/embed/ibUCwzu4R7w?si=qa44CYdOx11ceiqI",
      text: "[전혜진] [숲포일러] Jinni ...",
    },
    {
      imgUrl: "/assets/images/slideImg7.jpg",
      vidSrc: "https://www.youtube.com/embed/i7M_gs16UuY?si=qZjYBvZmXw9u9gbl",
      text: "[수지] [숲포일러] 가요숲텐 ...",
    },
    {
      imgUrl: "/assets/images/slideImg8.jpg",
      vidSrc: "https://www.youtube.com/embed/JKCycSOz1Sg?si=DbxNEQPcfWbBea4Z",
      text: "[김민주] [숲메이킹] 민주의 ...",
    },
    {
      imgUrl: "/assets/images/slideImg9.jpg",
      vidSrc: "https://www.youtube.com/embed/2pmmhJAHy7k?si=p4hPuTqeo52s8EYc",
      text: "[남지현] [숲메이킹] 남지현 팬 ...",
    },
    {
      imgUrl: "/assets/images/slideImg10.jpg",
      vidSrc: "https://www.youtube.com/embed/iDnNNX1veZI?si=EoJguJzlKYOu_rby",
      text: "[정가람] [숲포일러] 정가람_혼 ...",
    },
    {
      imgUrl: "/assets/images/slideImg11.jpg",
      vidSrc: "https://www.youtube.com/embed/vel2BrCHlSg?si=tjCGFyDc7OIvI89e",
      text: "[서현진] [숲포일러] 가요숲텐 ...",
    },
    {
      imgUrl: "/assets/images/slideImg12.jpg",
      vidSrc: "https://www.youtube.com/embed/kgSmUlvwGjQ?si=wIqsbF4GjXcwqOd_",
      text: "[공유] [숲포일러] 가요숲텐 ...",
    },
    {
      imgUrl: "/assets/images/slideImg13.jpg",
      vidSrc: "https://www.youtube.com/embed/BuIsdOCG9lE?si=HiC23I1jBp5mlMlM",
      text: "[이천희] [숲포일러] 말하는 대 ...",
    },
    {
      imgUrl: "/assets/images/slideImg14.jpg",
      vidSrc: "https://www.youtube.com/embed/iocRW_52Wz0?si=RNascfN-vRomzLJw",
      text: "[] [숲포일러] 프로필 리 ...",
    },
    {
      imgUrl: "/assets/images/slideImg15.jpg",
      vidSrc: "https://www.youtube.com/embed/l3PATbJ9e8Y?si=XljmsCqK7IXB7FGf",
      text: "[공유] [공효진] [숲메이킹] ...",
    },
  ];

  return (
    <VideoBlock>
      <span></span>
      <h3>VOD</h3>
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
          {/* <VideoSlider
            videoData={videoData}
            setCurrentVid={setCurrentVid}
          ></VideoSlider> */}
        </div>
      </div>
    </VideoBlock>
  );
};

export default Video;
