import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommunityModal from "./CommunityModal";
import { addressKey } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { getmyInfo, selectmyInfo } from "../../features/main/mainSlice";

const Wrapper = styled.div`
  margin: 50px auto;
  width: 80%;
  padding: 50px;
  background-color: #f8f9fa;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const RemoveButton = styled.button`
  width: 120px;
  height: 40px;
  font-size: 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
  &:hover {
    background-color: #c82333;
  }
`;

const CommunityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const CommunityTitle = styled.input`
  width: 60%;
  margin-left: 80px;
  height: 50px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  outline: none;
`;

const CommunityContent = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  resize: none;
  outline: none;
`;

const CommunityInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const CommunityInfoItem = styled.div`
  font-size: 16px;
`;

function CommunitySignUp() {
  const [communityList, setCommunityList] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { communityId } = useParams();
  const userInfo = useSelector(selectmyInfo);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCommunity = async () => {
      try {
        const response = await axios.get(`${addressKey}/community/read?no=${communityId}`, {
          headers: {
            Authorization: token,
          }
        });
        setCommunityList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCommunity();
  }, [communityId]);

  const removeCommunityItem = async () => {
    try {
      const result = window.confirm('정말로 삭제하시겠습니까?');
      if (result) {
        const response = await axios.delete(`${addressKey}/community/remove?no=${communityId}`, {
          headers: {
            Authorization: token
          }
        });
        if (response.status === 200) {
          alert('삭제가 완료되었습니다.');
          navigate('/community');
        } else {
          throw new Error(`api error: ${response.status} ${response.statusText}`);
        }
      } else {
        alert('삭제가 취소되었습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleJoin = async () => {
    console.log(userInfo);
    const communityNo = communityList.no;
    console.log(communityNo);
    try {
      if (userInfo.communityNo === communityId) {
        alert('이미 가입되어있습니다.');
      } else {
        const response = await axios.post(`${addressKey}/community/join`, {
          communityNo: communityList.no
        }, {
          headers: {
            Authorization: token
          }
        });
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data));
          const userInfo = JSON.parse((localStorage.getItem('user')));
          dispatch(getmyInfo(userInfo));
          alert('가입이 완료되었습니다.');
          navigate('/community');
          console.log(userInfo);
        }
      }
    } catch (error) {
      console.error('가입 요청 중 오류 발생:', error);
    }
  };


  // const handleJoin = async () => {
  //   try {
  //     console.log("userInfo.communityNo:", userInfo.communityNo); // 디버깅용 로그 추가
  //     console.log(userInfo);

  //     if (userInfo.communityNo === communityId) {
  //       alert('이미 가입한 모임입니다.');
  //     } else if (!userInfo.communityNo || userInfo.communityNo === 0 || userInfo.communityNo === "") {
  //       const response = await axios.post(`${addressKey}/community/join`, {
  //         communityNo: communityList.no
  //       }, {
  //         headers: {
  //           Authorization: token
  //         }
  //       });
  //       if (response.status === 200) {
  //         localStorage.setItem('user', JSON.stringify(response.data));
  //         const userInfo = JSON.parse((localStorage.getItem('user')));
  //         dispatch(getmyInfo(userInfo));
  //         alert('가입이 완료되었습니다.');
  //         navigate('/community');
  //         console.log(userInfo);
  //       }
  //     } else {
  //       const response = await axios.put(`${addressKey}/community/pluscommunityno?no=${communityId}`, {
  //         headers: {
  //           Authorization: token
  //         }
  //       });
  //       if (response.status === 200) {
  //         alert('새로운 모임에 가입했습니다.');
  //         // navigate('/community');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('모임 가입 중 오류 발생:', error);
  //   }
  // };





  return (
    <>
      <Wrapper>
        {communityList && (
          <CommunityContainer>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <img style={{ width: '15%', height: '15%', borderRadius: '10px'}}
                    src={`/image/${communityList.imgPath}`} alt="" />
              <CommunityTitle
                type="text"
                value={communityList.title}
                readOnly
              />
            </div>
            <CommunityContent
              value={communityList.content}
              readOnly
            />
            <CommunityInfo>
              <CommunityInfoItem>모임 위치</CommunityInfoItem>
              <CommunityInfoItem>작성자: {communityList.writer}</CommunityInfoItem>
              {/* <CommunityInfoItem>회원수:</CommunityInfoItem> */}
            </CommunityInfo>
            <ButtonContainer>
              <Button onClick={handleJoin}>가입하기</Button>
            </ButtonContainer>
          </CommunityContainer>
        )}
        <ButtonContainer>
          <Button onClick={() => navigate('/community')}>목록가기</Button>
          {
            (userInfo.userId === communityList.writer || userInfo.role === 'ROLE_ADMIN') &&
            <Button onClick={() => setShowModal(true)}>수정하기</Button>
          }
          {
            userInfo.role === 'ROLE_ADMIN' &&
            <RemoveButton onClick={removeCommunityItem}>삭제하기</RemoveButton>
          }
        </ButtonContainer>
      </Wrapper>
      <CommunityModal
        showModal={showModal}
        communityList={communityList}
        communityId={communityId}
        setCommunityList={setCommunityList}
        handleModalClose={() => setShowModal(false)}
      />
    </>
  );
}

export default CommunitySignUp;
