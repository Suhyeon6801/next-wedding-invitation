import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=61020e30c2d3c34412987eaf7487a51d&autoload=false`;

export const MapInfo = () => {
  return (
    <>
      <h1>오시는 길</h1>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000000" }}>Hello World!</div>
      </MapMarker>
      </Map>
    </>
  );
}