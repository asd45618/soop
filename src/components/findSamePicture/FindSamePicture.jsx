import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gameDB } from "../../assets/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FindSamePictureBlock = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 50px 150px 100px;
  width: 800px;
  .img__wrapper {
    flex: 0 0 25%;
    height: 200px;
    margin: 10px 0;
    text-align: center;
    img {
      height: 100%;
      cursor: pointer;
    }
  }
  .btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    button {
      padding: 20px;
      background: #669933;
      color: #fff;
    }
  }
`;

const FindSamePicture = ({
  data,
  counterStart,
  intervalRef,
  time,
  setTime,
  name,
}) => {
  const [shuffledImages, setShuffledImages] = useState([...data]);
  const [visibleBtn, setVisibleBtn] = useState(true);
  const [start, setStart] = useState(false);
  const [imgClick, setImgClick] = useState(false);
  const [clickedIndexes, setClickedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);

  const userName = useSelector((state) => state.members.user);

  const navigate = useNavigate();

  const startBtn = () => {
    if (userName) {
      setShuffledImages([]);
      setClickedIndexes([]);
      setMatchedIndexes([]);
      const shuffled = [...data].sort(() => Math.random() - 0.5);
      setShuffledImages(shuffled);
      setStart(true);
      setVisibleBtn(false);
      setTime(0);
      setTimeout(() => {
        setStart(false);
        setImgClick(true);
        counterStart();
      }, 3000);
    } else {
      alert("로그인을 해주세요.");
      navigate("/login");
    }
  };

  const handleClick = (idx) => {
    if (
      clickedIndexes.length < 2 &&
      !clickedIndexes.includes(idx) &&
      !matchedIndexes.includes(idx) &&
      imgClick
    )
      setClickedIndexes([...clickedIndexes, idx]);
  };

  useEffect(() => {
    if (clickedIndexes.length === 2) {
      const [firstIndex, secondIndex] = clickedIndexes;
      if (shuffledImages[firstIndex].img === shuffledImages[secondIndex].img) {
        // 일치하는 경우
        setMatchedIndexes([...matchedIndexes, firstIndex, secondIndex]);
        setClickedIndexes([]);
      } else {
        // 불일치하는 경우
        setTimeout(() => {
          setClickedIndexes([]);
        }, 1000);
      }
    }
  }, [clickedIndexes, matchedIndexes, shuffledImages]);

  useEffect(() => {
    if (matchedIndexes.length === data.length) {
      // 모든 사진을 다 맞췄을 때
      setVisibleBtn(true);
      setImgClick(false);
      clearInterval(intervalRef.current);
      gameDB.push({
        userName: userName.name,
        newRank: time,
        artistName: name,
      });
    }
  }, [matchedIndexes]);

  return (
    <FindSamePictureBlock className="row">
      {shuffledImages.map((val, idx) => (
        <div className="img__wrapper" key={idx}>
          <img
            src={
              start ||
              matchedIndexes.includes(idx) ||
              clickedIndexes.includes(idx)
                ? val.img
                : "/assets/image/beforeGameStart.png"
            }
            alt={val.img}
            onClick={() => handleClick(idx)}
          />
        </div>
      ))}
      {visibleBtn ? (
        <div className="btn">
          <button onClick={startBtn}>시작하기</button>
        </div>
      ) : (
        ""
      )}
    </FindSamePictureBlock>
  );
};

export default FindSamePicture;
