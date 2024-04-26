import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RxSlash } from "react-icons/rx";

const VideoBlock = styled.div`
  width: 1380px;
  padding-left: 52px;
  vertical-align: top;
  text-align: left;
  padding-right: 30px;
  .video__title {
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    margin-top: 10px;
    .video__title__left {
      width: 60%;
      ul {
        display: block;
        li {
          color: #333;
          font-size: 49px;
          font-weight: 600;
          vertical-align: bottom;
          strong {
            font-size: 20px;
            font-weight: 400;
          }
          &:last-child {
            font-size: 17px;
            color: #999;
            height: 30px;
            padding-left: 10px;
          }
        }
      }
    }
    .video__title__right {
      width: 40%;
      padding-top: 35px;
      vertical-align: bottom;
      .title__right__lang {
        width: 100%;
        height: 30px;
        text-align: right;
        padding-right: 6px;
        ul {
          display: flex;
          justify-content: right;
          li {
            display: inline-block;
            margin: 0px 3px;
            padding: 0px;
            div {
              font-size: 12px;
              color: #999;
              font-weight: 400;
              cursor: pointer;
              &:hover {
                color: #669933;
              }
              &.langOn {
                color: #669933;
              }
            }
          }
        }
      }
      ul {
        display: flex;
        justify-content: right;
        li {
          color: #999;
          font-size: 13px;
          font-weight: 300;
          display: inline-block;
          margin-bottom: 13px;
          padding: 0px 9px;
          div {
            cursor: pointer;
            &:hover {
              color: #333;
            }
            &.screenOn {
              color: #333;
            }
          }
        }
      }
    }
  }
  .video__wrapper {
    width: 100%;
    display: inline-block;
    margin-top: 60px;
    margin-bottom: 60px;
    .video__wrapper__view {
      background: #000;
      text-align: center;
      padding: 0px 0px 30px 0px;
      .view__inner {
        iframe {
          border: 8px solid #000;
          margin-top: 50px;
          width: 100%;
          height: 477px;
        }
      }
    }
    .video__wrapper__list {
      display: block;
      clear: both;
      margin-top: 60px;
      .list__wrapper {
        border-bottom: 1px solid #e5e5e5;
        text-align: center;
        .video__list {
          display: inline-block;
          width: 285px;
          vertical-align: top;
          margin-right: 20px;
          margin-bottom: 20px;
          border: 1px solid #fff;
          cursor: pointer;
          text-align: left;
          overflow: hidden;
          cursor: pointer;
          li {
            width: 100%;
            &:first-child {
              height: 160px;
              overflow: hidden;
            }
            &:last-child {
              padding-top: 6px;
            }
          }
        }
      }
    }
  }
`;

const Video = ({ currentArtistData, lang, setLang, screen, setScreen }) => {
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    setCurrentVideo(currentArtistData?.video[0].url);
  }, [currentArtistData]);

  return (
    <VideoBlock>
      <div className="video__title">
        <div className="video__title__left">
          <ul>
            <li>
              {currentArtistData.kName}
              <strong>({currentArtistData.birth})</strong>
            </li>
            <li>{currentArtistData.eName}</li>
          </ul>
        </div>
        <div className="video__title__right">
          <div className="title__right__lang">
            <ul>
              <li>
                <div
                  className={lang === "kor" ? "langOn" : ""}
                  onClick={() => setLang("kor")}
                >
                  KOR
                </div>
              </li>
              <li>
                <RxSlash style={{ color: "#999" }} />
              </li>
              <li>
                <div
                  className={lang === "eng" ? "langOn" : ""}
                  onClick={() => setLang("eng")}
                >
                  ENG
                </div>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <div
                className={screen === "profile" ? "screenOn" : ""}
                onClick={() => setScreen("profile")}
              >
                PROFILE
              </div>
            </li>
            <li>
              <div
                className={screen === "photo" ? "screenOn" : ""}
                onClick={() => setScreen("photo")}
              >
                PHOTO
              </div>
            </li>
            <li>
              <div
                className={screen === "video" ? "screenOn" : ""}
                onClick={() => setScreen("video")}
              >
                VIDEO
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="video__wrapper">
        <div className="video__wrapper__view">
          <div className="view__inner">
            <iframe
              width="1298"
              height="477"
              src={currentVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video__wrapper__list">
          <div className="list__wrapper">
            {currentArtistData.video.map((val, idx) => (
              <ul
                className="video__list"
                onClick={() => setCurrentVideo(val.url)}
                key={idx}
              >
                <li>
                  <img src={val.img} alt={val.text} />
                </li>
                <li>{val.text}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </VideoBlock>
  );
};

export default Video;
