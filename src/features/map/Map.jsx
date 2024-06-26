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
  height: 870px;
`;

const Map = () => {
  const [inputValue, setInputValue] = useState("");

  const handleTagClick = (tag) => {
    setInputValue(tag);
  };

  useEffect(() => {
    const initMap = () => {
      const container = document.getElementById("map"); // 지도를 표시할 div 요소
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표 (제주시청)
        level: 3, // 지도의 확대 레벨
      };

      // 지도 생성 및 객체 리턴
      const map = new window.kakao.maps.Map(container, options);
    };

    // Kakao 지도 API가 로드된 후 실행될 콜백 함수
    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      // Kakao 지도 API 스크립트를 동적으로 로드
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=8eb4e510757118f8218df5b91c7413bf";
      script.onload = initMap; // 스크립트 로드 후 initMap 함수 실행
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Container>
      <SearchContainer>
        <Input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="검색어를 입력하세요" 
        />

        <Button>
          <SearchIcon>🔍</SearchIcon>
        </Button>

      </SearchContainer>
    
      <TagContainer>
        <Tag onClick={() => handleTagClick("#헬스")}>#헬스</Tag>
        <Tag onClick={() => handleTagClick("#맛집")}>#맛집</Tag>
        <Tag onClick={() => handleTagClick("#병원")}>#병원</Tag>
      </TagContainer>

      <MapContainer id="map">
        {/* 지도가 표시될 영역 */}
      </MapContainer>
    </Container>
  );
};

export default Map;
