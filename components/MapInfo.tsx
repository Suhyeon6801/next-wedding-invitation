import goToKakaoMap from '@/utils/goToKakaoMap';
import styled from '@emotion/styled';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Location = {
  lat: 37.5151343461444,
  lng: 127.10272871700069,
};

export const MapInfo = () => {
  return (
    <>
      <h3
        style={{
          margin: '50px 0px 50px 0px',
          fontSize: '1.1em',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textUnderlineOffset: '0.7em',
          textDecorationColor: '#C2B280',
        }}
      >
        오시는 길
      </h3>
      <div style={{ margin: '30px 0px 50px 0px ' }}>
        <p>더 베네치아</p>
        <p>서울 송파구 올림픽대로35다길 42</p>
        <p style={{ fontSize: '0.8em' }}>(TEL 02-6424-7000)</p>
      </div>
      <Map
        center={{ lat: Location.lat, lng: Location.lng }}
        style={{ width: '100%', height: '360px' }}
        level={3}
      >
        <MapMarker
          position={{ lat: Location.lat, lng: Location.lng }}
          onClick={() => goToKakaoMap(Location.lat, Location.lng)}
        />
      </Map>
      <GoToMap onClick={() => goToKakaoMap(Location.lat, Location.lng)}>
        지도 바로가기
      </GoToMap>
      <WayGuide>
        <div style={{ color: '#C2B280' }}>지하철</div>
        <div style={{ fontSize: '0.9em' }}>
          <p>2호선 잠실역 8번출구 하차 - 도보 2분거리</p>
          <p>8호선 잠실역 9번출구 하차 - 도보 1분거리</p>
        </div>
        <br />
        <div style={{ color: '#C2B280' }}>주차장</div>
        <div style={{ fontSize: '0.9em' }}>
          <p>루터회관 지하주차장 이용 </p>
          <p>(주차요원의 안내를 받으세요)</p>
        </div>
      </WayGuide>
    </>
  );
};

const GoToMap = styled.div`
  padding: 10px;
  color: #000;
  background: #f0e0a8;
`;

const WayGuide = styled.div`
  margin: 30px;
  text-align: left;
`;
