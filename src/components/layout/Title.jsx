import React from 'react';
import styled from 'styled-components'

const TitleBlock = styled.div`
    text-align:center;
    margin:50px 0;
    position: relative;
        img{
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
        .text {
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%; 
            color: #fff;
            text-align: center;
            word-break: keep-all;
        .background{
            font-size: 35px;
            color: #fff;
            margin-bottom:7px;
        }
        .p {
            font-size: 10px;
        }
    }

    span {
      width: 92px;
      height: 3px;
      font-size: 0px;
      line-height: 0px;
      background: #1b1b1b;
      display: inline-block;
      margin-top: 80px;
      }
      h2 {
        font-size: 30px;
        color: #333;
        font-weight: 600;
        margin-top: 9px;
      }
`

const Title = ({title}) => {
    return (
        <TitleBlock>
            <div>
                <img src="./assets/image/background.jpg" alt="배경" />
                <div className="text">
                    <h2 className="background">MANAGEMENT SOOP</h2>
                    <p>MANAGEMENT COMPANY SPECIALIZING IN PERFORMERS</p>
                </div>
            </div>
            <span></span>
            <h2>{title}</h2>
        </TitleBlock>
    );
};

export default Title;