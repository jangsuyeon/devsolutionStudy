// src/layouts/DashBoard.jsx
import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';

const DashBoard = () => {
    return (
        <div className="layout-page p-4">
            <div className="chart-container">
                <BarChart />
                <PieChart />
            </div>
        </div>
    );
};

export default DashBoard;
