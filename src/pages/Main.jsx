import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import FeeChart from '../components/FeeChart';
import { selectNoticeList } from "../features/board/boardSlice";
import { selectmyInfo } from "../features/main/mainSlice";
import { SectionsContainer, Section, Footer } from "react-fullpage";
import { useNavigate } from "react-router-dom";
import { selectMyFee, setFees } from "../features/fee/feeSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Slider from "react-slick";
import { addressKey } from "..";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledCard = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 auto;
  gap: 36px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 86%;
  /* border: 1px solid black; */
  margin: 0 auto;
`

const SlideWrapper = styled.div`
  height: 36px;
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  /* border: 1px solid black; */
  text-align: center;
`

const ContentRow = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  /* border: 1px solid black; */
`;

const FeeContainer = styled.div`
  flex: 4;
  /* border: 1px solid black; */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const FeeContainer2 = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 600;
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  margin-top: 8rem;
`;

const FeeContainer3 = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 600;
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  margin-top: 6rem;
`;

const FeeContentsContainer = styled.div`
p {
  margin: 0;

  @media (max-width: 1058px) {
      font-size: 18px;
    }

  @media (max-width: 788px) {
      font-size: 14px;
    }

  @media (max-width: 618px) {
      font-size: 12px;
    }

  @media (max-width: 529px) {
    font-size: 10px;
  }
}
`

const daysOfWeek = [
  "오늘은 일요일: 생활쓰레기, 음식물쓰레기 배출요일 입니다.",
  "오늘은 월요일: 생활쓰레기, 재활용품 배출요일 입니다.",
  "오늘은 화요일: 생활쓰레기, 음식물쓰레기 배출요일 입니다.",
  "오늘은 수요일: 생활쓰레기, 재활용품 배출요일 입니다.",
  "오늘은 목요일: 생활쓰레기, 음식물쓰레기 배출요일 입니다.",
  "오늘은 금요일: 생활쓰레기, 재활용품 배출요일 입니다.",
  "오늘은 토요일: 쓰레기 배출일이 아닙니다."
];

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url("/image/apartment.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   display: block;
// `;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const TextOverlay = styled.div`
  z-index: 1; /* 텍스트가 이미지 위에 표시되도록 설정 */
  transform: translateY(-100px);
  h2 {
    font-size: 2.5rem;

    @media (min-width: 576px) {
      font-size: 2%.5;
    }

    @media (min-width: 768px) {
      font-size: rem;
    }

    @media (min-width: 992px) {
      font-size: 4rem;
    }

    @media (min-width: 1200px) {
      font-size: 4.5rem;
    }
  }
  p {
    font-size: 2rem;
  }
`;


function Main() {
  const noticeList = useSelector((state) => state.board.noticeList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notice, setNotice] = useState();
  const userInfo = useSelector(selectmyInfo);
  const today = new Date();
  const currentMonth = today.getMonth();
  const fee = useSelector(state => selectMyFee(state, currentMonth)) || { electric: 0, water: 0, maintenance: 0 };

  let options = {
    activeClass: 'active', // the class that is appended to the sections links
    anchors: ['sectionOne', 'sectionTwo'], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: 'SectionContainer', // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: 'Section', // the section class name
    sectionPaddingTop: '0', // the section top padding
    sectionPaddingBottom: '0', // the section bottom padding
    verticalAlign: false // align the content of each section vertical
  };

  // 슬라이드 세팅
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    // pauseOnHover: true,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
    },
    afterChange: function(currentSlide) {
    }
  };

  const today2 = new Date();

  const formattedDate = `${today2.getMonth()}`

  const dayText = daysOfWeek[today.getDay()];

  const totalFee = fee.electric + fee.water + fee.maintenance

  useEffect(() => {
    const fetchFeeInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/fee/list`, {
          headers: {
            Authorization: localStorage.getItem('token')
          },
          params: {
            'userId': userInfo.userId
          }
        });
        if (response.status === 200) {
          const sortedFees = response.data.sort((a, b) => a.month - b.month);
          dispatch(setFees(sortedFees));
        }
      } catch (error) {
        console.error("Error fetching fee data:", error);
      }
    }
    if (userInfo && userInfo.userId) {
      fetchFeeInfo();
    }
  }, [userInfo, dispatch]);

  useEffect(() => {
    const fetchNoticeList = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/notice/list`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });
        if (response.status === 200) {
          setNotice(response.data);
        } else {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchNoticeList();
  }, []);

  return (
    <>
      <SectionsContainer {...options}>
        <Section>
          <ImageContainer>
            <Overlay>
              <TextOverlay>
                <h2>HOMECONNECT</h2>
                <p>아파트 관리 웹앱입니다.</p>
              </TextOverlay>
            </Overlay>
          </ImageContainer>
        </Section>

        <Section>
          <Wrapper>
            {/* <Card style={{ marginTop: '1px' }}>
              <Card.Body style={{}}>
                <blockquote className="blockquote m-0 auto text-center">
                  <p>
                    📢{dayText}
                  </p>
                </blockquote>
              </Card.Body>
            </Card> */}

            <SlideWrapper>
              <Slider {...settings}>
                <div>
                  <h3>📢 생활쓰레기 배출일은 매주 월, 수, 금요일 입니다.</h3>
                </div>
                <div>
                  <h3>📢 음식물쓰레기 배출일은 매주 화, 목, 토요일 입니다.</h3>
                </div>
              </Slider>
            </SlideWrapper>

            <ContentRow>
              <FeeContainer>
                <FeeChart />
              </FeeContainer>

              <FeeWrapper>
                <FeeContainer3>
                  <StyledCard>
                    {notice && notice.slice(-1).map((noticeitem) => {
                      return (
                        <Card style={{ width: '18rem', border: 'none' }}>
                          {/* <Card.Img 
                      variant="top" 
                      src="/image/002.png" 
                      width="5px" 
                      height="40px"/>  
                      */}
                          <Card.Body>
                            <Card.Title style={{ fontSize: '2.2rem' }}>{noticeitem.title}</Card.Title>
                            <Card.Text style={{ fontSize: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {noticeitem.content}
                            </Card.Text>
                            <p style={{ cursor: 'pointer', fontSize: '1rem', fontWeight: '200' }} onClick={() => navigate('/boardlist')}>바로가기</p>
                          </Card.Body>
                        </Card>);
                    })}
                  </StyledCard>
                </FeeContainer3>

                <FeeContainer2>
                  <FeeContentsContainer>
                    <p>{userInfo.name}님 {formattedDate}월 총 관리비는
                      <br />
                      {totalFee}원 입니다.
                      <br />
                      <br />
                      <p style={{ fontWeight: '200', fontSize: '16px', cursor: 'pointer' }} onClick={() => navigate('/feedetail')}>
                        - 관리비 상세보기
                      </p>
                    </p>
                  </FeeContentsContainer>
                </FeeContainer2>

              </FeeWrapper>

            </ContentRow>
          </Wrapper>
        </Section>
      </SectionsContainer>
    </>
  );
};

export default Main;