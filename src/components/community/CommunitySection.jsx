import React, { useState } from "react";
import styled from "styled-components";

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
        text-align: left;
        ul {
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
      }
      .board__wrapper__list {
        border-top: 2px solid #333;
        margin-bottom: 30px;
        .list__header {
          width: 100%;
          display: table;
          border-bottom: 1px solid #e5e5e5;
          text-align: center;
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
          }
        }
      }
    }
  }
`;

const CommunitySection = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const categoryArr = ["All", "news", "interview", "notice"];

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
                    onClick={() => setCurrentCategory(val)}
                  >
                    {val}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="board__wrapper__list">
            <ul className="list__header">
              <li className="count">No</li>
              <li className="subject">SUBJECT</li>
              <li className="name">NAME</li>
              <li className="date">DATE</li>
            </ul>
          </div>
        </div>
      </div>
    </CommunitySectionBlock>
  );
};

export default CommunitySection;
