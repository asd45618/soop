import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeCurrentArtist } from "../../store/artist";

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
        &.on {
          color: #333;
        }
      }
    }
  }
`;

const LeftMenu = ({ artistData, setCurrentPage }) => {
  const dispatch = useDispatch();
  const currentArtist = useSelector((state) => state.artists.currentArtist);

  const clickMenu = (eName) => {
    dispatch(changeCurrentArtist(eName));
    setCurrentPage(1);
  };

  return (
    <LeftMenuBlock>
      <ul>
        {artistData.map((val, idx) => (
          <li key={idx}>
            <div
              onClick={() => clickMenu(val.eName)}
              className={val.eName === currentArtist ? "on" : ""}
            >
              {val.eName}
            </div>
          </li>
        ))}
      </ul>
    </LeftMenuBlock>
  );
};

export default LeftMenu;
