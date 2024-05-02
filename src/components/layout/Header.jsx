import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faN, faPlay, faV } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers, userLogout } from "../../store/member";

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
    .login {
      span {
        cursor: pointer;
      }
    }
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
        &:hover .sub__menu li {
          display: block;
        }
        li {
          width: 140px;
          text-align: center;
          font-size: 18px;
          color: #333;
          font-weight: bold;
          &:hover {
            display: block;
            color: green;
          }

          .sub__menu {
            position: absolute;
            padding-top: 10px;
            z-index: 999;
            li {
              display: none;
              height: 36px;
              font-size: 15px;
              font-weight: normal;
              &:hover {
                color: #fff;
              }
            }
          }
        }
        #blind {
          position: absolute;
          left: 0;
          top: 110px;
          width: 100%;
          height: 0px;
          z-index: 1;
          background: rgba(255, 255, 255, 0.3);
        }
      }
      &:hover #blind {
        height: 125px;
      }
    }
  }
`;
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.members.user);

  useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  return (
    <HeaderBlock>
      <div className="header__left">
        <div className="img__left">
          <Link to="/">
            <img src="/assets/image/logo_black.png" alt="logo" />
          </Link>
        </div>
        <div className="img__right">
          <img src="/assets/image/lable.png" alt="lable" />
        </div>
      </div>
      <div className="header__right">
        <div className="login">
          {currentUser ? (
            <span onClick={() => dispatch(userLogout())}>로그아웃</span>
          ) : (
            <>
              <span onClick={() => navigate("/login")}>로그인 </span>
              <span onClick={() => navigate("/join")}>회원가입</span>
            </>
          )}
        </div>
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
              <NavLink to="/product">PRODUCT</NavLink>
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
