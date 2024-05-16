import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dayjs from "dayjs";
import { changeType, fetchCommunity } from "../../store/community";
import { communityDB } from "../../assets/firebase";
import Pagination from "../layout/Pagination";

const CommunitySectionBlock = styled.div`
  width: 100%;
  display: inline-block;
  text-align: center;
  .section {
    width: 1200px;
    display: inline-block;
    .board__wrapper {
      width: 100%;
      display: inline-block;
      margin-top: 60px;
      margin-bottom: 60px;
      .board__wrapper__category {
        position: relative;
        text-align: left;
        ul {
          margin-bottom: 0;
          li {
            display: inline-block;
            padding: 10px 0px 10px 10px;
            &:first-child {
              span {
                display: none;
              }
            }
            div {
              display: inline-block;
              cursor: pointer;
              &.on {
                color: #669933;
              }
            }
          }
        }
        button {
          position: absolute;
          top: 7px;
          right: 32px;
          padding: 6px;
          background: #669933;
          color: #fff;
          font-size: 12px;
        }
      }
      .board__wrapper__list {
        border-top: 2px solid #333;
        margin-bottom: 30px;
        .list__header {
          width: 100%;
          display: table;
          border-bottom: 1px solid #e5e5e5;
          text-align: center;
          margin: 0;
          li {
            height: 75px;
            color: #333;
            display: table-cell;
            vertical-align: middle;
            font-size: 15px;
            &.count {
              width: 10%;
              text-align: center;
            }
            &.subject {
              text-align: center;
              padding: 0 20px;
            }
            &.name {
              width: 15%;
              text-align: center;
            }
            &.date {
              width: 15%;
              text-align: center;
            }
            &.Hit {
              width: 10%;
              text-align: center;
            }
          }
        }
        .list__body {
          width: 100%;
          display: table;
          border-bottom: 1px solid #e5e5e5;
          text-align: center;
          margin: 0;
          padding: 15px 0;
          li {
            display: table-cell;
            &.body__count {
              width: 10%;
            }
            &.body__subject {
              padding: 0 20px;
              text-align: left;
              cursor: pointer;
            }
            &.body__name {
              width: 15%;
            }
            &.body__date {
              width: 15%;
            }
            &.body__hit {
              width: 10%;
            }
          }
        }
      }
    }
  }
`;

const CommunitySection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentCategory, setCurrentCategory] = useState("All");
  const categoryArr = ["All", "news", "interview", "notice"];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const list = useSelector((state) => state.communitys.currentList);
  const admin = useSelector((state) => state.members.admin);

  const changeCategory = (val) => {
    dispatch(changeType(val));
    setCurrentCategory(val);
  };

  const goToDetail = (val) => {
    navigate(`/communityDetail/${val.subject}`, {
      state: { val: val },
    });
    communityDB.child(val.key).update({
      hit: val.hit + 1,
    });
  };

  const onClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchCommunity());
  }, []);

  useEffect(() => {
    dispatch(changeType(currentCategory));
  }, [currentCategory]);

  return (
    <CommunitySectionBlock>
      <div className="section">
        <div className="board__wrapper">
          <div className="board__wrapper__category">
            <ul>
              {categoryArr.map((val, idx) => (
                <li key={idx}>
                  <span>| </span>
                  <div
                    className={currentCategory === val ? "on" : ""}
                    onClick={() => {
                      changeCategory(val);
                      setCurrentPage(1);
                    }}
                  >
                    {val}
                  </div>
                </li>
              ))}
            </ul>
            {admin ? (
              <button onClick={() => navigate("/communityWrite")}>
                글쓰기
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="board__wrapper__list">
            <ul className="list__header">
              <li className="count">No</li>
              <li className="subject">SUBJECT</li>
              <li className="name">NAME</li>
              <li className="date">DATE</li>
              <li className="Hit">Hit</li>
            </ul>
            {list
              .slice(
                itemsPerPage * (currentPage - 1),
                itemsPerPage * currentPage
              )
              .map((val, idx) => (
                <ul className="list__body" key={idx}>
                  <li className="body__count">
                    {list.length - idx - (currentPage - 1) * itemsPerPage}
                  </li>
                  <li className="body__subject" onClick={() => goToDetail(val)}>
                    {val.title}
                  </li>
                  <li className="body__name">{val.writer}</li>
                  <li className="body__date">
                    {dayjs(val.date).format("YYYY.MM.DD")}
                  </li>
                  <li className="body__hit">{val.hit}</li>
                </ul>
              ))}
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={list.length}
        itemsPerPage={itemsPerPage}
        onClick={onClick}
      />
    </CommunitySectionBlock>
  );
};

export default CommunitySection;
