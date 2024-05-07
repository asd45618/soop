import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const SliderSection2Block = styled.div`
    margin:100px auto;
    position:relative; 
    .slick-arrow {
      position:absolute;
      top:48%;
      transform:translateY(-50%);
      color:#ddd;
      width: 50px;
      height: 50px;
      z-index:9999999;
      &.slick-prev { left:-50px; }
      &.slick-next { right:-50px }
    }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin:50px auto; }
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
    img { width:100%; height:260px; padding:0 20px; }
    p { text-align:center; padding:10px; color:green;}
  
`;

const SliderSection2 = () => {

  const options = {
    dots:false,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow:5,
    slidesToScroll:1,
    prevArrow : <IoIosArrowDropleftCircle />,
    nextArrow : <IoIosArrowDroprightCircle />,
    responsive : [
          {
              breakpoint:769,
              settings:{
                  slidesToShow:3,
                  slidesToScroll:3
              }
          }
      ]
  }

  const sliders = [
    { image:"./assets/image/gy3.jpg", alt:"NETFLIX - 공유 서현진", name:"NETFLIX - 공유 서현진" },
    { image:"./assets/image/sz3.jpg", alt:"MOVIE - 수지", name:"MOVIE - 수지" },
    { image:"./assets/image/kju3.jpg", alt:"MOVIE - 김재욱", name:"MOVIE - 김재욱" },
    { image:"./assets/image/njh3.jpg", alt:"DISNEY - 남주혁", name:"DISNEY - 남주혁" },
    { image:"./assets/image/sz33.jpg", alt:"NETFLIX - 수지", name:"NETFLIX - 수지" },
    { image:"./assets/image/kju3.jpg", alt:"MOVIE - 김재욱", name:"MOVIE - 김재욱" },
  ]


    return (
      <SliderSection2Block className='row'>
        <div className='title'>
          <span></span>
          <h3>WORKS</h3>
        </div>
          <Slider {...options} className='worts'>
                {
                    sliders.map((item, index)=>(
                        <div key={index}>
                            <img 
                            src={item.image}
                            alt={item.alt} />
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </Slider>
      </SliderSection2Block>
    );
  };
  
  export default SliderSection2;