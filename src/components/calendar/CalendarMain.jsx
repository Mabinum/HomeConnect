import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  background-color: #f8f9fa;
`;

const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  .react-calendar {
    width: 80%;
    max-width: 1200px;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    background-color: #fff;
  }

  .react-calendar__navigation button {
    font-size: 1.6rem;
    color: #007bff;
    cursor: pointer;

    &:disabled {
      color: #dcdcdc;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }

  .react-calendar__tile {
    height: 6rem;
    text-align: center;
    border-radius: 1rem;
    transition: all 0.2s ease;
    font-size: 1rem;
    padding: 1rem;
    text-overflow: ellipsis;

    &:hover {
      background-color: #f0f0f0;
    }

    &.react-calendar__tile--now {
      background-color: #94abdd;
      color: #fff;
    }

    &.react-calendar__tile--active {
      background-color: #a37f7b;
      color: #fff;
    }

    &.react-calendar__tile--marked {
      background-color: #fff8dc;
      color: #333;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NoticeWrapper = styled.div`
  flex: 0.4;
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.6s ease-in-out;

  .notice-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .notice-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  .close {
    background: none;
    border: none;
    color: #888;
    cursor: pointer;
    font-size: 1.2rem;
    z-index: 999;

    &:hover {
      color: #555;
    }
  }

  .notice-content {
    font-size: 1rem;
    color: #666;
    margin-top: 1rem;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 4rem;
  text-align: center;
  background-color: #fff8dc;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ContentInput = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  border: none;
  background: none;
  color: #666;
  font-size: 1.3rem;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }
`;

function CalendarMain() {
  const [value, onChange] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [noticeList, setNoticeList] = useState([]);
  const navigate = useNavigate();
  const addressKey = process.env.REACT_APP_HOST_ADDRESS;

  const fetchNoticeList = async () => {
    try {
      const response = await axios.get(`${addressKey}/notice/list`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      if (response.status === 200) {
        setNoticeList(response.data);
      } else {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNoticeList();
  }, []);

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && date.getDay() === 0) {
      return 'react-calendar__tile--sunday';
    }
    if (noticeList.some((notice) => moment(notice.noticeDate).isSame(date, 'day'))) {
      return 'react-calendar__tile--marked';
    }
    return null;
  };

  const tileContent = ({ date }) => {
    const notices = noticeList.filter((notice) => moment(notice.noticeDate).isSame(date, 'day'));
    return notices.map((notice, index) => <div key={index}>{notice.title}</div>);
  };

  const handleDateClick = (date) => {
    onChange(date);
    setSelectedDate(date);
    setShowDate(true);
  };

  const handleClickDate = (date) => {
    setSelectedDate(date);
    setShowDate(true);
  };

  const handleCloseNotice = () => {
    setShowDate(false);
    setSelectedDate(null);
  };

  return (
    <Wrapper>
      <CalendarContainer>
        <Calendar
          onChange={handleDateClick}
          value={value}
          next2Label={null}
          prev2Label={null}
          calendarType="gregory"
          formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
          showNeighboringMonth={false}
          minDetail="year"
          // tileContent={tileContent}
          tileClassName={tileClassName}
          onClickDay={handleClickDate}
        />
      </CalendarContainer>
      {showDate && selectedDate && (
        <NoticeWrapper>
          <div className="notice-header">
            <div className="notice-title">
              공지사항 {moment(selectedDate).format('YYYY/MM/DD')}
            </div>
            <button className='close' onClick={handleCloseNotice}>
              Close
            </button>
          </div>
          {noticeList
            .filter((notice) => moment(notice.noticeDate).isSame(selectedDate, 'day'))
            .map((notice) => (
              <div key={notice.id}>
                <TitleInput
                  type="text"
                  value={notice.title}
                  readOnly
                  onClick={() => navigate(`/noticeread/${notice.no}`)}
                />
                {/* <ContentInput type="text" value={notice.content} readOnly /> */}
                {/* <hr /> */}
              </div>
            ))}
        </NoticeWrapper>
      )}
    </Wrapper>
  );
}

export default CalendarMain;
