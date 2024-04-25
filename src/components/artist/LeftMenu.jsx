import React from "react";
import styled from "styled-components";

const LeftMenuBlock = styled.div`
  width: 320px;
  text-align: left;
  ul {
    li {
      height: 30px;
      div {
        color: #999;
        margin-left: 13px;
        font-size: 15px;
        letter-spacing: -0.03em;
        cursor: pointer;
        &:hover {
          color: #333;
        }
      }
    }
  }
`;

const LeftMenu = ({ artistData, setCurrentArtist }) => {
  const clickMenu = (eName) => {
    setCurrentArtist(eName);
    // 클릭 시 클릭한 버튼 색 바꾸기 #333
  };

  return (
    <LeftMenuBlock>
      <ul>
        {artistData.map((val, idx) => (
          <li key={idx}>
            <div onClick={() => clickMenu(val.eName)}>{val.eName}</div>
          </li>
        ))}
      </ul>
    </LeftMenuBlock>
  );
};

export default LeftMenu;
