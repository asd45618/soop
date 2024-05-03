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
`;

const RankingSection = () => {
  const [dbActor, setDbActor] = useState("");
  const [actor, setActor] = useState("");
  const [allNum, setAllNum] = useState([]);
  const [voteNum, setVoteNum] = useState(0);
  const rankingData = [
    {
      img: "/assets/image/artistMainImg1.jpg",
      dbName: "yoo",
      ename: "GONG YOO",
      kname: "공유",
      count: 0,
    },
    {
      img: "/assets/image/artistMainImg2.jpg",
      dbName: "uck",
      ename: "KIM JAE-UCK",
      kname: "김재욱",
      count: 0,
    },
    {
      img: "/assets/image/artistMainImg3.jpg",
      dbName: "hyuk",
      ename: "NAM JOO-HYUK",
      kname: "남주혁",
      count: 0,
    },
    {
      img: "/assets/image/artistMainImg4.jpg",
      dbName: "jin",
      ename: "SEO HYUN-JIN",
      kname: "서현진",
      count: 0,
    },
    {
      img: "/assets/image/artistMainImg5.jpg",
      dbName: "suzy",
      ename: "SUZY",
      kname: "수지",
      count: 0,
    },
  ];

  const now = 60;

  const vote = async () => {
    try {
      const newVoteNum = voteNum + 1;
      await rankingDB.child(dbActor).update({ vote: newVoteNum });
      alert(`${actor}에게 투표가 완료되었습니다.`);
    } catch (error) {
      console.log("오류 : ", error);
    }
  };

  const changeActor = (val) => {
    setDbActor(val.dbName);
    setActor(val.ename);
    setVoteNum(
      parseInt(
        Object.values(
          allNum?.filter((val) => Object.keys(val)[0] === "GONG YOO")[0]
        )
      ) + 1
    );
  };

  useEffect(() => {
    try {
      rankingDB.on("value", (snapshot) => {
        const rankingsObj = snapshot.val();
        const rankingsArr = Object.values(rankingsObj);
        setAllNum(rankingsArr);
      });
    } catch (error) {
      console.error("오류:", error);
    }
  }, []);

  return (
    <RankingSectionBlock className="row">
      {rankingData.map((val, idx) => (
        <Card
          border="secondary"
          style={{ width: "100%" }}
          key={idx}
          onClick={() => changeActor(val)}
        >
          <Card.Body>
            <Card.Text>
              <img src={val.img} alt={val.ename} />
            </Card.Text>
          </Card.Body>
          <div className="text">
            <div>{val.kname}(12%)</div>
            <ProgressBar now={now} label={`${now}%`} visuallyHidden />
          </div>
        </Card>
      ))}
      <div>
        <button onClick={vote}>투표하기</button>
      </div>
    </RankingSectionBlock>
  );
};

export default RankingSection;
