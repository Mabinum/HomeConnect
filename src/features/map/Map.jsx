import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px;
  position: relative;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  outline: none;

  &::placeholder {
    color: #bbb;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.span`
  font-size: 20px;
  color: #007bff;
`;

const TagContainer = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
`;

const Tag = styled.li`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  font-size: 14px;
  background-color: #f1f1f1;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100vh; /* 수정: 더 작은 값으로 조정 */
`;

const Map = () => {
  const [inputValue, setInputValue] = useState("");
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const initMap = () => {
      const container = document.getElementById("map"); // 지도를 표시할 div 요소
      const options = {
        center: new window.kakao.maps.LatLng(37.452381, 126.699562), // 서울시청을 중심으로 초기화
        level: 5, // 지도의 확대 레벨
      };

      // 지도 생성 및 객체 리턴
      const kakaoMap = new window.kakao.maps.Map(container, options);
      setMap(kakaoMap); // 상태에 지도 객체 저장
    };

    // Kakao 지도 API가 로드된 후 실행될 콜백 함수
    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      // Kakao 지도 API 스크립트를 동적으로 로드
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=8eb4e510757118f8218df5b91c7413bf&libraries=services";
      script.onload = initMap; // 스크립트 로드 후 initMap 함수 실행
      document.head.appendChild(script);
    }
  }, []);

  // 태그 클릭 핸들러
  const handleTagClick = (tag) => {
    setInputValue(tag);
    searchPlaces(tag);
  };

  // 검색어 입력 핸들러
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 검색 함수
  const searchPlaces = (keyword) => {
    if (!map) return;

    const ps = new window.kakao.maps.services.Places(map);
    ps.keywordSearch(keyword, placesSearchCB);
  };

  // 검색 결과 콜백 함수
  const placesSearchCB = (data, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      displayPlaces(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      // 검색 결과 없음 처리
      console.log("검색 결과가 없습니다.");
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      // 검색 오류 처리
      console.error("검색 중 오류가 발생했습니다.");
    }
  };

  // 검색 결과를 지도에 표시하는 함수
  const displayPlaces = (places) => {
    // 기존 마커 삭제
    markers.forEach((marker) => marker.setMap(null));

    // 새로운 마커 추가
    const newMarkers = places.map((place) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });
      marker.setMap(map);
      return marker;
    });

    // 상태 업데이트
    setMarkers(newMarkers);
  };

  return (
    <Container>
      <SearchContainer>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        />
        <Button onClick={() => searchPlaces(inputValue)}>
          <SearchIcon>🔍</SearchIcon>
        </Button>
      </SearchContainer>

      <TagContainer>
        <Tag onClick={() => handleTagClick("#헬스")}>#헬스</Tag>
        <Tag onClick={() => handleTagClick("#식당")}>#맛집</Tag>
        <Tag onClick={() => handleTagClick("#병원")}>#병원</Tag>
        <Tag onClick={() => handleTagClick("#편의점")}>#편의점</Tag>
      </TagContainer>

      <MapContainer id="map">
        {/* 지도가 표시될 영역 */}
      </MapContainer>
    </Container>
  );
};

export default Map;
