import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const KakaoMapBlock = styled.div`
  .map_wrap,
  .map_wrap * {
    margin: 0;
    padding: 0;
    font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
    font-size: 14px;
  }
  .map_wrap {
    position: relative;
    width: 100%;
    height: 500px;
  }
`;

const KakaoMap = () => {
  const kakao = window.kakao;
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [infowindow, setInfowindow] = useState(null);

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(37.51144026093823, 127.0373280973263),
      level: 6,
    };

    const mapContainer = mapRef.current;
    const mapInstance = new kakao.maps.Map(mapContainer, mapOptions);

    const infowindowInstance = new kakao.maps.InfoWindow({ zIndex: 1 });

    setMap(mapInstance);
    setInfowindow(infowindowInstance);
  }, []);

  useEffect(() => {
    if (map) {
      const markerPosition = new kakao.maps.LatLng(
        37.51144026093823,
        127.0373280973263
      );
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
      const content = '<div style="padding:10px;">매니지먼트 숲</div>';
      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
  }, [map, infowindow]);

  return (
    <KakaoMapBlock className="row">
      <div className="map_wrap">
        <div
          id="map"
          ref={mapRef}
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
        ></div>
      </div>
    </KakaoMapBlock>
  );
};

export default KakaoMap;
