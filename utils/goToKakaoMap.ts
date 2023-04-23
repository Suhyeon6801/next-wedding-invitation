function goToKakaoMap(latitude: number, longitude: number) {
    const mapUrl = `https://map.kakao.com/link/map/${'경기 성남시 분당구 정자일로 95'}, ${latitude},${longitude}`;

    window.open(`${mapUrl}`, '_blank');
}

export default goToKakaoMap;