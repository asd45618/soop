import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSliderBlock = styled.div`
  margin: 50px auto;
  .slider {
    display: flex;
    justify-content: center;
    .slick-list {
      position: relative;
      width: 1482px;
    }
    .thumb {
      width: 186px;
      height: 130px;
      img {
        height: 100%;
        padding: 0 10px;
        cursor: pointer;
      }
      p {
        margin-top: 6px;
        font-size: 13px;
        text-align: left;
        padding: 0 10px;
      }
    }
    .slick-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: #b5b5b5;
      &.slick-prev {
        z-index: 9999;
        left: 180px;
      }
      &.slick-next {
        z-index: 9999;
        right: 180px;
      }
    }
  }
`;

const VideoSlider = ({ setCurrentVid }) => {
  const options = {
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowDropleftCircle />,
    nextArrow: <IoIosArrowDroprightCircle />,
  };

  const videoData = [
    {
      imgUrl: "/assets/image/slideImg1.jpg",
      vidSrc: "https://www.youtube.com/embed/O3GM4cGLV-4?si=lsj_nbJ1s4_ph_6U",
      text: "[] [숲포일러] 신이 되는 ...",
    },
    {
      imgUrl: "/assets/image/slideImg2.jpg",
      vidSrc: "https://www.youtube.com/embed/QMjxMBG-Irs?si=ZcSlOJFiNiQHyjLP",
      text: "[수지] [숲포일러] 유튜버 수 ...",
    },
    {
      imgUrl: "/assets/image/slideImg3.jpg",
      vidSrc: "https://www.youtube.com/embed/Gs0VjN71wy0?si=B2rpG_5NWTvJofQe",
      text: "[김재욱] [숲포일러] 김재욱에게",
    },
    {
      imgUrl: "/assets/image/slideImg4.jpg",
      vidSrc: "https://www.youtube.com/embed/0sa1KwudS7I?si=-oLXElNQJaiEFhsz",
      text: "[남주혁] [숲포일러] 신이 지용 ...",
    },
    {
      imgUrl: "/assets/image/slideImg5.jpg",
      vidSrc: "https://www.youtube.com/embed/rbr7K_y_xdo?si=mIx6xBwvXBxzKYpI",
      text: "[정유미] [숲포일러] 우당탕탕 ...",
    },
    {
      imgUrl: "/assets/image/slideImg6.jpg",
      vidSrc: "https://www.youtube.com/embed/ibUCwzu4R7w?si=qa44CYdOx11ceiqI",
      text: "[전혜진] [숲포일러] Jinni ...",
    },
    {
      imgUrl: "/assets/image/slideImg7.jpg",
      vidSrc: "https://www.youtube.com/embed/i7M_gs16UuY?si=qZjYBvZmXw9u9gbl",
      text: "[수지] [숲포일러] 가요숲텐 ...",
    },
    {
      imgUrl: "/assets/image/slideImg8.jpg",
      vidSrc: "https://www.youtube.com/embed/JKCycSOz1Sg?si=DbxNEQPcfWbBea4Z",
      text: "[김민주] [숲메이킹] 민주의 ...",
    },
    {
      imgUrl: "/assets/image/slideImg9.jpg",
      vidSrc: "https://www.youtube.com/embed/2pmmhJAHy7k?si=p4hPuTqeo52s8EYc",
      text: "[남지현] [숲메이킹] 남지현 팬 ...",
    },
    {
      imgUrl: "/assets/image/slideImg10.jpg",
      vidSrc: "https://www.youtube.com/embed/iDnNNX1veZI?si=EoJguJzlKYOu_rby",
      text: "[정가람] [숲포일러] 정가람_혼 ...",
    },
    {
      imgUrl: "/assets/image/slideImg11.jpg",
      vidSrc: "https://www.youtube.com/embed/vel2BrCHlSg?si=tjCGFyDc7OIvI89e",
      text: "[서현진] [숲포일러] 가요숲텐 ...",
    },
    {
      imgUrl: "/assets/image/slideImg12.jpg",
      vidSrc: "https://www.youtube.com/embed/kgSmUlvwGjQ?si=wIqsbF4GjXcwqOd_",
      text: "[공유] [숲포일러] 가요숲텐 ...",
    },
    {
      imgUrl: "/assets/image/slideImg13.jpg",
      vidSrc: "https://www.youtube.com/embed/BuIsdOCG9lE?si=HiC23I1jBp5mlMlM",
      text: "[이천희] [숲포일러] 말하는 대 ...",
    },
    {
      imgUrl: "/assets/image/slideImg14.jpg",
      vidSrc: "https://www.youtube.com/embed/iocRW_52Wz0?si=RNascfN-vRomzLJw",
      text: "[] [숲포일러] 프로필 리 ...",
    },
    {
      imgUrl: "/assets/image/slideImg15.jpg",
      vidSrc: "https://www.youtube.com/embed/l3PATbJ9e8Y?si=XljmsCqK7IXB7FGf",
      text: "[공유] [공효진] [숲메이킹] ...",
    },
  ];

  return (
    <VideoSliderBlock>
      <Slider {...options} className="slider">
        {videoData.map((val, idx) => (
          <div key={idx} className="thumb">
            <img
              src={val.imgUrl}
              alt={val.text}
              onClick={() => setCurrentVid(val.vidSrc)}
            />
            <p>{val.text}</p>
          </div>
        ))}
      </Slider>
    </VideoSliderBlock>
  );
};

export default VideoSlider;
