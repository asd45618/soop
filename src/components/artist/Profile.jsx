import React from "react";
import styled from "styled-components";

const ProfileBlock = styled.div`
  .profile__img {
    width: 576px;
    height: 725px;
    .profile__img__img {
    }
    .profile__img__sns {
    }
  }
`;

const Profile = ({ currentArtistData }) => {
  console.log(currentArtistData);

  const snsBtn = (val) => {
    if (Object.keys(val)[0] === "korea") {
      return "Korea official fancafe";
    } else if (Object.keys(val)[0] === "japan") {
      return "Japan official fancafe";
    } else if (Object.keys(val)[0] === "insta") {
      return "Instagram";
    } else if (Object.keys(val)[0] === "youtube") {
      return "Youtube";
    }
  };

  return (
    <ProfileBlock>
      <div className="profile__img">
        <div className="profile__img__img">
          <img src={currentArtistData.mainPhoto} alt="" />
        </div>
        <div className="profile__img__sns">
          <ul>
            {Object.keys(currentArtistData.sns).length
              ? currentArtistData.sns.map((val, idx) => (
                  <li key={idx}>
                    <a href={Object.values(val)} target="_blank">
                      {snsBtn(val)}
                    </a>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
      <div className="profile__info"></div>
    </ProfileBlock>
  );
};

export default Profile;
