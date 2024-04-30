import React, { useState } from "react";
import LeftMenu from "../components/artist/LeftMenu";
import styled from "styled-components";
import Profile from "../components/artist/Profile";
import Photo from "../components/artist/Photo";
import Video from "../components/artist/Video";
import Pagination from "../components/layout/Pagination";
import { useSelector } from "react-redux";

const ArtistViewBlock = styled.div`
  text-align: center;
  .artist__wrapper {
    width: 1700px;
    margin: 0 auto;
    .top__border {
      width: 92px;
      height: 3px;
      font-size: 0px;
      line-height: 0px;
      background: #1b1b1b;
      display: inline-block;
      margin-top: 80px;
    }
    h2 {
      font-size: 30px;
      color: #333;
      font-weight: 500;
      margin: 12px 0 90px;
      strong {
        color: #669933;
        font-weight: 600;
      }
    }
    .info {
      display: flex;
      .pagination__view {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
const ArtistView = () => {
  const [lang, setLang] = useState("kor");
  const [screen, setScreen] = useState("profile");
  const [currentPage, setCurrentPage] = useState(1);
  const photoItemsPerPage = 24;
  const videoItemsPerPage = 12;
  const currentArtist = useSelector((state) => state.artists.currentArtist);

  const artistData = [
    {
      mainPhoto: "/assets/image/artistMainImg1.jpg",
      kName: "공유",
      eName: "GONG YOO",
      birth: "1979.7.10",
      height: "184cm",
      kdebut: "드라마 학교4 (KBS, 2001)",
      edebut: "School 4 (KBS, 2001)",
      kworks: [
        {
          영화: "동갑내기 과외하기(2003) 그녀를 모르면 간첩(2004) 슈퍼스타 감사용(2004) S다이어리(2004) 잠복근무(2005) 용이 간다(2007) 김종욱 찾기(2010) 도가니(2011) 용의자(2013) 남과 여(2016) 부산행(2016) 밀정(2016) 82년생 김지영(2019) 서복(2021)",
        },
        {
          드라마:
            "학교4(KBS, 2001) 언제나 두근두근(KBS, 2002) 거침없는 사랑(KBS, 2002) 스무살(SBS, 2003) 스크린(SBS,2003) 건빵선생과 별사탕(SBS, 2005) 어느 멋진 날(MBC, 2006) 커피 프린스 1호점(MBC, 2007) 빅(KBS, 2012) 도깨비(tvN, 2016) 고요의 바다(Netflix,2021) 트렁크(Netflix)",
        },
        { TV방송: "음악캠프(MBC, 2004)" },
        {
          수상내역:
            "제53회 백상예술대상 TV부문 남자 최우수연기상(2017) 제48회 납세자의 날 모범납세자 대통령표창(2014) 제32회 청룡영화제 인기스타상(2011) MBC 연기대상 우수상(2007) MBC 연기대상 미니시리즈 연기상(2006) SBS 연기대상 뉴스타상(2003)",
        },
        {
          기타: "국세청 홍보대사(2014) 유니세프 한국위원회 아동권리협약대표(2013~)",
        },
      ],
      eworks: [
        {
          Movie:
            "My Tutor Friend (2003) Spy Girl (2004) Superstar Mr. Gam (2004) S Diary (2004) She's on Duty (2005) Like a Dragon (2007) Finding Mr. Destiny (2010) Silenced (2011) The Suspect (2013) A man and A woman(2016) Train to Busan(2016) The Age of Shadows(2016) SeoBok(2021)",
        },
        {
          Drama:
            "School 4 (KBS, 2001) Whenever the Heart Beats (KBS, 2002) Hard Love (KBS, 2002) 20 Years (SBS, 2003) Screen (SBS, 2003) Biscuit Teacher and Star Candy (SBS, 2005) One Fine Day (MBC, 2006) The 1st Shop of Coffee Prince (MBC, 2007) Big (KBS, 2012) Goblin(2016) The Silent Sea(Netflix, 2021)",
        },
        {
          TVSHow: "Music Camp (MBC, 2004)",
        },
        {
          Award:
            "	53th Baeksang Arts Awards - Best Actor (TV) (2017) 48th Day of Tax Payers - A Presidential Commendation for an exemplary Taxpayer (2014) 32th Blue Dragon Film Awards - Popular Star Award (2011) MBC Drama Awards - Excellence Award, Actor (2007) MBC Drama Awards - Excellence Award, Actor in a Miniseries (2006) SBS Drama Awards - New Star Award (2003)",
        },
        {
          Etc: "	National Tax Service Honorary Ambassador(2014) Korean Committee for UNICEF - Special Representative of the Rights of the Children(2013~)",
        },
      ],
      sns: [
        {
          korea: "https://cafe.daum.net/gongyoo",
        },
        {
          japan: "https://gong-yoo.jp/",
        },
        {
          insta: "https://www.instagram.com/gongyoo_official/",
        },
      ],
      photo: [
        "/assets/image/artistPhoto1.webp",
        "/assets/image/artistPhoto2.webp",
        "/assets/image/artistPhoto3.jpg",
        "/assets/image/artistPhoto4.jpg",
        "/assets/image/artistPhoto5.jpg",
        "/assets/image/artistPhoto6.jpg",
        "/assets/image/artistPhoto1.webp",
        "/assets/image/artistPhoto2.webp",
        "/assets/image/artistPhoto3.jpg",
        "/assets/image/artistPhoto4.jpg",
        "/assets/image/artistPhoto5.jpg",
        "/assets/image/artistPhoto6.jpg",
        "/assets/image/artistPhoto1.webp",
        "/assets/image/artistPhoto2.webp",
        "/assets/image/artistPhoto3.jpg",
        "/assets/image/artistPhoto4.jpg",
        "/assets/image/artistPhoto5.jpg",
        "/assets/image/artistPhoto6.jpg",
        "/assets/image/artistPhoto1.webp",
        "/assets/image/artistPhoto2.webp",
        "/assets/image/artistPhoto3.jpg",
        "/assets/image/artistPhoto4.jpg",
        "/assets/image/artistPhoto5.jpg",
        "/assets/image/artistPhoto6.jpg",
        "/assets/image/uckMainImg1.jpg",
        "/assets/image/uckMainImg2.jpg",
        "/assets/image/uckMainImg3.jpg",
        "/assets/image/uckMainImg4.jpg",
        "/assets/image/uckMainImg5.jpg",
        "/assets/image/uckMainImg6.jpg",
        "/assets/image/uckMainImg1.jpg",
        "/assets/image/uckMainImg2.jpg",
        "/assets/image/uckMainImg3.jpg",
        "/assets/image/uckMainImg4.jpg",
        "/assets/image/uckMainImg5.jpg",
        "/assets/image/uckMainImg6.jpg",
        "/assets/image/uckMainImg1.jpg",
        "/assets/image/uckMainImg2.jpg",
        "/assets/image/uckMainImg3.jpg",
        "/assets/image/uckMainImg4.jpg",
        "/assets/image/uckMainImg5.jpg",
        "/assets/image/uckMainImg6.jpg",
        "/assets/image/uckMainImg1.jpg",
        "/assets/image/uckMainImg2.jpg",
        "/assets/image/uckMainImg3.jpg",
        "/assets/image/uckMainImg4.jpg",
        "/assets/image/uckMainImg5.jpg",
        "/assets/image/uckMainImg6.jpg",
      ],
      video: [
        {
          img: "/assets/image/yooVideoImg1.jpg",
          url: "https://www.youtube.com/embed/whGHlASdjYU?si=gHZmnbnZ6hzs-NTE",
          text: "[KANU] 카누 워케이션 카페 (60s) ...",
        },
        {
          img: "/assets/image/yooVideoImg2.jpg",
          url: "https://www.youtube.com/embed/KXKLTopoDg4?si=x7-nNu1ieo6cidi3",
          text: "[숲메이킹] TOM FORD BEAUTY Making ...",
        },
        {
          img: "/assets/image/yooVideoImg3.jpg",
          url: "https://www.youtube.com/embed/eNB0sgm0698?si=Lj87CmiKbxoJAxeD",
          text: "[숲메이킹] SK Enmove Making film ...",
        },
        {
          img: "/assets/image/yooVideoImg4.jpg",
          url: "https://www.youtube.com/embed/9-YV03gmy1c?si=pxGuQ3-HJP3eu-aS",
          text: "[숲메이킹] TERRA Making film ...",
        },
        {
          img: "/assets/image/yooVideoImg1.jpg",
          url: "https://www.youtube.com/embed/whGHlASdjYU?si=gHZmnbnZ6hzs-NTE",
          text: "[KANU] 카누 워케이션 카페 (60s) ...",
        },
        {
          img: "/assets/image/yooVideoImg2.jpg",
          url: "https://www.youtube.com/embed/KXKLTopoDg4?si=x7-nNu1ieo6cidi3",
          text: "[숲메이킹] TOM FORD BEAUTY Making ...",
        },
        {
          img: "/assets/image/yooVideoImg3.jpg",
          url: "https://www.youtube.com/embed/eNB0sgm0698?si=Lj87CmiKbxoJAxeD",
          text: "[숲메이킹] SK Enmove Making film ...",
        },
        {
          img: "/assets/image/yooVideoImg4.jpg",
          url: "https://www.youtube.com/embed/9-YV03gmy1c?si=pxGuQ3-HJP3eu-aS",
          text: "[숲메이킹] TERRA Making film ...",
        },
        {
          img: "/assets/image/yooVideoImg1.jpg",
          url: "https://www.youtube.com/embed/whGHlASdjYU?si=gHZmnbnZ6hzs-NTE",
          text: "[KANU] 카누 워케이션 카페 (60s) ...",
        },
        {
          img: "/assets/image/yooVideoImg2.jpg",
          url: "https://www.youtube.com/embed/KXKLTopoDg4?si=x7-nNu1ieo6cidi3",
          text: "[숲메이킹] TOM FORD BEAUTY Making ...",
        },
        {
          img: "/assets/image/yooVideoImg3.jpg",
          url: "https://www.youtube.com/embed/eNB0sgm0698?si=Lj87CmiKbxoJAxeD",
          text: "[숲메이킹] SK Enmove Making film ...",
        },
        {
          img: "/assets/image/yooVideoImg4.jpg",
          url: "https://www.youtube.com/embed/9-YV03gmy1c?si=pxGuQ3-HJP3eu-aS",
          text: "[숲메이킹] TERRA Making film ...",
        },
        {
          img: "/assets/image/uckVideoImg1.jpg",
          url: "https://www.youtube.com/embed/kqQXDVbn0l8?si=Cw3FZrZXyef0HG5e",
          text: "[파과] 2024 창작 뮤지컬 #파과 HIGHLIGHT ...",
        },
        {
          img: "/assets/image/uckVideoImg2.jpg",
          url: "https://www.youtube.com/embed/q9QzkuD8u-Y?si=2cAgaP4ZOV0ZSaKx",
          text: "극과 극 매력의 테스토스테론 폭발 현장 │ 재친구 Ep ...",
        },
        {
          img: "/assets/image/uckVideoImg3.jpg",
          url: "https://www.youtube.com/embed/JIX0uXlYUX0?si=N0eoBnbp65WGWTDy",
          text: "[숲메이킹] 사연있는 나쁜 남자, 킬러 '투우' 로 돌 ...",
        },
        {
          img: "/assets/image/uckVideoImg4.jpg",
          url: "https://www.youtube.com/embed/5Hb3kXyl1Nw?si=wVYgbCcQoL9HB_eN",
          text: "왜 이렇게 냉장고에 진심인데.. ...",
        },
      ],
    },
    {
      mainPhoto: "/assets/image/artistMainImg2.jpg",
      kName: "김재욱",
      eName: "KIM JAE-UCK",
      birth: "1983.4.2",
      height: "183cm",
      kdebut: "",
      edebut: "",
      kworks: [
        {
          영화: "서양골동양과자점-앤티크(2008) 쎄시봉(2015) 플랑크상수(2015) 두 개의 연애(2016) 덕혜옹주(2016) 다른 길이 있다(2017) 나비잠(2018)",
        },
        {
          드라마:
            "네 멋대로 해라(MBC, 2002) 커피프린스 1호점(MBC, 2007) 달자의 봄(KBS, 2007) 바람의 나라(KBS, 2008) 나쁜남자(SBS, 2010) 메리는 외박중(KBS, 2010) 피그말리온의 사랑(일본 Bee TV, 2010) 후아유(tvN, 2013) 감격시대(KBS, 2014) 보이스(OCN, 2017) 사랑의 온도(SBS, 2017), 손 : the guest(OCN, 2018) 그녀의 사생활(tvN, 2019) 크레이지 러브(KBS2, 2022) 이재, 곧 죽습니다(TVING, 2023) 탄금(Netflix, 2023)",
        },
        {
          공연: "헤드윅(2011), 아마데우스(2018), 파과(2024)",
        },
        {
          뮤직비디오:
            "디어클라우드-얼음요새(2007) 딕펑스-Special(2019) 수민 - OO DA DA(우다다)(2019)",
        },
        {
          음악: "밴드 월러스 활동 (2011, 2014)",
        },
        {
          수상내역:
            "제4회 아시아 모델 페스티벌 어워즈 '모델' 특별상 (2009) 제16회 대한민국 문화연예대상 영화배우 신인상 (2008) 코리아 드라마 페스티벌 인기상 (2007)",
        },
      ],
      eworks: [
        {
          Movie:
            "Antique(2008) C'est Si Bon (2015) Planck Constant (2015) Two Rooms, Two Nights(2015) The Last Princess (2016) Another Way(2017) Butterfly Sleep (2018)",
        },
        {
          Drama:
            "Ruler of Your Own World (MBC, 2002) The 1st Shop of Coffee Prince (MBC, 2007) Dalja's Spring(KBS, 2007) The Kingdom of The Winds(KBS, 2008) badguy(SBS, 2010) Mary Stayed Out All Night(KBS, 2010) Pygmalionlove(japan Bee tv, 2010) Who are you?(tvN, 2013) Inspiring Generation(KBS, 2014) Voice(2017) Temperature of Love(SBS, 2017) The Guest(OCN, 2018) Her Private Life(tvN, 2019) Crazy Love(KBS2, 2022) Death's Game(TVING,2023)",
        },
        {
          Theater: "Hedwig and the Angry Inch(2011), Amadeus(2018)",
        },
        {
          MusicVideo:
            "Dear Cloud - Ice fortress(2007) DICKPUNKS - Special(2019) SUMIN - OO DA DA(2019)",
        },
        {
          Music: "band Walrus(2011, 2014)",
        },
      ],
      sns: [
        {
          insta: "https://www.instagram.com/jaeuck.kim/",
        },
        {
          japan: "https://ticket.pia.jp/piasp/fc/kimjaeuck_close.jsp",
        },
      ],
      photo: [
        "/assets/image/uckMainImg1.jpg",
        "/assets/image/uckMainImg2.jpg",
        "/assets/image/uckMainImg3.jpg",
        "/assets/image/uckMainImg4.jpg",
        "/assets/image/uckMainImg5.jpg",
        "/assets/image/uckMainImg6.jpg",
        "/assets/image/uckMainImg1.jpg",
        "/assets/image/uckMainImg2.jpg",
        "/assets/image/uckMainImg3.jpg",
        "/assets/image/uckMainImg4.jpg",
        "/assets/image/uckMainImg5.jpg",
        "/assets/image/uckMainImg6.jpg",
        "/assets/image/uckMainImg1.jpg",
        "/assets/image/uckMainImg2.jpg",
        "/assets/image/uckMainImg3.jpg",
        "/assets/image/uckMainImg4.jpg",
        "/assets/image/uckMainImg5.jpg",
        "/assets/image/uckMainImg6.jpg",
        "/assets/image/uckMainImg1.jpg",
        "/assets/image/uckMainImg2.jpg",
        "/assets/image/uckMainImg3.jpg",
        "/assets/image/uckMainImg4.jpg",
        "/assets/image/uckMainImg5.jpg",
        "/assets/image/uckMainImg6.jpg",
        "/assets/image/artistPhoto1.webp",
        "/assets/image/artistPhoto2.webp",
        "/assets/image/artistPhoto3.jpg",
        "/assets/image/artistPhoto4.jpg",
        "/assets/image/artistPhoto5.jpg",
        "/assets/image/artistPhoto6.jpg",
        "/assets/image/artistPhoto1.webp",
        "/assets/image/artistPhoto2.webp",
        "/assets/image/artistPhoto3.jpg",
        "/assets/image/artistPhoto4.jpg",
        "/assets/image/artistPhoto5.jpg",
        "/assets/image/artistPhoto6.jpg",
        "/assets/image/artistPhoto1.webp",
        "/assets/image/artistPhoto2.webp",
        "/assets/image/artistPhoto3.jpg",
        "/assets/image/artistPhoto4.jpg",
        "/assets/image/artistPhoto5.jpg",
        "/assets/image/artistPhoto6.jpg",
        "/assets/image/artistPhoto1.webp",
        "/assets/image/artistPhoto2.webp",
        "/assets/image/artistPhoto3.jpg",
        "/assets/image/artistPhoto4.jpg",
        "/assets/image/artistPhoto5.jpg",
        "/assets/image/artistPhoto6.jpg",
      ],
      video: [
        {
          img: "/assets/image/uckVideoImg1.jpg",
          url: "https://www.youtube.com/embed/kqQXDVbn0l8?si=Cw3FZrZXyef0HG5e",
          text: "[파과] 2024 창작 뮤지컬 #파과 HIGHLIGHT ...",
        },
        {
          img: "/assets/image/uckVideoImg2.jpg",
          url: "https://www.youtube.com/embed/q9QzkuD8u-Y?si=2cAgaP4ZOV0ZSaKx",
          text: "극과 극 매력의 테스토스테론 폭발 현장 │ 재친구 Ep ...",
        },
        {
          img: "/assets/image/uckVideoImg3.jpg",
          url: "https://www.youtube.com/embed/JIX0uXlYUX0?si=N0eoBnbp65WGWTDy",
          text: "[숲메이킹] 사연있는 나쁜 남자, 킬러 '투우' 로 돌 ...",
        },
        {
          img: "/assets/image/uckVideoImg4.jpg",
          url: "https://www.youtube.com/embed/5Hb3kXyl1Nw?si=wVYgbCcQoL9HB_eN",
          text: "왜 이렇게 냉장고에 진심인데.. ...",
        },
      ],
    },
    {
      mainPhoto: "/assets/image/artistMainImg3.jpg",
      kName: "남주혁",
      eName: "NAM JOO-HYUK",
      birth: "1994.2.22",
      height: "187cm",
      kdebut: "",
      edebut: "",
      kworks: [
        {
          영화: "안시성(2018) 조제(2020) 리멤버(2022)",
        },
        {
          드라마:
            "잉여공주(tvN, 2014) 후아유-학교2015(KBS2, 2015) 화려한 유혹(MBC, 2015) 치즈인더트랩(tvN, 2016) 달의 연인-보보경심 려(SBS, 2016) 역도요정 김복주(MBC, 2016) 하백의 신부(tvN, 2017) 눈이 부시게(JTBC, 2019) 보건교사 안은영(Netflix, 2020) 스타트업(tvN, 2020) 스물다섯 스물하나(tvN, 2022) 비질란테(disney+, 2023)",
        },
        {
          TV방송:
            "학교 다녀오겠습니다(JTBC, 2014) 꽃미남 브로맨스(MBC, 2016) 삼시세끼 고창편(tvN, 2016)",
        },
        {
          뮤직비디오:
            "악동뮤지션 '200%', 'Give Love'(2014) 1415 '흰눈이 오면'(2018)",
        },
        {
          수상내역:
            "제10회 올해의 영화상 신인남우상 (2019) 제39회 청룡영화상 신인남우상 (2018) 제38회 한국영화평론가협회상 신인남우상 (2018) 제2회 더 서울어워즈 영화부문 남우신인상 (2018) 제6회 BIFF 마리끌레르 아시아스타어워즈 라이징 스타상 (2018) 제5회 드라마피버 어워즈 라이징 스타상 (2017) MBC 연기대상 남자 신인상 (2016) KBS 연기대상 남자 인기상 (2015) 제4회 APAN STAR AWARDS 남자 신인상 (2015) 제3회 CFDK 어워즈 남자모델부문 올해의 패션모델상 (2014)",
        },
      ],
      eworks: [
        {
          Movie: "The Great Battle(2018) Josee(2020) Remember(2022)",
        },
        {
          Drama:
            "The Idle Mermaid(tvN, 2014) Who Are You: School 2015(KBS2, 2015) Glamorous Temptation(MBC, 2015) Cheese in the Trap(tvN, 2016) Moon Lovers: Scarlet Heart Ryeo(SBS, 2016) Weightlifting Fairy Kim Bok-joo(MBC, 2016) The Bride of Habaek(tvN, 2017) Dazzling(JTBC, 2019) Health teacher 'An eunyeong'(Netflix, 2019) Startup(tvN, 2020) Twenty five Twenty one(tvN, 2022) Vigilante(disney+, 2023)",
        },
        {
          TVShow:
            "Off to School(JTBC, 2014) Celebrity Bromance(MBC, 2016) Three Meals a Day: Gochang Village(tvN, 2016)",
        },
        {
          MusicVideo:
            "Akdong Musician - 200%, Give Love(2014) Kangnam - Chocolate(2015)",
        },
        {
          Award:
            "	10th KOFRA Film Awards-Best New Actor (2019) 39th Blue Dragon Film Awards-Best New Actor (2018) 38th Korean Association of Film Critics Awards-Best New Actor (2018) 2nd The Seoul Awards-Best New Actor (2018) 6th Marie Claire Asia Star Awards-Rising Star Award (2018) 5th DramaFever Awards-Rising Star Award (2017) 36th MBC Drama Awards-Best New Actor (2016) 29th KBS Drama Awards-Popularity Award, Actor (2015) 4th APAN Star Awards-Best New Actor (2015)",
        },
      ],
      sns: [
        {
          insta: "https://www.instagram.com/skawngur/",
        },
      ],
      photo: [
        "/assets/image/hyukPhoto1.jpg",
        "/assets/image/hyukPhoto2.jpg",
        "/assets/image/hyukPhoto3.jpg",
        "/assets/image/hyukPhoto4.jpg",
        "/assets/image/hyukPhoto5.jpg",
        "/assets/image/hyukPhoto6.jpg",
        "/assets/image/hyukPhoto1.jpg",
        "/assets/image/hyukPhoto2.jpg",
        "/assets/image/hyukPhoto3.jpg",
        "/assets/image/hyukPhoto4.jpg",
        "/assets/image/hyukPhoto5.jpg",
        "/assets/image/hyukPhoto6.jpg",
        "/assets/image/hyukPhoto1.jpg",
        "/assets/image/hyukPhoto2.jpg",
        "/assets/image/hyukPhoto3.jpg",
        "/assets/image/hyukPhoto4.jpg",
        "/assets/image/hyukPhoto5.jpg",
        "/assets/image/hyukPhoto6.jpg",
        "/assets/image/hyukPhoto1.jpg",
        "/assets/image/hyukPhoto2.jpg",
        "/assets/image/hyukPhoto3.jpg",
        "/assets/image/hyukPhoto4.jpg",
        "/assets/image/hyukPhoto5.jpg",
        "/assets/image/hyukPhoto6.jpg",
      ],
      video: [
        {
          img: "/assets/image/hyukVideoImg1.jpg",
          url: "https://www.youtube.com/embed/YkICbMy2cks?si=9hBUqIjkziRZfsYu",
          text: "[비질란테] 스틸 코멘터리 | 디즈니+ ...",
        },
        {
          img: "/assets/image/hyukVideoImg2.jpg",
          url: "https://www.youtube.com/embed/GakGFDikl7k?si=7VgiaSvmJwjcTu_v",
          text: "[비질란테] 7화-8화 메이킹 | 디즈니+ ...",
        },
        {
          img: "/assets/image/hyukVideoImg3.jpg",
          url: "https://www.youtube.com/embed/xrDYHQJYIj4?si=ryqgR49CEt3XpIYd",
          text: "[비질란테] 비하인드 코멘터리 ...",
        },
        {
          img: "/assets/image/hyukVideoImg4.jpg",
          url: "https://www.youtube.com/embed/o-CJ1a7qru4?si=UzeiE3ngA5fHCPqg",
          text: "[비질란테] 5화-6화 메이킹 ...",
        },
      ],
    },
    {
      mainPhoto: "/assets/image/artistMainImg4.jpg",
      kName: "서현진",
      eName: "SEO HYUN-JIN",
      birth: "1985.2.27",
      height: "167cm",
      kdebut: "데뷔 밀크 1집 앨범 With Freshness(2001)",
      edebut: "Milk With Freshness(2001)",
      kworks: [
        {
          영화: "사랑따윈필요없어(2006) 스토리 오브 와인(2008) 유쾌한 도우미(2008) 요술(2010) 창피해(2011) 복숭아 나무(2012) 기억의 조각들-특별출연(2012) 굿바이 싱글(2016) 사랑하기 때문에(2017) 카시오페아(2022)",
        },
        {
          드라마:
            "황진이(KBS, 2006) 히트(MBC, 2007) 짝패(MBC, 2011) 절정(MBC, 2011) 신들의 만찬(MBC, 2012) 오자룡이 간다(MBC, 2012-2013) 불의 여신 정이(MBC, 2013) 드라마페스티벌-불온(MBC, 2013) 제왕의 딸, 수백향(MBC, 2013-2014) 삼총사(tvN, 2014) 식샤를 합시다2(tvN, 2015) 또 오해영(tvN, 2016) 낭만닥터 김사부(SBS, 2016-2017) 사랑의 온도(SBS, 2017) 뷰티 인사이드(JTBC, 2018) 블랙독(tvN, 2019) 너는 나의 봄(2021,tvN) 왜 오수재인가(SBS, 2022) 트렁크(Netflix)",
        },
        {
          TV방송:
            "SNS 원정대-일단 띄워(SBS, 2014) 내 친구와 식샤를 합시다(tvN, 2015)",
        },
        {
          뮤직비디오: "서영은 - 그리움이 내린 나무(2009)",
        },
        {
          음악: "	밀크 1집 'With freshness'(2001) 복숭아 나무 OST-십년이 백년이 지난 후에 제왕의 딸, 수백향 OST Part2-정읍사 식샤를 합시다2 OST Part3-UP&DOWN 또 오해영 OST Part3-사랑이 뭔데 너는 나의 봄 OST Part9-낙화 (다정이 Ver.)",
        },
        {
          수상내역:
            "SBS 연기대상 미니시리즈 장르드라마부문 여자 최우수연기상 (2022) 제53회 납세자의 날 모범 납세자 대통령 표창 (2019) 2017 그리메상 시상식 - 여자 최우수연기상(2017) 제53회 백상예술대상-TV 최우수연기상(2017) SAF SBS 연기대상-우수연기상/10대 스타상/베스트 커플상(2016) tvN10 AWARDS-로코퀸/Made in tvN 제5회 아시아태평양 스타어워즈 - 여자 우수상(2016) 코리아 드라마 어워즈 - 여자우수상(2013) MBC 연기대상 - 연속극부문 여자우수연기상(2012) MBC드라마대상 - 미니시리즈부문 여자신인상(2011)",
        },
        {
          연극: "뮤지컬 사운드 오브 뮤직(2006) 궁(2010) 신데렐라(2015)",
        },
      ],
      eworks: [
        {
          Movie:
            "Love Me Not(2006) Story of Wine(2008) The Madonna(2008) Magic(2010) Life is peachy(2010) The Peachtree(2012) Fragments of Sweet Memories-a cameo part(2012) Familyhood(2016) BECAUSE I LOVE YOU(2017) Cassiopeia(2022)",
        },
        {
          Drama:
            "Hwang Jin Yi(KBS, 2006) H.I.T(MBC, 2007) The Duo(MBC, 2011) The Peak(MBC, 2011) Feast of the Gods(MBC, 2012) Here Comes Mr. Oh(MBC, 2012-2013) Jung Yi, The Goddess of Fire(MBC, 2013) Drama Festival-Rebellious(MBC, 2013) King's Daughter Soo Baek Hyang(MBC, 2013-2014) Three Musketeers(tvN, 2014) Let's Eat (Season 2)(tvN, 2015) Another Oh Hae Young(tvN, 2016) Romantic Doctor, Teacher Kim(SBS, 2016-2017) Temperature of Love(SBS, 2017) The Beauty Inside(JTBC, 2018) BlackDog(tvN, 2019) Why Her(SBS, 2022)",
        },
        {
          TVShow:
            "SNS Expedition (SBS, 2014) Let's Eat with Friends (tvN, 2015)",
        },
        {
          MusicVideo: "Suh Young Eun - A Longing From The Trees (2009)",
        },
        {
          Music:
            "M.I.L.K. First Album 'With freshness'(2001) The Peach Tree OST-After 10 Years 100 Years King's Daughter Soo Baek Hyang OST Part2-Song of Jeongeup Let's Eat (Season 2) OST Part3-UP&DOWN Another Oh Hae Young OST Part3-What Is Love",
        },
        {
          Award:
            "53rd Taxpayers' Day - Presidential Commendation (2019) 30th Grimae Awards - Best Actress (2017) 53rd Baeksang Arts Awards - Best Actress (TV) (2017) 24th SBS Drama Awards - Excellence Award, Actress in a Genre Drama/Top 10 Stars/Best Couple (2016) tvN10 Awards - Romantic-Comedy Queen/Made in tvN 5th APAN Star Awards - Excellence Award, Actress in a Miniseries (2016) 6th Korea Drama Awards - Excellence Award, Actress (2013) 31st MBC Drama Awards - Excellence Award, Actress in a Serial Drama (2012) 30th MBC Drama Awards - Best New Actress in a Miniseries (2011)",
        },
        {
          Theater:
            "Musical - The Sound of Music(2006) Goong: The Musical(2010) Cinderella(2015)",
        },
      ],
      sns: {},
      photo: [
        "/assets/image/jinPhoto1.jpg",
        "/assets/image/jinPhoto2.jpg",
        "/assets/image/jinPhoto3.jpg",
        "/assets/image/jinPhoto4.jpg",
        "/assets/image/jinPhoto5.jpg",
        "/assets/image/jinPhoto6.jpg",
        "/assets/image/jinPhoto1.jpg",
        "/assets/image/jinPhoto2.jpg",
        "/assets/image/jinPhoto3.jpg",
        "/assets/image/jinPhoto4.jpg",
        "/assets/image/jinPhoto5.jpg",
        "/assets/image/jinPhoto6.jpg",
        "/assets/image/jinPhoto1.jpg",
        "/assets/image/jinPhoto2.jpg",
        "/assets/image/jinPhoto3.jpg",
        "/assets/image/jinPhoto4.jpg",
        "/assets/image/jinPhoto5.jpg",
        "/assets/image/jinPhoto6.jpg",
        "/assets/image/jinPhoto1.jpg",
        "/assets/image/jinPhoto2.jpg",
        "/assets/image/jinPhoto3.jpg",
        "/assets/image/jinPhoto4.jpg",
        "/assets/image/jinPhoto5.jpg",
        "/assets/image/jinPhoto6.jpg",
      ],
      video: [
        {
          img: "/assets/image/jinVideoImg1.jpg",
          url: "https://www.youtube.com/embed/Zy192sNxXr0?si=oDw_7k6wMxYiLXGF",
          text: "[LYNN] 2024 Spring Campaign Fi ...",
        },
        {
          img: "/assets/image/jinVideoImg2.jpg",
          url: "https://www.youtube.com/embed/xOzNkU_igaU?si=hFXuuIAjh2aUjWA_",
          text: "[LYNN] 2024 Spring Campaign Fi ...",
        },
        {
          img: "/assets/image/jinVideoImg3.jpg",
          url: "https://www.youtube.com/embed/iHJ2XH0f8ZM?si=41eqoeZva3nqz0V5",
          text: "[LYNN] 2024 Spring Campaign Fi ...",
        },
        {
          img: "/assets/image/jinVideoImg4.jpg",
          url: "https://www.youtube.com/embed/2CBcN7ldwN0?si=yFGtAx72Xji8j_8F",
          text: "[LYNN] 2024 Spring Campaign Fi ...",
        },
      ],
    },
    {
      mainPhoto: "/assets/image/artistMainImg5.jpg",
      kName: "수지",
      eName: "SUZY",
      birth: "1994.10.10",
      height: "168cm",
      kdebut: "미쓰에이 싱글 앨범 [Bad But Good](2010)",
      edebut: "Miss A - Bad But Good(2010)",
      kworks: [
        {
          영화: "안녕(2011) 건축학개론(2012) 도리화가(2015) 백두산(2019) 원더랜드",
        },
        {
          드라마:
            "드림하이(KBS, 2011) 드라마스페셜-휴먼 카지노(KBS, 2011) 빅(KBS, 2012) 구가의 서(MBC, 2013) 함부로 애틋하게(KBS, 2016) 당신이 잠든 사이에(SBS, 2017) 배가본드(SBS, 2019) 스타트업(tvN, 2020) 안나(CoupangPlay, 2022) 이두나!(Netflix, 2023) 다 이루어질지니",
        },
        {
          TV방송:
            "쇼! 음악중심(MBC, 2010-2011) 청춘불패(KBS, 2011-2012) STAR N' the CITY(XtvN, 2012) 오프더레코드,수지(Dingo, 2017)",
        },
        {
          음악: "Miss A - 싱글 'Bad But Good', 싱글 'Step Up' (2010) 드림하이 OST - Part.4 '겨울아이' (2011) Miss A - 1집 'A Class' (2011) 나도 꽃 OST - Part.2 '눈물이 많아서' (2011) 드림하이2 OST - Part.2 'You're My Star' (2012) Miss A - EP 'Touch' (2012) 빅 OST - 그래도 사랑해 (2012) 박진영, 택연, 장우영, 수지 - Classic (2012) Miss A - EP 'Independent Women pt.Ⅲ' (2012) 수지, 윤덕원 - Moment (2012) 구가의 서 OST - Part.5 '나를 잊지말아요' (2013) Miss A - 2집 'Hush' (2013) Miss A - EP 'Colors' (2015) 너를 사랑한 시간 OST Part.5 - 왜 이럴까 (2015) 수지, 백현 - Dream (2016) 함부로 애틋하게 OST - Part.1 'Ring My Bell', Part.15 '좋을땐' (2016) 수지 - EP 'Yes? No?' (2017) 박원, 수지 - 기다리지 말아요 (2017) 당신이 잠든 사이에 OST - Part.4 'I Love You Boy', Part.13 '듣고 싶은 말' (2017) 수지 - EP 'Faces of Love', 싱글 '잘자 내 몫까지(with 이루마)' (2018) 베이빌론, 수지 - 행복해지고 싶어 (2019) 스타트업 OST - Part.14 'My Dear Love' (2020) 수지 - 싱글 'Satellite' (2022) 수지, 강승원 - 널 사랑하니까 (2022) 이상한변호사우영우 OST - 안하기가 쉽지 않아요 (2022) 수지 - 싱글 'Cape' (2022) R U Next? 테마송 - 전속력으로 (2023)",
        },
        {
          수상내역:
            "제18회 서울드라마어워즈 국제경쟁부문 여자연기자상 (2023) 2023 콘텐트아시아어워즈 TV시리즈 여우주연상 (2023) 제2회 청룡시리즈어워즈 여우주연상 (2023) 제21회 디렉터스컷 어워즈 올해의 여자배우상-시리즈 (2023) 제16회 서울드라마어워즈 TV한류드라마 여자배우상 (2021) SBS 연기대상 미니시리즈 여자 최우수연기상(2019) SBS 연기대상 한류콘텐츠상(2019) SBS 연기대상 베스트 커플상(2019) 아시아 아티스트 어워즈 아시아 셀러브리티상(2018) 제54회 백상예술대상 여자 인기상(2018) SBS 연기대상 수목드라마부문 여자 최우수연기상(2017) SBS 연기대상 베스트 커플상(2017) 아시아 아티스트 어워즈 아시아 스타상(2017) 제31회 골든디스크 어워즈 디지털음원부문 본상(2017) Mnet 아시안 뮤직 어워드 베스트 콜라보레이션(2016) 제8회 멜론뮤직어워드 뮤직스타일상 알앤비소울 부문(2016) 아시아 아티스트 어워즈 드라마부문 베스트 스타상(2016) 제52회 백상예술대상 영화부문 여자 인기상(2016) 제52회 백상예술대상 인스타일 베스트 스타일상(2016) 2014 웨이보의 밤 올해의 여신상(2015) MBC 연기대상 미니시리즈부문 여자 최우수연기상(2013) MBC 연기대상 베스트 커플상(2013) 한국광고주대회 광고주가 뽑은 좋은 모델상(2013) 제8회 서울드라마어워즈 한류드라마 여자배우상(2013) 제7회 Mnet 20's Choice 여자 20's 드라마 스타상(2013) KBS 연기대상 여자 인기상(2012) 제11회 KBS 연예대상 쇼오락부문 여자신인상(2012) 제33회 청룡영화상 인기스타상(2012) 제5회 스타일아이콘어워즈 본상(2012) MTN 방송광고페스티벌 여자 CF모델상(2012) 제6회 Mnet 20's Choice 여자 20's 무비스타상(2012) 제48회 백상예술대상 영화부문 여자 신인 연기상(2012) KBS 연기대상 여자신인상(2011) KBS 연기대상 베스트커플상(2011) 제5회 Mnet 20's Choice 핫 뉴스타상(2011)",
        },
      ],
      eworks: [
        {
          Movie:
            "Hi, Bye(2011) Architecture 101(2012) THE SOUND OF A FLOWER(2015) Baekdusan(2019)",
        },
        {
          Drama:
            "Dream High - Season 1(KBS, 2011) Drama Special - Human Casino(KBS, 2011) Big(KBS, 2012) KangChi, The Beginning(MBC, 2013) Uncontrollably Fond(KBS, 2016) While You Were Sleeping(SBS, 2017) vagabond(SBS, 2019) Startup(tvN, 2020), Anna(coupangplay, 2022)",
        },
        {
          TVSHow:
            "show! musiccore(MBC, 2010-2011) Youthinvincibility - Season2(KBS, 2011-2012) STAR N' the CITY(XtvN, 2012) Off the REC. SUZY(dingo, 2017)",
        },
        {
          Music:
            "Miss A - Bad But Good, Step Up(2010) DreamHigh OST - Part.4(2011) Miss A - Love Alone, 1st-A Class(2011) Me Too, Flower! OST - Part.2(2011) DreamHigh season2 OST - Part.2(2012) Miss A - Touch(2012) Big OST - but i love you(2012) JYP - Classic(2012) Miss A - Independent Women pt.Ⅲ(2012) Yoon Dukwon, SUZY - Moment(2012) KangChi, The Beginning OST - Part.5(2013) Miss A - 2nd Hush(2013) Miss A - Colors(2015) The Time We Were Not In Love OST - Part.5(2015) SUZY, BAEK HYUN - Dream(2016) Uncontrollably Fond OST - Part.1, Part.15(2016) SUZY - Yes? No?(2017) ParkWon, SUZY - Don't wait(2017) While You Were Sleeping OST - Part.4, Part.13(2017) SUZY - Faces of love, Good night, Until my share(2018) Startup OST - Part.14 'My Dear Love' (2020) SUZY - Satellite (2022) SUZY, Kang Seungwon - Because I Love You (2022) SUZY - Cape (2022) SUZY - R.U.N (2023)",
        },
        {
          Award:
            "Content Asia Awards 2023 - Best Female (2023) 2nd Blue Dragon Series Awards - Best Actress (2023) 21th Director's Cut Awards - Best Actress (2023) 16th Seoul International Drama Awards - Korean Drama Actress Award (2021) SBS Drama Awards - Top Excellence Award, Actress in a Miniseries (2019) SBS Drama Awards - Best Couple Award (2019) ASIA ARTIST AWARDS - Asia Celabrity Award(2018) 54th Baeksang Arts Awards - Popularity Award(2018) SBS Drama Awards - Best Actress in an arboretum drama(2017) SBS Drama Awards - Best Couple Award(2017) ASIA ARTIST AWARDS - Asia Star Award(2017) 31th GoldenDiscAwards - Digital Music Division the Main Prize(2017) Mnet Asian Music Awards - Best collaboration(2016) 8th Melon Music Awards - Music Style Award R&B/soul Division(2016) ASIA ARTIST AWARDS - Drama Division 'Best Star Award'(2016) 52th Baeksang Arts Awards - Movie Division 'Popularity Award'(2016) 52th Baeksang Arts Awards - Instly Best Stly Award(2016) 2014 Weibo Night Awards - goddess of year Award(2015) MBC Drama Awards - Best Actress in a Miniseries(2013) MBC Drama Awards - Best Couple Award(2013) KAA Awards - Best Model Award(2013) 8th Seoul International Drama Awards - Korean Drama Actress Award(2013) 7th Mnet 20's Choice - Women 20's Drama Star Award(2013) KBS Drama Awards - Popularity Award(2012) 11th KBS enter awards - Show Division Best New women Award(2012) 33th Blue Dragon Awards - Popular Star Award(2012) 5th Style Icon Awards - the Main Prize(2012) MTN adfestival - Women CF Model Award(2012) 6th Mnet 20's Choice - Women 20's Movie Star Award(2012) 48th Baeksang Arts Awards - Movie Division Best New Actoress Award(2012) KBS Drama Awards - Best New Actoress Award(2011) KBS Drama Awards - Best Couple Award(2011) 5th Mnet 20's Choice - Hot New star Award(2011)",
        },
      ],
      sns: [
        { insta: "https://www.instagram.com/skuukzky/" },
        { youtube: "https://www.youtube.com/@suzy5370" },
      ],
      photo: [
        "/assets/image/suzyPhoto1.png",
        "/assets/image/suzyPhoto2.jpg",
        "/assets/image/suzyPhoto3.jpg",
        "/assets/image/suzyPhoto4.jpg",
        "/assets/image/suzyPhoto5.jpg",
        "/assets/image/suzyPhoto6.jpg",
        "/assets/image/suzyPhoto1.png",
        "/assets/image/suzyPhoto2.jpg",
        "/assets/image/suzyPhoto3.jpg",
        "/assets/image/suzyPhoto4.jpg",
        "/assets/image/suzyPhoto5.jpg",
        "/assets/image/suzyPhoto6.jpg",
        "/assets/image/suzyPhoto1.png",
        "/assets/image/suzyPhoto2.jpg",
        "/assets/image/suzyPhoto3.jpg",
        "/assets/image/suzyPhoto4.jpg",
        "/assets/image/suzyPhoto5.jpg",
        "/assets/image/suzyPhoto6.jpg",
        "/assets/image/suzyPhoto1.png",
        "/assets/image/suzyPhoto2.jpg",
        "/assets/image/suzyPhoto3.jpg",
        "/assets/image/suzyPhoto4.jpg",
        "/assets/image/suzyPhoto5.jpg",
        "/assets/image/suzyPhoto6.jpg",
      ],
      video: [
        {
          img: "/assets/image/suzyVideoImg1.jpg",
          url: "https://www.youtube.com/embed/D1ZvQd_1zq4?si=44HoCQEB25HYCKVm",
          text: "[원더랜드] 티저 예고편 ...",
        },
        {
          img: "/assets/image/suzyVideoImg2.jpg",
          url: "https://www.youtube.com/embed/QtfHZhA-kaU?si=iHNdJAoBCR1ggmgl",
          text: "[K2]거침없이 하이킹! K2 플라이하이크 스페이스 w ...",
        },
        {
          img: "/assets/image/suzyVideoImg3.jpg",
          url: "https://www.youtube.com/embed/gwfSal0eUmA?si=I9fCQbx7-35dqZFk",
          text: "[K2] 케이투 24SS 플라이하이크(FLYHIKE) ...",
        },
        {
          img: "/assets/image/suzyVideoImg4.jpg",
          url: "https://www.youtube.com/embed/06hdUJt_a30?si=hQWtWEmFuSNGRu5R",
          text: "[게스] GUESS 24 S/S _ BLACK LABE ...",
        },
      ],
    },
  ];

  const onClick = (page) => {
    setCurrentPage(page);
  };

  const currentArtistData = artistData.filter(
    (val) => val.eName === currentArtist
  );

  return (
    <ArtistViewBlock>
      <div className="artist__wrapper">
        <span className="top__border"></span>
        <h2>
          <strong>SOOP</strong>
          ARTIST
        </h2>
        <div className="info">
          <LeftMenu artistData={artistData} setCurrentPage={setCurrentPage} />
          {screen === "profile" ? (
            <Profile
              currentArtistData={currentArtistData[0]}
              lang={lang}
              setLang={setLang}
              screen={screen}
              setScreen={setScreen}
            />
          ) : screen === "photo" ? (
            <div className="pagination__view">
              <Photo
                currentArtistData={currentArtistData[0]}
                lang={lang}
                setLang={setLang}
                screen={screen}
                setScreen={setScreen}
                currentPage={currentPage}
                itemsPerPage={photoItemsPerPage}
              />
              <Pagination
                currentPage={currentPage}
                totalItems={currentArtistData[0].photo.length}
                itemsPerPage={photoItemsPerPage}
                onClick={onClick}
              />
            </div>
          ) : (
            <div className="pagination__view">
              <Video
                currentArtistData={currentArtistData[0]}
                lang={lang}
                setLang={setLang}
                screen={screen}
                videoItemsPerPage
                setScreen={setScreen}
                currentPage={currentPage}
                itemsPerPage={videoItemsPerPage}
              />
              <Pagination
                currentPage={currentPage}
                totalItems={currentArtistData[0].video.length}
                itemsPerPage={videoItemsPerPage}
                onClick={onClick}
              />
            </div>
          )}
        </div>
      </div>
    </ArtistViewBlock>
  );
};

export default ArtistView;
