import React, { useState } from "react";
import Title from "../components/layout/Title";
import FindSamePicture from "@/components/findSamePicture/FindSamePicture.jsx";
import ArtistMenu from "../components/findSamePicture/ArtistMenu";
import styled from "styled-components";
import GameRanking from "../components/findSamePicture/GameRanking";

const FindSamePictureViewBlock = styled.div`
  .main {
    width: 1700px;
    margin: 0 auto;
    display: flex;
  }
`;

const FindSamePictureView = () => {
  const data = {
    yoo: [
      { img: "/assets/image/yooGame1.webp", eName: "Gong YOO" },
      { img: "/assets/image/yooGame2.webp", eName: "Gong YOO" },
      { img: "/assets/image/yooGame3.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame4.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame5.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame6.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame7.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame8.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame1.webp", eName: "Gong YOO" },
      { img: "/assets/image/yooGame2.webp", eName: "Gong YOO" },
      { img: "/assets/image/yooGame3.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame4.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame5.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame6.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame7.jpg", eName: "Gong YOO" },
      { img: "/assets/image/yooGame8.jpg", eName: "Gong YOO" },
    ],
    uck: [
      { img: "/assets/image/uckGame1.jpg" },
      { img: "/assets/image/uckGame2.jpg" },
      { img: "/assets/image/uckGame3.jpg" },
      { img: "/assets/image/uckGame4.jpg" },
      { img: "/assets/image/uckGame5.jpg" },
      { img: "/assets/image/uckGame6.jpg" },
      { img: "/assets/image/uckGame7.jpg" },
      { img: "/assets/image/uckGame8.jpg" },
      { img: "/assets/image/uckGame1.jpg" },
      { img: "/assets/image/uckGame2.jpg" },
      { img: "/assets/image/uckGame3.jpg" },
      { img: "/assets/image/uckGame4.jpg" },
      { img: "/assets/image/uckGame5.jpg" },
      { img: "/assets/image/uckGame6.jpg" },
      { img: "/assets/image/uckGame7.jpg" },
      { img: "/assets/image/uckGame8.jpg" },
    ],
    hyuk: [
      { img: "/assets/image/hyukGame1.jpg" },
      { img: "/assets/image/hyukGame2.jpg" },
      { img: "/assets/image/hyukGame3.jpg" },
      { img: "/assets/image/hyukGame4.jpg" },
      { img: "/assets/image/hyukGame5.jpg" },
      { img: "/assets/image/hyukGame6.jpg" },
      { img: "/assets/image/hyukGame7.jpg" },
      { img: "/assets/image/hyukGame8.jpg" },
      { img: "/assets/image/hyukGame1.jpg" },
      { img: "/assets/image/hyukGame2.jpg" },
      { img: "/assets/image/hyukGame3.jpg" },
      { img: "/assets/image/hyukGame4.jpg" },
      { img: "/assets/image/hyukGame5.jpg" },
      { img: "/assets/image/hyukGame6.jpg" },
      { img: "/assets/image/hyukGame7.jpg" },
      { img: "/assets/image/hyukGame8.jpg" },
    ],
    jin: [
      { img: "/assets/image/jinGame1.jpg" },
      { img: "/assets/image/jinGame2.jpg" },
      { img: "/assets/image/jinGame3.jpg" },
      { img: "/assets/image/jinGame4.jpg" },
      { img: "/assets/image/jinGame5.jpg" },
      { img: "/assets/image/jinGame6.jpg" },
      { img: "/assets/image/jinGame7.jpg" },
      { img: "/assets/image/jinGame8.jpg" },
      { img: "/assets/image/jinGame1.jpg" },
      { img: "/assets/image/jinGame2.jpg" },
      { img: "/assets/image/jinGame3.jpg" },
      { img: "/assets/image/jinGame4.jpg" },
      { img: "/assets/image/jinGame5.jpg" },
      { img: "/assets/image/jinGame6.jpg" },
      { img: "/assets/image/jinGame7.jpg" },
      { img: "/assets/image/jinGame8.jpg" },
    ],
    suzy: [
      { img: "/assets/image/suzyGame1.png" },
      { img: "/assets/image/suzyGame2.jpg" },
      { img: "/assets/image/suzyGame3.jpg" },
      { img: "/assets/image/suzyGame4.jpg" },
      { img: "/assets/image/suzyGame5.jpg" },
      { img: "/assets/image/suzyGame6.jpg" },
      { img: "/assets/image/suzyGame7.jpg" },
      { img: "/assets/image/suzyGame8.jpg" },
      { img: "/assets/image/suzyGame1.png" },
      { img: "/assets/image/suzyGame2.jpg" },
      { img: "/assets/image/suzyGame3.jpg" },
      { img: "/assets/image/suzyGame4.jpg" },
      { img: "/assets/image/suzyGame5.jpg" },
      { img: "/assets/image/suzyGame6.jpg" },
      { img: "/assets/image/suzyGame7.jpg" },
      { img: "/assets/image/suzyGame8.jpg" },
    ],
  };

  const [name, setName] = useState("yoo");

  return (
    <FindSamePictureViewBlock>
      <Title title="같은 그림 찾기" />
      <div className="main">
        <ArtistMenu setName={setName} />
        <FindSamePicture data={data[name]} />
        <GameRanking />
      </div>
    </FindSamePictureViewBlock>
  );
};

export default FindSamePictureView;
