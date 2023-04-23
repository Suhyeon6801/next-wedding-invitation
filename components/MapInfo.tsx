import goToKakaoMap from '@/utils/goToKakaoMap';
import styled from '@emotion/styled';
import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=61020e30c2d3c34412987eaf7487a51d&autoload=false`;

const Location = {
  lat: 33.5563,
  lng: 126.79581,
}

export const MapInfo = () => {
  return (
    <>
      <h1>오시는 길</h1>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: Location.lat, lng: Location.lng }}
        style={{ width: "100%", height: "360px" }}
        level={3}
      >
      <MapMarker 
        position={{ lat: Location.lat, lng: Location.lng }}
        onClick={() => goToKakaoMap(Location.lat, Location.lng)}
      />
      </Map>
      <GoToMap onClick={() => goToKakaoMap(Location.lat, Location.lng)}>지도 바로가기</GoToMap>
    </>
  );
}

const GoToMap = styled.div`
  margin: 10px;
  padding: 20px;
  color: #000;
  background: #00ff00;
`;