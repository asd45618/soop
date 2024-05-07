import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const GameRankingBlock = styled.div`
  display: flex;
  .icon {
  }
  .time {
  }
  .rank {
  }
`;

const GameRanking = () => {
  return (
    <GameRankingBlock>
      <div className="icon">
        <FontAwesomeIcon icon={faStopwatch} />
      </div>
      <div className="time"></div>
      <div className="rank"></div>
    </GameRankingBlock>
  );
};

export default GameRanking;
