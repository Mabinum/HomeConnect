import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bar, Doughnut } from 'react-chartjs-2';
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
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
  width: 80%;
  max-height: 750px;
  margin: 0 auto ;
  margin-top: 20px;
  padding: 2rem; 
  text-align: center;
`

function FeeChartDetail() {
  const fees = useSelector((state) => state.fees.fees);
  const navigate = useNavigate();
  const [visibleDatasets, setVisibleDatasets] = useState(['electric', 'water', 'maintenance']);
  const [selectedMonth, setSelectedMonth] = useState(0);

  const toggleDataset = (label) => {
    setVisibleDatasets((prev) => 
      prev.includes(label)
        ? prev.filter((dataset) => dataset !== label)
        : [...prev, label]
    );
  };

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
    <StyledDiv>
      <h2>관리비 상세내역</h2>
      <Bar data={data} options={options} />
      <div style={{ height: '30px', fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
        <p>전기세 총합: {formatter.format(totalFees.electric)}원, 평균: {formatter.format(averageFees.electric)}원  </p>
      </div>
      <div style={{ height: '30px', fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
        <p>수도세 총합: {formatter.format(totalFees.water)}원, 평균: {formatter.format(averageFees.water)}원  </p>
      </div>
      <div style={{ height: '30px', fontSize: '1rem', textAlign: 'center', fontWeight: '900' }}>
        <p>관리비 총합: {formatter.format(totalFees.maintenance)}원, 평균: {formatter.format(averageFees.maintenance)}원 </p>
      </div>
    </StyledDiv>
  );
};

// export default FeeChartDetail;

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { fetchFees } from '../features/fee/feeSlice';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const FeeChartDetail = () => {
//   const dispatch = useDispatch();
//   const fees = useSelector((state) => state.fees.fees);
//   const status = useSelector((state) => state.fees.status);
//   const error = useSelector((state) => state.fees.error);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchFees());
//     }
//   }, [status, dispatch]);

//   const data = {
//     labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
//     datasets: [
//       {
//         label: '전기세',
//         data: fees.map(fee => fee.electric),
//         backgroundColor: 'rgba(255, 99, 132, 0.6)',
//       },
//       {
//         label: '수도세',
//         data: fees.map(fee => fee.water),
//         backgroundColor: 'rgba(54, 162, 235, 0.6)',
//       },
//       {
//         label: '관리비',
//         data: fees.map(fee => fee.maintenance),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//     ],
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
//   };

//   return (
//     <div style={{ width: '70%', height: '600px', margin: '0 auto', padding: '1rem', textAlign: 'center' }}>
//       <h2>관리비 상세내역</h2>
//       {status === 'loading' && <div>Loading...</div>}
//       {status === 'failed' && <div>{error}</div>}
//       {status === 'succeeded' && <Bar data={data} options={options} />}
//     </div>
//   );
// };

export default FeeChartDetail;