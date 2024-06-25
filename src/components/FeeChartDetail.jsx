import React from 'react';
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
} from 'chart.js';
import styled from 'styled-components';

// Chart.js에 필요한 구성 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function FeeChartDetail() {
  const fees = useSelector((state) => state.fees.fees);

   // 항목별 총합과 평균 계산
  const totalFees = fees.reduce((acc, fee) => {
    acc.electric += fee.electric;
    acc.water += fee.water;
    acc.maintenance += fee.maintenance;
    return acc;
  }, { electric: 0, water: 0, maintenance: 0 });

  const averageFees = {
    electric: (totalFees.electric / fees.length).toFixed(2),
    water: (totalFees.water / fees.length).toFixed(2),
    maintenance: (totalFees.maintenance / fees.length).toFixed(2),
  };

  const data = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: '전기세',
        data: fees.map(fee => fee.electric),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: '수도세',
        data: fees.map(fee => fee.water),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: '관리비',
        data: fees.map(fee => fee.maintenance),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
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
  };

  return (
    <div style={{ width: '70%', height: '600px', margin: '0 auto', padding: '1rem', textAlign: 'center' }}>
      <h2>관리비 상세내역</h2>
      <Bar data={data} options={options} />
      <div style={{ marginTop: '20px', fontSize: '20px', padding: '100px' }}>
        <h3>총합 및 평균</h3>
        <p>전기세 총합: {totalFees.electric} 원, 평균: {averageFees.electric} 원</p>
        <p>수도세 총합: {totalFees.water} 원, 평균: {averageFees.water} 원</p>
        <p>관리비 총합: {totalFees.maintenance} 원, 평균: {averageFees.maintenance} 원</p>
      </div>
    </div>
  );
};

export default FeeChartDetail;