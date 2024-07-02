import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import FeeChart from './FeeChart';

// Chart.js에 필요한 구성 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StyledDiv = styled.div`
  width: 55%;
  margin: 0 auto ;
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
`
const StyledDiv2 = styled.div`
  width: 80%;
  max-height: 800px;
  margin: 0 auto ;
  margin-top: 10px;
  padding: 1rem; 
  text-align: center;
`

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const PaymentButton = styled.button`
  position: absolute;
  right: 0;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

function FeeChartDetail() {
  const fees = useSelector((state) => state.fees.fees);
  const [visibleDatasets, setVisibleDatasets] = useState(['electric', 'water', 'maintenance']);

  // 결제 시스템
  const Payment = (effect, deps) => {
    useEffect(() => {
      const jquery = document.createElement("script");
      jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
      const iamport = document.createElement("script");
      iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
      document.head.appendChild(jquery);
      document.head.appendChild(iamport);
      return () => {
        document.head.removeChild(jquery); 
        document.head.removeChild(iamport); 
      }
    }, []);
  };

  const onClickPayment = () => {

    const { IMP } = window;
    IMP.init('imp86124615');

    const data = {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: `mid_${new Date().getTime()}`,
      name: '관리비',
      amount: (totalFees.electric + totalFees.water + totalFees.maintenance),
      custom_data: { name: '부가정보', desc: '세부 부가정보' },
      buyer_name: '이름',
      buyer_tel: '전화번호',
      buyer_email: 'por0632@naver.com',
      buyer_addr: '주소',
      buyer_postalcode: '우편번호'
    };
    IMP.request_pay(data, callback);
  }

  const callback = (response) => {
    const {success, error_msg} = response;
    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  }

  // 관리비 레이블 변환
  const toggleDataset = (label) => {
    setVisibleDatasets((prev) => 
      prev.includes(label)
        ? prev.filter((dataset) => dataset !== label)
        : [...prev, label]
    );
  };

  // 숫자 포맷
  const formatter = new Intl.NumberFormat('ko-KR', {currency: 'KRW'});
  
   // 항목별 총합과 평균 계산
  const totalFees = fees.reduce((acc, fee) => {
    acc.electric += fee.electric;
    acc.water += fee.water;
    acc.maintenance += fee.maintenance;
    return acc;
  }, { electric: 0, water: 0, maintenance: 0 });

  const averageFees = {
    electric: (totalFees.electric / fees.length).toFixed(0),
    water: (totalFees.water / fees.length).toFixed(0),
    maintenance: (totalFees.maintenance / fees.length).toFixed(0),
  };

  const datasets = [
    {
      label: '전기세',
      data: fees.map(fee => fee.electric),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      hidden: !visibleDatasets.includes('electric'),
    },
    {
      label: '수도세',
      data: fees.map(fee => fee.water),
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      hidden: !visibleDatasets.includes('water'),
    },
    {
      label: '관리비',
      data: fees.map(fee => fee.maintenance),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      hidden: !visibleDatasets.includes('maintenance'),
    },
  ];

  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: datasets,
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {
          const index = legendItem.datasetIndex;
          const label = datasets[index].label;
          toggleDataset(label === '전기세' ? 'electric' : label === '수도세' ? 'water' : 'maintenance');
        },
      },
    },
  };

  return (
    <>
      {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems:     'center', marginTop: '50px' }}>
        <h1>관리비</h1>
        <div style={{ width: '80%', margin: '0 auto', padding: '1rem' }}>
          <FeeChart />
        </div>
      </div> */}

    <StyledDiv2>
      <HeaderDiv>
        <h2>2024년 관리비 상세내역</h2>
        <PaymentButton type='text' onClick={onClickPayment}>결제하기</PaymentButton>
      </HeaderDiv>
      <Bar data={data} options={options} />
    </StyledDiv2>

    <StyledDiv>
      <div style={{ fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
        <p>전기세 총합: {formatter.format(totalFees.electric)}원</p> 
        <p>전기세 평균: {formatter.format(averageFees.electric)}원</p>
      </div>
      <div style={{ fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
        <p>수도세 총합: {formatter.format(totalFees.water)}원</p>
        <p>수도세 평균: {formatter.format(averageFees.water)}원</p>
      </div>
      <div style={{ fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
        <p>관리비 총합: {formatter.format(totalFees.maintenance)}원</p>
        <p>관리비 평균: {formatter.format(averageFees.maintenance)}원</p>
      </div>
    </StyledDiv>
    </>
  );
};

export default FeeChartDetail;

// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';
// import styled from 'styled-components';
// import FeeChart from './FeeChart';

// // Chart.js에 필요한 구성 요소 등록
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   ArcElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const StyledDiv = styled.div`
//   width: 55%;
//   margin: 0 auto ;
//   margin-top: 3rem;
//   padding: 1rem;
//   text-align: center;
//   display: flex;
//   justify-content: space-between;
// `;

// const StyledDiv2 = styled.div`
//   width: 80%;
//   max-height: 800px;
//   margin: 0 auto ;
//   margin-top: 10px;
//   padding: 1rem; 
//   text-align: center;
// `;

// const HeaderDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
//   position: relative;
// `;

// const PaymentButton = styled.button`
//   position: absolute;
//   right: 0;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const MonthSelect = styled.select`
//   position: absolute;
//   left: 0;
//   padding: 5px;
// `;

// function FeeChartDetail() {
//   const fees = useSelector((state) => state.fees.fees);
//   const [visibleDatasets, setVisibleDatasets] = useState(['electric', 'water', 'maintenance']);
//   const [selectedMonth, setSelectedMonth] = useState(1);

//   // 결제 시스템
//   const Payment = (effect, deps) => {
//     useEffect(() => {
//       const jquery = document.createElement("script");
//       jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
//       const iamport = document.createElement("script");
//       iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
//       document.head.appendChild(jquery);
//       document.head.appendChild(iamport);
//       return () => {
//         document.head.removeChild(jquery); 
//         document.head.removeChild(iamport); 
//       }
//     }, []);
//   };
  
//   const onClickPayment = () => {
//     const { IMP } = window;
//     IMP.init('imp86124615');
    
//     const selectedFees = fees.find(fee => fee.month === selectedMonth);
//     const totalAmount = selectedFees ? (selectedFees.electric + selectedFees.water + selectedFees.maintenance) : 0;
    
//     console.log(selectedFees);
//     console.log(totalAmount);
//     const data = {
//       pg: 'html5_inicis',
//       pay_method: 'card',
//       merchant_uid: `mid_${new Date().getTime()}`,
//       name: '관리비',
//       amount: totalAmount,
//       custom_data: { name: '부가정보', desc: '세부 부가정보' },
//       buyer_name: '이름',
//       buyer_tel: '전화번호',
//       buyer_email: 'por0632@naver.com',
//       buyer_addr: '주소',
//       buyer_postalcode: '우편번호'
//     };
//     IMP.request_pay(data, callback);
//   };

//   const callback = (response) => {
//     const { success, error_msg } = response;
//     if (success) {
//       alert('결제 성공');
//     } else {
//       alert(`결제 실패 : ${error_msg}`);
//     }
//   };

//   // 관리비 레이블 변환
//   const toggleDataset = (label) => {
//     setVisibleDatasets((prev) => 
//       prev.includes(label)
//         ? prev.filter((dataset) => dataset !== label)
//         : [...prev, label]
//     );
//   };

//   // 숫자 포맷
//   const formatter = new Intl.NumberFormat('ko-KR', { currency: 'KRW' });

//   // 항목별 총합과 평균 계산
//   const totalFees = fees.reduce((acc, fee) => {
//     acc.electric += fee.electric;
//     acc.water += fee.water;
//     acc.maintenance += fee.maintenance;
//     return acc;
//   }, { electric: 0, water: 0, maintenance: 0 });

//   const averageFees = {
//     electric: (totalFees.electric / fees.length).toFixed(0),
//     water: (totalFees.water / fees.length).toFixed(0),
//     maintenance: (totalFees.maintenance / fees.length).toFixed(0),
//   };

//   const datasets = [
//     {
//       label: '전기세',
//       data: fees.map(fee => fee.electric),
//       backgroundColor: 'rgba(255, 99, 132, 0.6)',
//       hidden: !visibleDatasets.includes('electric'),
//     },
//     {
//       label: '수도세',
//       data: fees.map(fee => fee.water),
//       backgroundColor: 'rgba(54, 162, 235, 0.6)',
//       hidden: !visibleDatasets.includes('water'),
//     },
//     {
//       label: '관리비',
//       data: fees.map(fee => fee.maintenance),
//       backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       hidden: !visibleDatasets.includes('maintenance'),
//     },
//   ];

//   const data = {
//     labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//     datasets: datasets,
//   };
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         ticks: {
//           maxRotation: 0,
//           minRotation: 0,
//         },
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//     plugins: {
//       legend: {
//         onClick: (e, legendItem, legend) => {
//           const index = legendItem.datasetIndex;
//           const label = datasets[index].label;
//           toggleDataset(label === '전기세' ? 'electric' : label === '수도세' ? 'water' : 'maintenance');
//         },
//       },
//     },
//   };

//   return (
//     <>
//       {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
//         <h1>관리비</h1>
//         <div style={{ width: '80%', margin: '0 auto', padding: '1rem' }}>
//           <FeeChart />
//         </div>
//       </div> */}

//       <StyledDiv2>
//         <HeaderDiv>
//           <h2>2024년 관리비 상세내역</h2>
//           <MonthSelect value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
//             {Array.from({ length: 12 }, (_, i) => (
//               <option key={i + 1} value={i + 1}>{i + 1}월</option>
//             ))}
//           </MonthSelect>
//           <PaymentButton type='button' onClick={onClickPayment}>결제하기</PaymentButton>
//         </HeaderDiv>
//         <Bar data={data} options={options} />
//       </StyledDiv2>

//       <StyledDiv>
//         <div style={{ fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
//           <p>전기세 총합: {formatter.format(totalFees.electric)}원</p> 
//           <p>전기세 평균: {formatter.format(averageFees.electric)}원</p>
//         </div>
//         <div style={{ fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
//           <p>수도세 총합: {formatter.format(totalFees.water)}원</p>
//           <p>수도세 평균: {formatter.format(averageFees.water)}원</p>
//         </div>
//         <div style={{ fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
//           <p>관리비 총합: {formatter.format(totalFees.maintenance)}원</p>
//           <p>관리비 평균: {formatter.format(averageFees.maintenance)}원</p>
//         </div>
//       </StyledDiv>
//     </>
//   );
// };

// export default FeeChartDetail;