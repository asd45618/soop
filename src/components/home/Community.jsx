import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CommunityBlock = styled.div`
  width: 100%;
  padding: 50px 0px 126px 0px;
  background: #eee;
  margin-top: 30px;
  text-align: center;
  .title__box {
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
  .community__main {
    .card__wrapper {
      width: 1700px;
      margin: 0 auto;
      .more {
        margin-bottom: 10px;
        padding-right: 150px;
        text-align: right;
        color: #666;
        a {
        }
      }
      ul {
        .card__box {
          width: 340px;
          display: inline-block;
          margin-right: 30px;
          vertical-align: top;
          a {
            .card {
              position: relative;
              width: 340px;
              height: 640px;
              display: inline-block;
              margin-bottom: 30px;
              background: #fff;
              box-shadow: 5px 5px 5px #bfbfbf;
              &:hover .card__img {
                opacity: 0.6;
              }
              .card__img {
                width: 340px;
                height: 425px;
                transition: all 0.4s;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .card__text {
                padding: 20px;
                ul {
                  letter-spacing: -0.03em;
                  .title {
                    color: #333;
                    font-size: 17px;
                    width: 100%;
                    text-align: left;
                    font-weight: bold;
                    margin-bottom: 20px;
                  }
                  .content {
                    font-size: 15px;
                    color: #666;
                    text-align: left;
                  }
                  .date {
                    position: absolute;
                    left: 20px;
                    bottom: 20px;
                    font-size: 15px;
                    line-height: 22px;
                    color: #666;
                    text-align: left;
                    margin-top: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Community = () => {
  const communityData = [
    [
      {
        url: "https://www.slist.kr/news/articleView.html?idxno=533498",
        img: "/assets/image/community1.jpg",
        title: "공유, 공유하고 싶은 톰 포드 뷰티 화보",
        content:
          "패션 매거진 보그 코리아에서 배우 공유와 톰 포드 뷰티가 함께한 뷰티 캠페인을 공개했다.  ...",
        date: "2024.03.15",
      },
      {
        url: "https://www.slist.kr/news/articleView.html?idxno=534649",
        img: "/assets/image/community2.jpg",
        title: "공효진, '킴마틴' 화보 공개...시크한 스타일링",
        content: "배우 공효진이 '킴마틴' 화보를 공개했다.  ...",
        date: "2024.03.20",
      },
    ],
    [
      {
        url: "https://m.entertain.naver.com/article/144/0000945969",
        img: "/assets/image/community3.jpg",
        title: "서현진, 격이 다른 우아함[화보]",
        content:
          "여성복 브랜드 린(LYNN)은 28일 서현진과 함께 한 화보를 공개했다. ...",
        date: "2024.02.28",
      },
      {
        url: "https://www.slist.kr/news/articleView.html?idxno=529504",
        img: "/assets/image/community4.jpg",
        title: "수지, 완벽 청바지 핏 [화보]",
        content:
          "토털 라이프 스타일 브랜드 GUESS (이하 ‘게스’)가 수지와 함께한 2024년 S/S 시즌 화보를 공개했 ...",
        date: "2024.02.29",
      },
    ],
    [
      {
        url: "https://m.entertain.naver.com/article/144/0000944840",
        img: "/assets/image/community5.jpg",
        title: "수지의 봄, 화사할지니[화보]",
        content:
          "가수 겸 배우 수지가 여유로운 아웃도어 느낌을 담은 봄·여름 시즌 의류 화보를 공개했다.  ...",
        date: "2024.02.22",
      },
      {
        url: "https://m.entertain.naver.com/article/144/0000944167",
        img: "/assets/image/community6.jpg",
        title: "전도연, 대체불가 아우라[화보]",
        content:
          "배우 전도연이 여성복 브랜드 ‘모에’와 함께한 봄 패션 화보를 통해 독보적인 우아한 매력을 선보였다. ...",
        date: "2024.02.19",
      },
    ],
    [
      {
        url: "https://www.slist.kr/news/articleView.html?idxno=525931",
        img: "/assets/image/community7.jpg",
        title: "정유미, 만다리나덕 앰배서더 발탁...여행 콘셉트 화보 공개",
        content:
          "이태리 라이프스타일 브랜드 만다리나덕(MANDARINADUCK)은 배우 정유미를 브랜드 엠버서더로 선정했다. ...",
        date: "2024.02.15",
      },
      {
        url: "https://www.slist.kr/news/articleView.html?idxno=516361",
        img: "/assets/image/community8.png",
        title: "'파과' 차지연·구원영·신성록·김재욱, 캐스팅 라인업 공개",
        content:
          "창작 뮤지컬 '파과'가 마침내 캐스팅을 공개하며 베일을 벗었다.   ...",
        date: "2024.01.10",
      },
    ],
  ];
  return (
    <CommunityBlock>
      <div className="title__box">
        <span></span>
        <h3>COMMUNITY</h3>
      </div>
      <div className="community__main">
        <div className="card__wrapper">
          <div className="more">
            <Link to="/community">
              <FontAwesomeIcon icon={faPlusSquare} />
              more
            </Link>
          </div>
          <ul>
            {communityData.map((val, idx) => (
              <li key={idx} className="card__box">
                <a href={val[0].url} target="_blank">
                  <div className="card">
                    <div className="card__img">
                      <img src={val[0].img} alt={val[0].title} />
                    </div>
                    <div className="card__text">
                      <ul>
                        <li className="title">{val[0].title}</li>
                        <li className="content">{val[0].content}</li>
                        <li className="date">{val[0].date}</li>
                      </ul>
                    </div>
                  </div>
                </a>
                <a href={val[1].url} target="_blank">
                  <div className="card">
                    <div className="card__img">
                      <img src={val[1].img} alt={val[1].title} />
                    </div>
                    <div className="card__text">
                      <ul>
                        <li className="title">{val[1].title}</li>
                        <li className="content">{val[1].content}</li>
                        <li className="date">{val[1].date}</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CommunityBlock>
  );
};

export default Community;
