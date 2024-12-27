
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const generateData = () => {
    const totalTasks = [30, 45, 25, 35, 28, 50, 48, 32, 40, 29];
    const completedTasks = [20, 37, 25, 12, 25, 38, 24, 28, 30, 25];

    return { totalTasks, completedTasks };
};

const BarChart = () => {
    const { totalTasks, completedTasks } = generateData();

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // X축 레이블
        datasets: [
            {
                type: 'bar', // 바 차트
                label: '업무 개수',
                data: totalTasks,
                backgroundColor: 'rgba(255, 193, 7, 0.6)', 
                borderColor: 'rgba(255, 193, 7, 1)',
                borderWidth: 1,
            },
            {
                type: 'line', // 라인 차트
                label: '업무 완료 개수',
                data: completedTasks,
                backgroundColor: 'rgba(138, 43, 226, 0.8)', 
                borderColor: 'rgba(138, 43, 226, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(138, 43, 226, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                tension: 0.4, 
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: '매 월 별로 진행 중인 업무 갯수 및 완료 갯수' },
        },
        scales: {
            y: {
                beginAtZero: true,
                stepSize: 5, // Y축 5단위로 표시
                title: { display: true, text: '개수' },
            },
            x: {
                title: { display: true, text: '월별' },
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '350px' }}> {/* 차트 크기 조정 */}
            <Chart type="bar" data={data} options={options} />
        </div>
    );
};

export default BarChart;
