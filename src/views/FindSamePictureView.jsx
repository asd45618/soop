import React, { useState } from "react";
import Title from "../components/layout/Title";
import FindSamePicture from "@/components/findSamePicture/FindSamePicture.jsx";

const FindSamePictureView = () => {
  const data = {
    yoo: [
      { img: "/assets/image/yooGame1.webp" },
      { img: "/assets/image/yooGame2.webp" },
      { img: "/assets/image/yooGame3.jpg" },
      { img: "/assets/image/yooGame4.jpg" },
      { img: "/assets/image/yooGame5.jpg" },
      { img: "/assets/image/yooGame6.jpg" },
      { img: "/assets/image/yooGame7.jpg" },
      { img: "/assets/image/yooGame8.jpg" },
      { img: "/assets/image/yooGame1.webp" },
      { img: "/assets/image/yooGame2.webp" },
      { img: "/assets/image/yooGame3.jpg" },
      { img: "/assets/image/yooGame4.jpg" },
      { img: "/assets/image/yooGame5.jpg" },
      { img: "/assets/image/yooGame6.jpg" },
      { img: "/assets/image/yooGame7.jpg" },
      { img: "/assets/image/yooGame8.jpg" },
    ],
    uck: [
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
    ],
    hyuk: [
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
    ],
    jin: [
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
    ],
    suzy: [
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로1" },
      { img: "경로2" },
      { img: "경로1" },
      { img: "경로1" },
    ],
  };

  const [name, setName] = useState("yoo");

  return (
    <div>
      <Title title="같은 그림 찾기" />
      <FindSamePicture data={data[name]} />
    </div>
  );
};

export default FindSamePictureView;
