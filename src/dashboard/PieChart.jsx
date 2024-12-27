
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Chart.js 모듈 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['완료', '예정', '작업중'], // 각 섹션의 라벨
    datasets: [
      {
        label: '카드 수', // 데이터 세트 라벨
        data: [48, 15, 10], // 데이터 값
        backgroundColor: [ // 색상 설정
          'rgba(54, 162, 235, 0.6)', // 완료 (파란색)
          'rgba(75, 192, 192, 0.6)', // 예정 (초록색)
          'rgba(255, 159, 64, 0.6)', // 작업중 (주황색)
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right', // 범례 위치
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            return ` ${value} cards`; // 툴팁에 카드 수 추가
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '500px', margin: '0 auto' }}> {/* 차트 컨테이너 크기 */}
      <h3 style={{ textAlign: 'center' }}>프로젝트 별 원형 그래프</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
