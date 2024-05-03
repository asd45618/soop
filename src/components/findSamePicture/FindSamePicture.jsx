import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FindSamePictureBlock = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto 100px;
  width: 800px;
  .img__wrapper {
    flex: 0 0 25%;
    height: 200px;
    margin: 10px 0;
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
    button {
      padding: 20px;
      background: #669933;
      color: #fff;
    }
  }
`;

const FindSamePicture = ({ data }) => {
  const [shuffledImages, setShuffledImages] = useState([...data]);
  const [visibleBtn, steVisibleBtn] = useState(true);
  const [start, setStart] = useState(false);

  const startBtn = () => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
    setStart(true);
    steVisibleBtn(false);
    setTimeout(() => setStart(false), 3000);
  };

  return (
    <FindSamePictureBlock className="row">
      {shuffledImages.map((val, idx) => (
        <div className="img__wrapper" key={idx}>
          <img
            src={start ? val.img : "/assets/image/beforeGameStart.png"}
            alt={val.img}
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
