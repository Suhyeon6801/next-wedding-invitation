function goToKakaoMap(latitude: number, longitude: number) {
    const locationDeatil = `서울 송파구 올림픽대로35다길 42`;
    const mapUrl = `https://map.kakao.com/link/map/${locationDeatil}, ${latitude},${longitude}`;

    window.open(`${mapUrl}`, '_blank');
}

export default goToKakaoMap;