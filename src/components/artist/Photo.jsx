import React from "react";
import styled from "styled-components";
import { RxSlash } from "react-icons/rx";

const PhotoBlock = styled.div`
  width: 1380px;
  padding-left: 52px;
  vertical-align: top;
  text-align: left;
  padding-right: 30px;
  .photo__title {
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    margin-top: 10px;
    .photo__title__left {
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
    .photo__title__right {
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
  .photo__wrapper {
    width: 100%;
    display: inline-block;
    margin-top: 60px;
    margin-bottom: 60px;
    .photo__wrapper__list {
      display: block;
      clear: both;
      .photo__wrapper__list__photo {
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
        text-align: center;
        ul {
          display: inline-block;
          li {
            width: 195px;
            display: inline-block;
            vertical-align: top;
            margin-right: 20px;
            margin-bottom: 20px;
            border: 1px solid #fff;
            cursor: pointer;
            text-align: left;
            a {
              width: 100%;
              height: 240px;
              line-height: 0px;
              display: inline-block;
              overflow: hidden;
              transition: all 0.3s;
              &:hover {
                opacity: 0.6;
              }
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }
`;

const Photo = ({ currentArtistData, lang, setLang, screen, setScreen }) => {
  return (
    <PhotoBlock>
      <div className="photo__title">
        <div className="photo__title__left">
          <ul>
            <li>
              {currentArtistData.kName}
              <strong>({currentArtistData.birth})</strong>
            </li>
            <li>{currentArtistData.eName}</li>
          </ul>
        </div>
        <div className="photo__title__right">
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
      <div className="photo__wrapper">
        <div className="photo__wrapper__list">
          <div className="photo__wrapper__list__photo">
            <ul>
              {currentArtistData.photo.map((val, idx) => (
                <li key={idx}>
                  <a href="#">
                    <img src={val} alt={val} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PhotoBlock>
  );
};

export default Photo;
