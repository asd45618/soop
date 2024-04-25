import React, { useState } from "react";
import LeftMenu from "../components/artist/LeftMenu";
import styled from "styled-components";
import Profile from "../components/artist/Profile";

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
    }
  }
`;

const ArtistView = () => {
  const [currentArtist, setCurrentArtist] = useState("GONG YOO");
  const artistData = [
    {
      mainPhoto: "/assets/image/artistMainImg1.jpg",
      kName: "공유",
      eName: "GONG YOO",
      birth: "1979.7.10",
      height: "184cm",
      debut: "드라마 학교4 (KBS, 2001)",
      works: [
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
      photo: [],
      video: [],
    },
    {
      mainPhoto: "/assets/image/artistMainImg2.jpg",
      kName: "김재욱",
      eName: "KIM JAE-UCK",
      birth: "1983.4.2",
      height: "183cm",
      debut: "",
      works: [
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
      sns: [
        {
          insta: "https://www.instagram.com/jaeuck.kim/",
        },
        {
          japan: "https://ticket.pia.jp/piasp/fc/kimjaeuck_close.jsp",
        },
      ],
      photo: [],
      video: [],
    },
    {
      mainPhoto: "/assets/image/artistMainImg3.jpg",
      kName: "남주혁",
      eName: "NAM JOO-HYUK",
      birth: "1994.2.22",
      height: "187cm",
      debut: "",
      works: [
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
      sns: [
        {
          insta: "https://www.instagram.com/skawngur/",
        },
      ],
      photo: [],
      video: [],
    },
    {
      mainPhoto: "/assets/image/artistMainImg4.jpg",
      kName: "서현진",
      eName: "SEO HYUN-JIN",
      birth: "1985.2.27",
      height: "167cm",
      debut: "데뷔 밀크 1집 앨범 With Freshness(2001)",
      works: [
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
      sns: {},
      photo: [],
      video: [],
    },
    {
      mainPhoto: "/assets/image/artistMainImg5.jpg",
      kName: "수지",
      eName: "SUZY",
      birth: "1994.10.10",
      height: "168cm",
      debut: "미쓰에이 싱글 앨범 [Bad But Good](2010)",
      works: [
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
      sns: [
        { insta: "https://www.instagram.com/skuukzky/" },
        { youtube: "https://www.youtube.com/@suzy5370" },
      ],
      photo: [],
      video: [],
    },
  ];
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
          <LeftMenu
            artistData={artistData}
            setCurrentArtist={setCurrentArtist}
          />
          <Profile currentArtistData={currentArtistData[0]} />
        </div>
      </div>
    </ArtistViewBlock>
  );
};

export default ArtistView;
