import React from "react";
import styled from "styled-components";
import { RxSlash } from "react-icons/rx";

const ProfileBlock = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1380px;
  .profile__img {
    width: 576px;
    height: 725px;
    margin-bottom: 200px;
    flex: 0 0 40%;
    .profile__img__img {
    }
    .profile__img__sns {
      margin-top: 5px;
      ul {
        display: flex;
        li {
          display: inline-block;
          border: 2px solid #669933;
          border-radius: 3px;
          height: 40px;
          background: FFF;
          color: #fff;
          margin-left: 6px;
          &:first-child {
            margin-left: 0;
          }
          a {
            width: 150px;
            height: 36px;
            display: inline-block;
            color: #669933;
            text-align: center;
            line-height: 36px;
            font-size: 14px;
            transition: all 0.2s;
            &:hover {
              color: #fff;
              background: #669933;
            }
          }
        }
      }
    }
  }
  .profile__info {
    vertical-align: top;
    text-align: left;
    padding-right: 30px;
    flex: 0 0 50%;
    .info__title {
      display: flex;
      border-bottom: 1px solid #e5e5e5;
      width: 100%;
      .info__title__left {
        width: 70%;
        ul {
          display: block;
          li {
            color: #333;
            font-size: 45px;
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
      .info__title__right {
        width: 30%;
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
    .info__base {
      width: 100%;
      margin-bottom: 80px;
      .info__base__left {
        width: 100%;
        display: inline-block;
        font-size: 15px;
        line-height: 22px;
        color: #666;
        letter-spacing: -0.03em;
        ul {
          margin-top: 30px;
          li {
            width: 100%;
            list-style: circle;
            span {
              display: inline-block;
              vertical-align: top;
              font-size: 14px;
              color: #333;
              width: 100px;
              height: auto;
              line-height: 30px;
              background: rgba(0, 0, 0, 0);
              &:first-child {
                color: #666;
                font-weight: 500;
              }
              &: last-child {
                vertical-align: top;
                font-size: 14px;
                color: #333;
                width: 80%;
                height: auto;
                line-height: 30px;
                background: rgba(0, 0, 0, 0);
              }
            }
          }
        }
      }
    }
    .info__works {
      width: 650px;
      h2 {
        letter-spacing: -2px;
        font-weight: bold;
        margin: 12px 0 0;
      }
      .info__works__wrapper {
        width: 100%;
        height: 430px;
        padding-top: 30px;
        overflow-y: scroll;
        ul {
          li {
            list-style: circle;
            margin-top: 30px;
            &:first-child {
              margin-top: 0;
            }
            span {
              display: inline-block;
              font-size: 14px;
              vertical-align: top;
              color: #333;
              line-height: 24px;
              background: rgba(0, 0, 0, 0);
              word-break: keep-all;
              &:first-child {
                width: 100px !important;
                color: #666;
                font-weight: 500;
              }
              &:last-child {
                width: 80%;
              }
            }
          }
        }
      }
    }
  }
`;

const Profile = ({ currentArtistData, lang, setLang, screen, setScreen }) => {
  console.log(currentArtistData);

  const snsBtn = (val) => {
    if (Object.keys(val)[0] === "korea") {
      return "Korea official fancafe";
    } else if (Object.keys(val)[0] === "japan") {
      return "Japan official fancafe";
    } else if (Object.keys(val)[0] === "insta") {
      return "Instagram";
    } else if (Object.keys(val)[0] === "youtube") {
      return "Youtube";
    }
  };

  return (
    <ProfileBlock>
      <div className="profile__img">
        <div className="profile__img__img">
          <img src={currentArtistData.mainPhoto} alt="" />
        </div>
        <div className="profile__img__sns">
          <ul>
            {Object.keys(currentArtistData.sns).length
              ? currentArtistData.sns.map((val, idx) => (
                  <li key={idx}>
                    <a href={Object.values(val)} target="_blank">
                      {snsBtn(val)}
                    </a>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <div className="profile__info">
        <div className="info__title">
          <div className="info__title__left">
            <ul>
              <li>
                {lang === "kor"
                  ? currentArtistData.kName
                  : currentArtistData.eName}
                <strong>({currentArtistData.birth})</strong>
              </li>
              <li>
                {lang === "kor"
                  ? currentArtistData.eName
                  : currentArtistData.kName}
              </li>
            </ul>
          </div>
          <div className="info__title__right">
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
        <div className="info__base">
          <div className="info__base__left">
            <ul>
              <li>
                <span>{lang === "kor" ? "키" : "Height"}</span>
                <span>{currentArtistData.height}</span>
              </li>
              {currentArtistData.kdebut && (
                <li>
                  <span>{lang === "kor" ? "데뷔" : "Debut"}</span>
                  {lang === "kor" ? (
                    <span>{currentArtistData.kdebut}</span>
                  ) : (
                    <span>{currentArtistData.edebut}</span>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="info__works">
          <h2>WORKS</h2>
          <div className="info__works__wrapper">
            <ul>
              {lang === "kor"
                ? currentArtistData.kworks.map((val, idx) => (
                    <li key={idx}>
                      <span>{Object.keys(val)}</span>
                      <span>{Object.values(val)}</span>
                    </li>
                  ))
                : currentArtistData.eworks.map((val, idx) => (
                    <li key={idx}>
                      <span>{Object.keys(val)}</span>
                      <span>{Object.values(val)}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </ProfileBlock>
  );
};

export default Profile;
