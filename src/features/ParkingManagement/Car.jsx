import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 73vh;
`;

const StyledTable = styled.table`
    width: 90%;
    max-width: 800px;
    margin-bottom: 20px; //테이블과 버튼 사이 여백 조정
    border-collapse: collapse;

    th, td {
        text-align: center;
        padding: 10px;
        border: 1px solid #ccc;
        width: 120px;
        height: 65px;
    }

    th {
        background-color: #f0f0f0;
    }
`;

function Car() {
    const [parkingAvailability, setParkingAvailability] = useState({
        'A-1': true,
        'A-2': false,
        'A-3': true,
        'A-4': false,
        'A-5': true,
        'A-6': true,
        'A-7': false,
        'A-8': true,
        'A-9': false,
        'A-10': true,
        'A-11': false,
        'A-12': true,
        'A-13': true,
        'A-14': false,
        'B-1': true,
        'B-2': false,
        'B-3': true,
        'B-4': false,
        'B-5': true,
        'B-6': true,
        'B-7': false,
        'B-8': true,
        'B-9': false,
        'B-10': true,
        'B-11': false,
        'B-12': true,
        'B-13': true,
        'B-14': true,
    });

    const intervalRef = useRef(null); // interval ID를 저장할 useRef

    useEffect(() => {
        // 컴포넌트가 마운트될 때 시뮬레이션 시작
        startSimulation();
        // 컴포넌트가 언마운트될 때 interval 정리
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const startSimulation = () => {
        // 20분마다 데이터를 업데이트하는 시뮬레이션 함수
        intervalRef.current = setInterval(() => {
            setParkingAvailability(prevAvailability => ({
                ...prevAvailability,
                'A-1': Math.random() < 0.5,
                'A-2': Math.random() < 0.5,
                'A-3': Math.random() < 0.5,
                'A-4': Math.random() < 0.5,
                'A-5': Math.random() < 0.5,
                'A-6': Math.random() < 0.5,
                'A-7': Math.random() < 0.5,
                'A-8': Math.random() < 0.5,
                'A-9': Math.random() < 0.5,
                'A-10': Math.random() < 0.5,
                'A-11': Math.random() < 0.5,
                'A-12': Math.random() < 0.5,
                'A-13': Math.random() < 0.5,
                'A-14': Math.random() < 0.5,
                'B-1': Math.random() < 0.5,
                'B-2': Math.random() < 0.5,
                'B-3': Math.random() < 0.5,
                'B-4': Math.random() < 0.5,
                'B-5': Math.random() < 0.5,
                'B-6': Math.random() < 0.5,
                'B-7': Math.random() < 0.5,
                'B-8': Math.random() < 0.5,
                'B-9': Math.random() < 0.5,
                'B-10': Math.random() < 0.5,
                'B-11': Math.random() < 0.5,
                'B-12': Math.random() < 0.5,
                'B-13': Math.random() < 0.5,
                'B-14': Math.random() < 0.5,
            }));
        }, 1200000); // 20분마다 업데이트
    };

    const renderParkingSpot = (spotName) => {
        const isAvailable = parkingAvailability[spotName];

        const tdStyle = {
            textAlign: 'center',
            padding: '10px',
            border: '1px solid #ccc',
            width: '120px',
            height: '65px',
            backgroundColor: isAvailable ? '#4CAF50' : '#f44336',
            color: '#fff'
        };

        return (
            <td style={tdStyle}>{spotName}</td>
        );
    };

    return (
        <Container>
            <StyledTable>
                <thead>
                    <tr>
                        <th colSpan={7}>A 주차구역</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {renderParkingSpot('A-1')}
                        {renderParkingSpot('A-2')}
                        {renderParkingSpot('A-3')}
                        {renderParkingSpot('A-4')}
                        {renderParkingSpot('A-5')}
                        {renderParkingSpot('A-6')}
                        {renderParkingSpot('A-7')}
                    </tr>
                    <tr>
                        {renderParkingSpot('A-8')}
                        {renderParkingSpot('A-9')}
                        {renderParkingSpot('A-10')}
                        {renderParkingSpot('A-11')}
                        {renderParkingSpot('A-12')}
                        {renderParkingSpot('A-13')}
                        {renderParkingSpot('A-14')}
                    </tr>
                </tbody>
            </StyledTable>

            <StyledTable>
                <thead>
                    <tr>
                        <th colSpan={7}>B 주차구역</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {renderParkingSpot('B-1')}
                        {renderParkingSpot('B-2')}
                        {renderParkingSpot('B-3')}
                        {renderParkingSpot('B-4')}
                        {renderParkingSpot('B-5')}
                        {renderParkingSpot('B-6')}
                        {renderParkingSpot('B-7')}
                    </tr>
                    <tr>
                        {renderParkingSpot('B-8')}
                        {renderParkingSpot('B-9')}
                        {renderParkingSpot('B-10')}
                        {renderParkingSpot('B-11')}
                        {renderParkingSpot('B-12')}
                        {renderParkingSpot('B-13')}
                        {renderParkingSpot('B-14')}
                    </tr>
                </tbody>
            </StyledTable>
        </Container>
    );
}

export default Car;

// 백엔드
// package com.example.scheduler;

// import org.springframework.scheduling.annotation.Scheduled;
// import org.springframework.stereotype.Component;

// import java.time.LocalDateTime;
// import java.time.format.DateTimeFormatter;
// import java.util.HashMap;
// import java.util.Map;

// @Component
// public class ParkingAvailabilityScheduler {

//     private static final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

//     private Map<String, Boolean> parkingAvailability = new HashMap<>();

//     public ParkingAvailabilityScheduler() {
//         // 초기 주차 공간 가용성 설정
//         initializeParkingAvailability();
//     }

//     private void initializeParkingAvailability() {
//         // 각 주차 공간의 초기 가용성 설정
//         for (int i = 1; i <= 14; i++) {
//             parkingAvailability.put("A-" + i, Math.random() < 0.5);
//             parkingAvailability.put("B-" + i, Math.random() < 0.5);
//         }
//     }

//     // 매 20분마다 주차 공간 가용성 업데이트
//     @Scheduled(cron = "0 0/20 * * * ?")
//     public void updateParkingAvailability() {
//         for (String spot : parkingAvailability.keySet()) {
//             parkingAvailability.put(spot, Math.random() < 0.5);
//         }
//         LocalDateTime now = LocalDateTime.now();
//         String formattedTime = now.format(dateTimeFormatter);
//         System.out.println("주차 공간 가용성 업데이트: " + formattedTime);
//     }

//     public Map<String, Boolean> getParkingAvailability() {
//         return parkingAvailability;
//     }
// }

// 프론트엔드
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
// `;

// const StyledTable = styled.table`
//     width: 90%;
//     max-width: 800px;
//     margin-bottom: 20px;
//     border-collapse: collapse;

//     th, td {
//         text-align: center;
//         padding: 10px;
//         border: 1px solid #ccc;
//         width: 120px;
//         height: 65px;
//     }

//     th {
//         background-color: #f0f0f0;
//     }
// `;

// const App = () => {
//     const [parkingAvailability, setParkingAvailability] = useState({});

//     useEffect(() => {
//         const fetchParkingAvailability = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/parking-availability');
//                 setParkingAvailability(response.data);
//             } catch (error) {
//                 console.error('Error fetching parking availability:', error);
//             }
//         };

//         fetchParkingAvailability();

//         // 매 20분마다 주차 공간 가용성을 업데이트하기 위한 타이머 설정
//         const interval = setInterval(fetchParkingAvailability, 1200000); // 20분마다

//         return () => clearInterval(interval); // 컴포넌트 언마운트 시 타이머 정리
//     }, []);

//     const renderParkingSpot = (spotName, isAvailable) => {
//         const tdStyle = {
//             textAlign: 'center',
//             padding: '10px',
//             border: '1px solid #ccc',
//             width: '120px',
//             height: '65px',
//             backgroundColor: isAvailable ? '#4CAF50' : '#f44336',
//             color: '#fff'
//         };

//         return (
//             <td style={tdStyle}>{spotName}</td>
//         );
//     };

//     return (
//         <Container>
//             <h1>주차 공간 가용성</h1>
//             <StyledTable>
//                 <thead>
//                     <tr>
//                         <th colSpan={7}>A 주차구역</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         {Object.keys(parkingAvailability)
//                             .filter(spot => spot.startsWith('A'))
//                             .map(spot => renderParkingSpot(spot, parkingAvailability[spot]))}
//                     </tr>
//                 </tbody>
//             </StyledTable>

//             <StyledTable>
//                 <thead>
//                     <tr>
//                         <th colSpan={7}>B 주차구역</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         {Object.keys(parkingAvailability)
//                             .filter(spot => spot.startsWith('B'))
//                             .map(spot => renderParkingSpot(spot, parkingAvailability[spot]))}
//                     </tr>
//                 </tbody>
//             </StyledTable>
//         </Container>
//     );
// };

// export default App;
