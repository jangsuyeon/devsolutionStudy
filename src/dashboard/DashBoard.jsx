import React from 'react';
import Search from '../component/search/Search';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Calendar from './Calendar';
import ProjectTable from './ProjectTable';
import TaskTable from './TaskTable';

function DashBoard() {
    return (
        <>
            <div className="layout-page">
                <Search />
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row gy-4">
                            {/* 첫 번째 네모칸 - BarChart (절반 차지) */}
                            <div className="col-sm-12 col-lg-6">
                                <div className="card text-center p-4"
                                style={{ height: '600px', overflowY: 'auto' }}
                                >
                                    <h5>월별 업무 그래프</h5>
                                    <BarChart />
                                </div>
                            </div>
                            {/* 두 번째 네모칸 - Calendar (화면 절반) */}
                            <div className="col-sm-12 col-lg-6">
                                <div
                                    className="card text-center p-4"
                                    style={{ height: '600px', overflowY: 'auto' }}
                                >
                                    <Calendar />
                                </div>
                            </div>
                        </div>

                        {/* 두 번째 Row */}
                        <div className="row mt-5">
                            {/* 왼쪽 - 업무 테이블 */}
                            <div className="col-sm-12 col-lg-6">
                                <div
                                    className="card text-center p-4"
                                    style={{ height: '400px', overflowY: 'auto' }}
                                >
                                    <TaskTable />
                                </div>
                            </div>

                            {/* 오른쪽 - 원형 그래프 */}
                            <div className="col-sm-12 col-lg-6">
                                <div
                                    className="card text-center p-4"
                                    style={{ height: '400px' }}
                                >
                                    <h5>프로젝트 별 원형 그래프</h5>
                                    <PieChart />
                                </div>
                            </div>
                        </div>

                        {/* 세 번째 Row - ProjectTable */}
                        <div className="row mt-5">
                            <div className="col-12">
                                <ProjectTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashBoard;
