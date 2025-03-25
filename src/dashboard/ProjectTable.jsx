import React from 'react';

const ProjectTable = () => {
    return (
        <div className="card">
            <h5 className="card-header">프로젝트 리스트</h5>
            <div className="table-responsive text-nowrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th>프로젝트명</th>
                            <th>진행기간</th>
                            <th>담당자</th>
                            <th>참여 인원</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <i className="fab fa-figma fa-lg text-warning me-3"></i>
                                <strong>UI/UX Design</strong>
                                <div className="text-muted small">Maybelle Zmitrovich</div>
                            </td>
                            <td>
                                <div>
                                    19h 17m
                                    <div className="progress mt-1" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: '89%' }}
                                            aria-valuenow="89"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="/img/avatars/1.png"
                                        alt="Avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                    <span>Henry Barnes</span>
                                </div>
                            </td>
                            <td>
                                <i className="bx bx-user me-2"></i>14
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fab fa-figma fa-lg text-warning me-3"></i>
                                <strong>Typography Theory</strong>
                                <div className="text-muted small">Rollie Parsons</div>
                            </td>
                            <td>
                                <div>
                                    16h 15m
                                    <div className="progress mt-1" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar bg-info"
                                            role="progressbar"
                                            style={{ width: '22%' }}
                                            aria-valuenow="22"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="/img/avatars/5.png"
                                        alt="Avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                    <span>Hallie Warner</span>
                                </div>
                            </td>
                            <td>
                                <i className="bx bx-user me-2"></i>209
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fab fa-react fa-lg text-info me-3"></i>
                                <strong>React Project</strong>
                                <div className="text-muted small">Barry Hunter</div>
                            </td>
                            <td>
                                <div>
                                    16h 24m
                                    <div className="progress mt-1" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: '10%' }}
                                            aria-valuenow="10"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="/img/avatars/6.png"
                                        alt="Avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                    <span>Gerald Flowers</span>
                                </div>
                            </td>
                            <td>
                                <i className="bx bx-user me-2"></i>116
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fab fa-react fa-lg text-info me-3"></i>
                                <strong>React Project</strong>
                                <div className="text-muted small">Barry Hunter</div>
                            </td>
                            <td>
                                <div>
                                    16h 24m
                                    <div className="progress mt-1" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            style={{ width: '10%' }}
                                            aria-valuenow="10"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="/img/avatars/6.png"
                                        alt="Avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: '32px', height: '32px' }}
                                    />
                                    <span>Gerald Flowers</span>
                                </div>
                            </td>
                            <td>
                                <i className="bx bx-user me-2"></i>116
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default ProjectTable;
