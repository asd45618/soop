import React, { useEffect, useState } from "react";
import cn from "classnames";
import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import { RiTreeFill, RiTreeLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers, userLogout } from "../../store/member";
import Modal from "react-bootstrap/Modal";
import { changeCurrentArtist } from "../../store/artist";

const HeaderBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .modal-dialog {
      max-width: 100%;
      height: 100%;
      margin: 0;
      .modal-content {
        position: relative;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        .modal-header {
          text-align: center;
          margin: 150px auto 0;
          border-bottom: none;
          color: #fff;
        }
        .modal-body {
          display: flex;
          justify-content: center;
          .modal__data {
            margin-bottom: 1rem;
            padding: 4rem 0 0 2rem;
            li {
              width: 188px;
              height: 256px;
              display: inline-block;
              margin-right: 20px;
              margin-bottom: 24px;
              a {
                position: relative;
                transition: all 0.5s;
                &:hover {
                  opacity: 0.6;
                  .modal__data__name {
                    display: block;
                  }
                  .view__profile {
                    display: block;
                  }
                }
                .modal__data__name {
                  color: #fff;
                  position: absolute;
                  bottom: 2%;
                  left: 50%;
                  transform: translate(-50%, 0);
                  font-size: 12px;
                  vertical-align: bottom;
                  display: none;
                }
                .view__profile {
                  display: none;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  p {
                    height: 40px;
                    border: 1px solid #fff;
                    border-radius: 20px;
                    color: #fff;
                    width: 180px;
                    font-size: 16px;
                    line-height: 40px;
                    text-align: center;
                    transition: all 0.5s;
                    margin-bottom: 0;
                    // &:hover {
                    //   color: #000;
                    //   background: #fff;
                    // }
                  }
                }
              }
            }
          }
        }
        .modal-footer {
          border-top: none;
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
        }
        .xIcon {
          position: absolute;
          top: 5%;
          right: 3%;
          color: #fff;
          font-size: 40px;
          cursor: pointer;
        }
      }
    }
  }
  .header__left {
    flex: 1 1 50%;
    position: relative;
    display: flex;
    padding: 30px 0 0 30px;
    .img__left {
      @media (max-width: 768px) {
        width: 80%;
      }
    }
    .img__right {
      position: absolute;
      top: 0;
      left: 80%;
      cursor: pointer;
      @media (max-width: 768px) {
        left: 85%;
      }
    }
  }
  .header__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    text-align: right;
    padding-right: 30px;
    .login {
      padding: 5px 50px 5px 5px;
      span {
        cursor: pointer;
      }
      @media (max-width: 768px) {
        padding: 45px 0 0 0;
      }
    }
    .sns {
      padding: 0;
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
      @media (max-width: 768px) {
        display: none;
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
          position: relative;
          text-align: center;
          font-size: 18px;
          color: #333;
          font-weight: bold;
          margin: 0 20px;
          &:hover .sub__menu {
            display: block;
            color: green;
          }
          .sub__menu {
            position: absolute;
            top: 100%;
            left: -30px;
            padding-top: 33px;
            z-index: 999;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            display: none;
            li {
              height: 36px;
              font-size: 15px;
              font-weight: normal;
              &:hover {
                color: #fff;
              }
            }
          }
          &:last-child {
            .sub__menu {
              left: -15px;
            }
          }
        }
      }
    }
  }
`;
const ItemCart = styled.div`
  position: absolute;
  top: 10px;
  right: 40px;
  font-size: 25px;
  color: #669933;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ItemTree = styled.div`
  position: absolute;
  top: 5px;
  right: 32px;
  font-size: 28px;
  color: green;
`;

const MobileNav = styled.nav`
  position: fixed;
  left: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  overflow: hidden;
  transition: all 0.5s;
  &.on {
    left: 0;
  }
  .closeNav {
    font-size: 28px;
    color: green;
    position: absolute;
    top: 20px;
    right: -50px;
    z-index: 9999;
    transition: all 0.3s;
    &.on {
      right: 20px;
      transition: all 0.5s;
    }
  }
  ul {
    position: absolute;
    top: -10px;
    right: -200px;
    height: 100%;
    width: 200px;
    background: #fff;
    padding-top: 100px;
    transition: all 0.3s 0s;
    &.on {
      right: 0;
      transition: all 0.3s 0.2s;
    }
    li {
      font-weight: 600;
      display: block;
      line-height: 40px;
      margin-right: 20px;
      transition: all 0.5s;
      &:hover,
      &.active {
        color: green;
      }
    }
  }
`;

const Header = () => {
  const mobile = useMediaQuery({ maxWidth: 768 });
  const [openNav, setOpenNav] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.members.user);
  const modalData = [
    { img: "/assets/image/artistMainImg1.jpg", name: "GONG YOO" },
    { img: "/assets/image/artistMainImg2.jpg", name: "KIM JAE-UCK" },
    { img: "/assets/image/artistMainImg3.jpg", name: "NAM JOO-HYUK" },
    { img: "/assets/image/artistMainImg4.jpg", name: "SEO HYUN-JIN" },
    { img: "/assets/image/artistMainImg5.jpg", name: "SUZY" },
  ];

  const goToArtist = (name) => {
    dispatch(changeCurrentArtist(name));
    setModalOpen(false);
  };

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
        <div className="img__right" onClick={() => setModalOpen(true)}>
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
              <span>/ </span>
              <span onClick={() => navigate("/join")}>회원가입</span>
            </>
          )}
          {mobile && (
            <ItemTree onClick={() => setOpenNav(true)}>
              <RiTreeFill />
            </ItemTree>
          )}
          <ItemCart>
            <Link to="/cart">
              <BsCartPlusFill />
            </Link>
          </ItemCart>
        </div>
        {mobile || (
          <nav className="menu">
            <ul className="menu__group">
              <li>
                <NavLink to="/game">GAME</NavLink>
              </li>
              <li>
                <NavLink to="/ranking">RANKING</NavLink>
              </li>
              <li>
                <NavLink to="/artist">ARTIST</NavLink>
              </li>
              <li>
                <NavLink to="/product">PRODUCT</NavLink>
              </li>
              <li>
                <NavLink to="/company">COMPANY</NavLink>
                <ul className="sub__menu">
                  <li>
                    <NavLink to="/company">INTRODUCTION</NavLink>
                  </li>
                  <li>
                    <NavLink to="/history">HISTORY</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactUs">CONTACT US</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/community">COMMUNITY</NavLink>
                <ul className="sub__menu">
                  <li>
                    <NavLink to="/community">NEWS&amp;NOTICE</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        )}
        {mobile && (
          <MobileNav className={openNav && "on"}>
            <RiTreeLine
              className={cn("closeNav", openNav && "on")}
              onClick={() => setOpenNav(false)}
            />
            <ul className={openNav && "on"}>
              <li>
                <NavLink to="/game">GAME</NavLink>
              </li>
              <li>
                <NavLink to="/ranking">RANKING</NavLink>
              </li>
              <li>
                <NavLink to="/company">COMPANY</NavLink>
                <ul className="sub__menu">
                  <li>
                    <NavLink to="/company">INTRODUCTION</NavLink>
                  </li>
                  <li>
                    <NavLink to="/history">HISTORY</NavLink>
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
                    <NavLink to="/community">NEWS&amp;NOTICE</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </MobileNav>
        )}
      </div>
      {modalOpen ? (
        <div className="modal show" style={{ display: "block" }}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>
                MANAGEMENT SOOP <h2>OUR ARTIST PROFILE</h2>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ul className="modal__data">
                {modalData.map((val, idx) => (
                  <li key={idx} onClick={() => goToArtist(val.name)}>
                    <Link to="/artist">
                      <img src={val.img} alt={val.name} />
                      <div className="modal__data__name">{val.name}</div>
                      <div className="view__profile">
                        <p>VIEW PROFILE</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </Modal.Body>

            <Modal.Footer></Modal.Footer>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="xIcon"
              onClick={() => setModalOpen(false)}
            />
          </Modal.Dialog>
        </div>
      ) : (
        ""
      )}
    </HeaderBlock>
  );
};

export default Header;
