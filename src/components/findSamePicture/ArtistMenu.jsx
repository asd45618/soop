import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeCurrentArtist } from "../../store/artist";

const ArtistMenuBlock = styled.div`
  width: 320px;
  text-align: left;
  margin-top: 50px;
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

const ArtistMenu = ({ setName }) => {
  const data = [
    { name: "GONG YOO", gName: "yoo" },
    { name: "KIM JAE-UCK", gName: "uck" },
    { name: "NAM JOO-HYUK", gName: "hyuk" },
    { name: "SEO HYUN-JIN", gName: "jin" },
    { name: "SUZY", gName: "suzy" },
  ];

  const dispatch = useDispatch();
  const currentArtist = useSelector((state) => state.artists.currentArtist);

  const clickMenu = (val) => {
    dispatch(changeCurrentArtist(val.name));
    setName(val.gName);
  };

  return (
    <ArtistMenuBlock>
      <ul>
        {data.map((val, idx) => (
          <li key={idx}>
            <div
              onClick={() => clickMenu(val)}
              className={val.name === currentArtist ? "on" : ""}
            >
              {val.name}
            </div>
          </li>
        ))}
      </ul>
    </ArtistMenuBlock>
  );
};

export default ArtistMenu;
