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
    <div style={{ width: '80%', height: '500px', margin: '0 auto', padding: '1rem' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FeeChartDetail;