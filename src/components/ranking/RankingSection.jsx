import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { rankingDB } from "../../assets/firebase";

const RankingSectionBlock = styled.div`
  margin-bottom: 100px;
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
    &.on {
      background: rgba(0, 0, 0, 0.3);
    }
    .card-body {
      flex: 0 0 20%;
      .card-text {
        width: 8rem;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 0 0 80%;
      width: 70%;
      .progress {
      }
    }
  }
  .btn {
    button {
      padding: 10px;
      background: #669933;
      color: #fff;
    }
  }
`;

const RankingSection = () => {
  const [dbActor, setDbActor] = useState("");
  const [actor, setActor] = useState("GONG YOO");
  const [allNum, setAllNum] = useState([]);
  const [voteNum, setVoteNum] = useState(0);
  const [allVote, setAllVote] = useState(0);

  const vote = async () => {
    try {
      const newVoteNum = voteNum + 1;
      const newAllVote = allVote + 1;
      await rankingDB.child(dbActor).update({ vote: newVoteNum });
      await rankingDB.child("allVote").update({ allVote: newAllVote });
      alert(`${actor}에게 투표가 완료되었습니다.`);
      setDbActor("");
    } catch (error) {
      console.log("오류 : ", error);
    }
  };

  const changeActor = (val) => {
    setDbActor(val.dbName);
    setActor(val.ename);
  };

  useEffect(() => {
    try {
      rankingDB.on("value", (snapshot) => {
        const rankingsObj = snapshot.val();
        const rankingsArr = Object.values(rankingsObj);
        setVoteNum(
          parseInt(rankingsArr.filter((val) => val.ename === actor)[0].vote)
        );
        setAllNum(rankingsArr);
        setAllVote(parseInt(rankingsArr[0].allVote));
      });
    } catch (error) {
      console.error("오류:", error);
    }
  }, []);

  useEffect(() => {
    try {
      rankingDB.on("value", (snapshot) => {
        const rankingsObj = snapshot.val();
        const rankingsArr = Object.values(rankingsObj);
        setVoteNum(
          parseInt(rankingsArr.filter((val) => val.ename === actor)[0].vote)
        );
        setAllNum(rankingsArr);
        setAllVote(parseInt(rankingsArr[0].allVote));
      });
    } catch (error) {
      console.error("오류:", error);
    }
  }, [actor]);

  return (
    <RankingSectionBlock className="row">
      {allNum
        ?.filter((val) => Object.keys(val).includes("dbName"))
        .sort((first, second) => {
          return second.vote - first.vote;
        })
        .map((val, idx) => (
          <Card
            border="secondary"
            style={{ width: "100%" }}
            key={idx}
            onClick={() => changeActor(val)}
            className={dbActor === val.dbName ? "on" : ""}
          >
            <Card.Body>
              <Card.Text>
                <img src={val.img} alt={val.ename} />
              </Card.Text>
            </Card.Body>
            <div className="text">
              <div>
                {val.kname}(
                {Math.round(
                  (allNum.filter((item) => item.ename === val.ename)[0].vote /
                    allVote) *
                    100
                )}
                %)
              </div>
              <ProgressBar
                now={Math.round(
                  (allNum.filter((item) => item.ename === val.ename)[0].vote /
                    allVote) *
                    100
                )}
                label={`${Math.round(
                  (allNum.filter((item) => item.ename === val.ename)[0].vote /
                    allVote) *
                    100
                )}%`}
                visuallyHidden
              />
            </div>
          </Card>
        ))}
      <div className="btn">
        <button onClick={vote}>투표하기</button>
      </div>
    </RankingSectionBlock>
  );
};

export default RankingSection;
