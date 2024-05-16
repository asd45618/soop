import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CommunityDetailBlock = styled.div`
  margin: 60px 0;
  .board__view {
    width: 1200px;
    margin: 0 auto;
    font-family: "Noto Sans KR", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 15px;
    line-height: 22px;
    color: #666;
    letter-spacing: -0.03em;
    ul {
      border-top: 2px solid #000000;
      .view__title {
        line-height: 70px;
        color: #333;
        font-family: "notokr-bold";
        padding-left: 15px;
        font-size: 18px;
        text-align: center;
      }
      .view__header {
        .view__header__info {
          width: 100%;
          display: table;
          border-top: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
          span {
            width: 33.3%;
            display: table-cell;
            background: rgba(0, 0, 0, 0);
            strong {
              width: 90px;
              text-align: center;
              font-family: "notokr-bold";
              color: #333;
              height: 55px;
              display: table-cell;
              vertical-align: middle;
              background: #f7f7f7;
            }
            p {
              padding-left: 35px;
              height: 55px;
              display: table-cell;
              vertical-align: middle;
            }
          }
        }
      }
      .view__body {
        padding: 40px 15px;
        line-height: 22px;
        display: inline-block;
        text-align: left;
        width: 100%;
        p {
          word-break: normal;
          word-wrap: break-word;
        }
      }
      .view__footer {
        border-top: 1px solid #000000;
        padding: 30px 0 0px 0;
      }
    }
    .btn {
      display: flex;
      justify-content: right;
      border: none;
      button {
        margin: 0 10px;
      }
    }
  }
`;

const CommunityDetail = ({ val }) => {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.members.admin);

  return (
    <CommunityDetailBlock>
      <div className="board__view">
        <ul>
          <li className="view__title">{val.title}</li>
          <li className="view__header">
            <div className="view__header__info">
              <span>
                <strong>Writer</strong>
                <p>{val.writer}</p>
              </span>
              <span>
                <strong>Date</strong>
                <p>{dayjs(val.date).format("YYYY.MM.DD")}</p>
              </span>
              <span>
                <strong>Hit</strong>
                <p>{val.hit}</p>
              </span>
            </div>
          </li>
          <li className="view__body">
            <p>{val.content}</p>
          </li>
          <li className="view__footer"></li>
        </ul>
        <div className="btn">
          {admin ? (
            <Button
              variant="success"
              onClick={() =>
                navigate(`/communityModify/${val.title}`, {
                  state: { val: val },
                })
              }
            >
              수정
            </Button>
          ) : (
            ""
          )}
          <Button variant="success" onClick={() => navigate("/community")}>
            목록
          </Button>{" "}
        </div>
      </div>
    </CommunityDetailBlock>
  );
};

export default CommunityDetail;
