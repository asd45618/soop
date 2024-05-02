import React from 'react';
import styled from 'styled-components';


const IntroductionBlock =styled.div`
    text-align:center;
    margin:50px 0;
    position: relative;
    dispaly:flex;
    justify-content: center;
    .box {
        width:100%;
        padding: 50px 0;
        display: flex;
        margin-bottom: 70px;
        position: relative;
        display: flex;
        justify-content: center;
        .divider {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%; 
            width: 1px; 
            background-color: #ccc; 
            content: "";
            padding: 0;
        }
        .left{
            flex:1;
            ul {
                text-align:left;
                padding-left:100px;
                font-size: 15px;
                    li{
                        color:#888;
                        padding:5px;
                        strong { color:#444; font-weight: 400; }
                    }
                }
            }
        .right{
            flex:1;
            text-align:left;
            word-break: keep-all;
            padding-left:100px;
            font-size: 15px;
            line-height: 30px;
            color: #666;
            letter-spacing: -0.03em;
        }
    }
`

const Introduction = () => {
    return (
        <IntroductionBlock >
            <div className="box row">
                <div className="left">
                <ul>
                        <li>
                            <span>회사명</span> 
                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;매니지먼트 숲</strong>
                        </li>
                        <li>
                            <span>설립일</span>
                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2011년 4월 19일</strong>
                        </li>
                        <li>
                            <span>대표이사</span>
                            <strong>&nbsp;&nbsp;&nbsp;김장균</strong>
                        </li>
                        <li>
                            <span>주소</span>
                            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 서울특별시 강남구 학동로 42길 65-1</strong>
                        </li>
                        <li>
                            <span>주요사업</span>
                            <strong>&nbsp;&nbsp;&nbsp;연예 매니지먼트,제작</strong>
                        </li>
                    </ul>
                </div>
                <span className="divider"></span>
                <div className="right">
                    <p>매니지먼트 숲은 함께 하는 이들에게 좋은 울타리가 되었으면 하는 바람으로 2011년 설립되었습니다. 배우들이 가진 능력을 이끌어 내고 본연의 역할에 충실할 수 있도록 하고자 합니다. '숲'이라는 울타리를 통해 대중들과 공감을 나누고, 모든 구성원들이 행복해질 수 있기 위해 노력해 나갈 것입니다.</p>
                </div>
            </div>
        </IntroductionBlock>
    );
};

export default Introduction;
