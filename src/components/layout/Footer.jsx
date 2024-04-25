import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN, faPlay, faV } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterBlock = styled.div`
  width: 100%;
  background: #313131;
  text-align: center;
  position: relative;
  z-index: 50;
  .footer__wrapper {
    width: 1200px;
    padding: 40px 0;
    margin: 0 auto;
    .footer__box {
      display: flex;
      .info {
        width: 760px;
        text-align: left;
        .footer__logo {
          margin-bottom: 10px;
        }
        ul {
          li {
            color: #999;
            font-size: 12px;
            font-weight: 400;
            height: 16px !important;
            &:first-child {
              color: #fff;
              font-size: 14px;
              margin-bottom: 6px;
            }
            &:last-child {
              margin-top: 10px;
              font-size: 11px;
            }
          }
        }
      }
      .link {
        width: 250px;
        text-align: left;
        padding-left: 20px;
        h2 {
          font-size: 14px;
          color: #fff;
          margin-bottom: 6px;
          font-weight: normal;
        }
        .family {
          ul {
            li {
              select {
                width: 185px;
                height: 30px;
                border: 1px solid #fff;
                background: #fff;
                padding: 0px 10px;
                color: #333;
                font-size: 14px;
              }
            }
          }
        }
      }
      .sns {
        width: 280px;
        ul {
          display: flex;
          justify-content: right;
          li {
            padding-left: 20px;
            a {
              color: #fff;
              transition: all 0.2s;
              &:hover {
                color: #669933;
              }
            }
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div className="footer__wrapper">
        <div className="footer__box">
          <div className="info">
            <div className="footer__logo">
              <a href="#">
                <img src="assets/image/footer__logo.png" alt="footerLogo" />
              </a>
            </div>
            <ul>
              <li>MANAGEMENT SOOP</li>
              <li>
                서울 강남구 학동로42길 65-1 (논현동 262-19) 65-1, Hakdong-ro
                42-gil, Gangnam-gu, Seoul, Korea
              </li>
              <li>Fax : 02.543.0061 | msoop04@naver.com</li>
              <li>
                COPYRIGHT ⓒ 2013 ~ 2024 MANAGEMENT SOOP CORP. ALL RIGHTS
                RESERVED. | CREATED BY PURPLE&COMPANY
              </li>
            </ul>
          </div>
          <div className="link">
            <h2>FAMILY SITE</h2>
            <div className="family">
              <ul>
                <li>
                  <select
                    name="familys"
                    id="familys"
                    onChange={(e) => {
                      window.open(e.target.value, "_blank");
                    }}
                  >
                    <option value=""></option>
                    <option value="https://kakaoent.com/">
                      카카오엔터테인먼트
                    </option>
                    <option value="http://www.bhent.co.kr">
                      BH엔터테인먼트
                    </option>
                    <option value="http://www.jwide.co.kr">
                      제이와이드컴퍼니
                    </option>
                    <option value="http://www.starship-ent.com/">
                      킹콩 by 스타쉽
                    </option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className="sns">
            <ul>
              <li>
                <a href="https://www.facebook.com/soopent" target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/management_soop/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCPWLltIuHLCws1-O3B4ADtg"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a
                  href="https://post.naver.com/my.nhn?memberNo=22903361"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faN} />
                </a>
              </li>
              <li>
                <a href="https://weverse.io/" target="_blank">
                  <FontAwesomeIcon icon={faV} />
                </a>
              </li>
              <li>
                <a href="https://tv.naver.com/soopent" target="_blank">
                  <FontAwesomeIcon icon={faPlay} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterBlock>
  );
};

export default Footer;
