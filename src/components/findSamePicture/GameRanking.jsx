import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gameDB } from "../../assets/firebase";

const GameRankingBlock = styled.div`
  margin-top: 50px;
  text-align: center;
  .icon {
    font-size: 52px;
  }
  .time {
    font-size: 24px;
  }
  .rank {
    margin-top: 30px;
    text-align: left;
  }
`;

const GameRanking = ({ time, name }) => {
  const [rank, setRank] = useState([]); // [{userName: "", time: 00},{},{}]

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    try {
      gameDB.on("value", (snapshot) => {
        const gamesObj = snapshot.val();
        const gamesArr = Object.values(gamesObj);
        const sortedData = [...gamesArr].sort((a, b) => a.newRank - b.newRank);
        setRank(sortedData);
      });
    } catch (error) {
      console.error("오류:", error);
    }
  }, []);

  return (
    <GameRankingBlock>
      <div className="icon">
        <FontAwesomeIcon icon={faStopwatch} />
      </div>
      <div className="time">{formatTime(time)}</div>
      <div className="rank">
        {rank
          .filter((val) => val.artistName === name)
          .slice(0, 3)
          .map((item, idx) => (
            <div key={idx}>
              {idx + 1}등 {formatTime(item.newRank)} {item.userName}
            </div>
          ))}
      </div>
    </GameRankingBlock>
  );
};

export default GameRanking;
