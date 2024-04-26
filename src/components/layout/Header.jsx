import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN, faPlay, faV } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const HeaderBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  .header__left {
    flex: 1 1 50%;
    position: relative;
    display: flex;
    padding: 30px 0 0 30px;
    .img__left {
    }
    .img__right {
      position: absolute;
      top: 0;
      left: 70%;
    }
  }
  .header__right {
    width: 50%;
    text-align: right;
    padding-right: 30px;
    .sns {
      padding: 10px 0;
      a {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        transition: all 0.2s;
        &:hover {
          background: #669933;
          color: #fff;
        }
      }
    }
    .menu {
      .menu__group {
        display: flex;
        justify-content: right;
        & > li:hover #blind {
          height: 130px;
        }
        li {
          width: 140px;
          text-align: center;
          font-size: 18px;
          color: #333;
          font-weight: bold;
          &:hover .sub__menu li {
            display: block;
          }

          .sub__menu {
            position: absolute;
            padding-top: 20px;
            z-index: 999;
            &:hover li {
              display: block;
            }
            li {
              display: none;
              height: 36px;
              font-size: 15px;
              font-weight: normal;
            }
          }
        }
        #blind {
          position: absolute;
          left: 0;
          top: 100px;
          width: 100%;
          height: 0px;
          z-index: 1;
          background: rgba(0, 255, 255, 0.3);
        }
      }
    }
  }
`;
const Header = () => {
  return (
    <HeaderBlock>
      <div className="header__left">
        <div className="img__left">
          <Link to="/">
            <img src="assets/image/logo_black.png" alt="logo" />
          </Link>
        </div>
        <div className="img__right">
          <img src="assets/image/lable.png" alt="lable" />
        </div>
      </div>
      <div className="header__right">
        <div className="sns">
          <a href="https://www.facebook.com/soopent" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/management_soop/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCPWLltIuHLCws1-O3B4ADtg"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://post.naver.com/my.nhn?memberNo=22903361"
            target="_blank"
          >
            <FontAwesomeIcon icon={faN} />
          </a>
          <a href="https://weverse.io/" target="_blank">
            <FontAwesomeIcon icon={faV} />
          </a>
          <a href="https://tv.naver.com/soopent" target="_blank">
            <FontAwesomeIcon icon={faPlay} />
          </a>
        </div>
        <nav className="menu">
          <ul className="menu__group">
            <li>
              <NavLink to="/company">COMPANY</NavLink>
              <ul className="sub__menu">
                <li>
                  <NavLink to="/company">INTRODUCTION</NavLink>
                </li>
                <li>
                  <NavLink to="">HISTORY</NavLink>
                </li>
                <li>
                  <NavLink to="/contactUs">CONTACT US</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/artist">ARTIST</NavLink>
            </li>
            <li>
              <NavLink to="/community">COMMUNITY</NavLink>
              <ul className="sub__menu">
                <li>
                  <NavLink to="">NEWS&amp;NOTICE</NavLink>
                </li>
              </ul>
            </li>
            <div id="blind"></div>
          </ul>
        </nav>
      </div>
    </HeaderBlock>
  );
};

export default Header;
