import React, { useRef } from 'react';
import styled from 'styled-components';

const HistoryBlock = styled.div`
margin: 50px auto;
overflow-x: auto;
.box {
    margin: 50px 0px 0px 0px;
    display: flex;
    .road{
        position: absolute;
        margin-top: -50px;
        width: 100%;
        height: 3px;
        font-size: 0px;
        line-height: 0px;
        background: #bbb;
        display: inline-block;
    }

            h2{ font-size:30px; margin:0 20px 20px 20px; color:green; font-weight: 600;}
            .content {
                flex: 0 0 auto; 
                margin: 0px 50px 30px 0; 
                .years {font-size:15px; font-weight: 600;}
                img {margin:30px 0;}
                }
            }
        
`;

const History = () => {
  

    return (
        <HistoryBlock>
            <div className="box">
            <span className="road"></span>

                   <h2>2023</h2>
                   <div className="content">
                    <ul>
                        <li>
                            <span>· 정유미 | 제44회 청룡영화상 여우주연상 수상 </span>
                            <span className="years">11</span>
                        </li>
                        <li>
                            <span>· 수지 | 제18회 서울드라마어워즈 국제경쟁부문 여자연기자상 수상 </span>
                            <span className="years">09</span>
                        </li>
                        <li>
                            <span>· 수지 | 콘텐츠아시아어워즈 TV시리즈 여우주연상 수상 </span>
                            <span className="years">08</span>
                        </li>
                        <li>
                            <span>· 수지 | 제2회 청룡시리즈어워즈 여우주연상 수상 </span>
                            <span className="years">11</span>
                        </li>
                        <li>
                            <span>· 배우 전혜진 영입 </span>
                            <span className="years">03</span>
                        </li>
                        <li>
                            <span>· 수지 | 제21회 디렉터스 컷 어워즈 올해의 여자배우상 수상 </span>
                            <span className="years">02</span>
                        </li>
                    </ul>
                   </div>
                   <h2>2022</h2>
                   <div className="content">
                    <ul>
                        <li>
                            <span>· 서현진 | SBS연기대상 미니시리즈장르드라마부문 여자최우수연기상 수상 </span>
                            <span className="years">12</span>
                        </li>
                        <li>
                            <span>· 배우 김민주 영입 </span>
                            <span className="years">09</span>
                        </li>
                        <li>
                            <img src="assets/image/history1.jpg" alt="김민주" />
                        </li>
                    </ul>
                   </div>
                   <h2>2021</h2>
                   <div className="content">
                    <ul>
                        <li>
                            <span>· 전도연 | 제26회 춘사국제영화제 여우주연상 수상 </span>
                            <span className="years">11</span>
                        </li>
                        <li>
                            <span>· 수지 | 제16회 서울드라마어워즈 TV한류드라마 여우주연상 수상 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                            <span>· 정유미 | 제41회 청룡영화상 인기스타상 수상 </span>
                            <span className="years">11</span>
                        </li>
                    </ul>
                   </div>
                   <h2>2020</h2>
                   <div className="content">
                    <ul>
                        <li>
                            <span>· 남지현 | MBC 연기대상 월화미니단막부문 여자 최우수연기상 수상 </span>
                            <span className="years">12</span>
                        </li>
                        <li>
                            <span>· 정유미 | 제40회 한국영화평론가협회상 여우주연상 수상 </span>
                            <span className="years">11</span>
                        </li>
                        <li>
                            <span>· 정유미 | 제29회 부일영화상 여우주연상 수상 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                            <span>· 공효진 | 제11회 대한민국 대중문화예술상 국무총리 표창 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                            <span>· 정유미 | 제56회 대종상 영화제 여우주연상 수상 </span>
                            <span className="years">06</span>
                        </li>
                        <li>
                            <span>· 전도연 | 제56회 백상예술대상 영화부문 여자 최우수연기상 수상 </span>
                            <span className="years">06</span>
                        </li>
                        <li>
                        <img src="assets/image/history2.jpg" alt="남주혁" />
                        </li>
                    </ul>
                   </div>
                   <h2>2019</h2>
                   <div className="content">
                    <ul>
                        <li>
                            <span>· 공효진 | KBS 연기대상 대상 수상 </span>
                            <span className="years">12</span>
                        </li>
                        <li>
                            <span>· 수지 | SBS 연기대상 미니시리즈 여자 최우수 연기상 수상 </span>
                            <span className="years">12</span>
                        </li>
                        <li>
                            <span>· 전도연 | 제6회 한국영화제작가협회상 여우주연상 수상 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                            <span>· 전도연 | 제28회 부일영화상 여우주연상 수상 </span>
                            <span className="years">04</span>
                        </li>
                        <li>
                            <span>· 전도연 | 제21회 이탈리아 우디네 극동영화제 골든 멀버리 평생 공로상 수상 </span>
                            <span className="years">04</span>
                        </li>
                        <li>
                            <span>· 배우 수지 영입 </span>
                            <span className="years">04</span>
                        </li>
                        <li>
                        <img src="assets/image/history3.jpg" alt="수지" />
                        </li>
                    </ul>
                   </div>
                   <h2>2018</h2>
                   <div className="content">
                    <ul>
                        <li>
                            <span>· 수지 | 제2회 청룡시리즈어워즈 여우주연상 수상 </span>
                            <span className="years">11</span>
                        </li>
                        <li>
                            <span>· 배우 서현진 영입 </span>
                            <span className="years">01</span>
                        </li>
                        <li>
                        <img src="assets/image/history4.jpg" alt="서현진" />
                        </li>
                    </ul>
                   </div>
                   <h2>2017</h2>
                   <div className="content">
                    <ul>
                        <li>
                            <span>· 정유미 | 제40회 한국영화평론가협회상 여우주연상 수상 </span>
                            <span className="years">11</span>
                        </li>
                        <li>
                            <span>· 정유미 | 제29회 부일영화상 여우주연상 수상 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                            <span>· 공효진 | 제11회 대한민국 대중문화예술상 국무총리 표창 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                            <span>· 배우 김재욱 영입 </span>
                            <span className="years">01</span>
                        </li>
                        <li>
                        <img src="assets/image/history5.jpg" alt="김재욱" />
                        </li>
                    </ul>
                   </div>
                   <h2>2016</h2>
                    <div className="content">
                    <ul>
                        <li>
                            <span>· 정유미 | 제40회 한국영화평론가협회상 여우주연상 수상 </span>
                            <span className="years">11</span>
                        </li>
                        <li>
                            <span>· 정유미 | 제29회 부일영화상 여우주연상 수상 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                            <span>· 배우 정유미 영입 </span>
                            <span className="years">01</span>
                        </li>
                        <li>
                        <img src="assets/image/history6.jpg" alt="정유미" />
                        </li>
                    </ul>
                   </div>
                   <h2>2015</h2>
                    <div className="content">
                    <ul>
                        <li>
                            <span>· 수지 | 제2회 청룡시리즈어워즈 여우주연상 수상 </span>
                            <span className="years">11</span>
                        </li>
                        <li>
                            <span>· 배우 남지현 영입 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                        <img src="assets/image/history7.jpg" alt="남지현" />
                        </li>
                    </ul>
                   </div>
                   <h2>2011</h2>
                    <div className="content">
                    <ul>
                        <li>
                            <span>· 공효진 | 제11회 대중문화예술상 국무총리 표창 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                            <span>· 배우 공유 영입 </span>
                            <span className="years">10</span>
                        </li>
                        <li>
                        <img src="assets/image/history8.jpg" alt="공유" />
                        </li>
                    </ul>
                   </div>
               </div>

        </HistoryBlock>
    );
};

export default History;