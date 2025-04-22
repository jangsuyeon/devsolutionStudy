import React, { useState } from 'react'
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"
import "/public/css/project/projectList.css"
import "/public/css/project/projectAdd.css"
import "boxicons/css/boxicons.min.css"
import { Offcanvas, Button } from 'react-bootstrap'
import UserSelect from "./UserSelect"
import Select from "react-select"
import { Users, teams } from './constants'

// select style
const selectStyles = {
    control: (base, state) => ({
        ...base,
        border: state.isFocused ? "1px solid #696cff" : base.border,
        boxShadow: "none",
        width: "100%"
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#fff",
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected
            ? "rgba(105, 108, 255, 0.16)"
            : state.isFocused
            ? "rgba(34, 48, 62, 0.06)"
            : "#fff",
        color: state.isSelected ? "#696cff" : "#384551",
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: "#f0f0f0",
    }),
};

function ProjectList() {
    const [show, setShow] = useState(false);
    const [selectedAssignee, setSelectedAssignee] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="layout-wrapper">
                <div className="layout-container layout-content-navbar">

                    {/* Layout container */}
                    <div className="layout-page ">
                        {/* Navbar */}
                        <nav
                            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar"
                        >
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a className="nav-item nav-link px-0 me-xl-4" href="#">
                                    <i className="bx bx-menu bx-sm"></i>
                                </a>
                            </div>

                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                {/* Search */}
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center">
                                    <i className="bx bx-search fs-4 lh-0"></i>
                                    <input
                                        type="text"
                                        className="form-control border-0 shadow-none"
                                        placeholder="Search..."
                                        aria-label="Search..."
                                    />
                                    </div>
                                </div>

                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    <li className="nav-item lh-1 me-3">
                                        <a
                                            className="github-button"
                                            href="https://github.com/themeselection/sneat-html-admin-template-free"
                                            data-icon="octicon-star"
                                            data-size="large"
                                            data-show-count="true"
                                            aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                                            >Star
                                        </a>
                                    </li>

                                    {/* User */}
                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online">
                                            <img src="/devsolutionStudy/public/img/avatars/1.png" alt="Avatar" className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar avatar-online">
                                                        <img src="/devsolutionStudy/public/img/avatars/1.png" alt="Avatar" className="w-px-40 h-auto rounded-circle" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <span className="fw-semibold d-block">John Doe</span>
                                                        <small className="text-muted">Admin</small>
                                                    </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <i className="bx bx-user me-2"></i>
                                                    <span className="align-middle">마이페이지</span>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="auth-login-basic.html">
                                                    <i className="bx bx-power-off me-2"></i>
                                                    <span className="align-middle">로그아웃</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* Content wrapper */}
                        <div className="content-wrapper">
                            {/* Content */}
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {/* List Widget */}
                                <div className="card card-widget">
                                    <div className="card-widget-separator-wapper">
                                        <div className="card-body card-widget-separator">
                                            <div className="row gy-4 gy-sm-1">
                                                <div className="col-sm-6 col-lg-3">
                                                    <div className="d-flex justify-content-between align-items-center card-widget-1 border-end pd-4 pd-sm-0">
                                                        <div>
                                                            <h4 className="mb-0">24</h4>
                                                            <p className="mb-0">프로젝트</p>
                                                        </div>
                                                        <div className="avatar me-sm-6">
                                                            <span className="avatar-initial rouned bg-label-secondary text-heading">
                                                                <i className="bx bx-user bx-26px">
                                                                    
                                                                </i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <hr className="d-none d-sm-block d-lg-none me-6"></hr>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <div className="d-flex justify-content-between align-items-center card-widget-1 border-end pd-4 pd-sm-0">
                                                        <div>
                                                            <h4 className="mb-0">24</h4>
                                                            <p className="mb-0">예정</p>
                                                        </div>
                                                        <div className="avatar me-sm-6">
                                                            <span className="avatar-initial rouned bg-label-secondary text-heading">
                                                                <i className="bx bx-user bx-26px">
                                                                    
                                                                </i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <hr className="d-none d-sm-block d-lg-none me-6"></hr>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <div className="d-flex justify-content-between align-items-center card-widget-1 border-end pd-4 pd-sm-0">
                                                        <div>
                                                            <h4 className="mb-0">24</h4>
                                                            <p className="mb-0">진행</p>
                                                        </div>
                                                        <div className="avatar me-sm-6">
                                                            <span className="avatar-initial rouned bg-label-secondary text-heading">
                                                                <i className="bx bx-user bx-26px">
                                                                    
                                                                </i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <hr className="d-none d-sm-block d-lg-none me-6"></hr>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <div className="d-flex justify-content-between align-items-center card-widget-1 border-end pd-4 pd-sm-0">
                                                        <div>
                                                            <h4 className="mb-0">24</h4>
                                                            <p className="mb-0">완료</p>
                                                        </div>
                                                        <div className="avatar me-sm-6">
                                                            <span className="avatar-initial rouned bg-label-secondary text-heading">
                                                                <i className="bx bx-user bx-26px">
                                                                    
                                                                </i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <hr className="d-none d-sm-block d-lg-none me-6"></hr>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>       
                                
                                <div className="mb-2">
                                    <Button variant="primary" onClick={handleShow} className="btn btn-primary">
                                                    + 프로젝트 추가
                                                </Button>
                                    <Offcanvas show={show} onHide={handleClose} placement="end">
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title><b>프로젝트 생성</b></Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <div className="mb-3">
                                                <input type="text" placeholder="프로젝트명을 입력하세요" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className='mb-1'>담당자</label>
                                                <Select
                                                    classNamePrefix="form-select"
                                                    options={Users}
                                                    value={selectedAssignee}
                                                    onChange={setSelectedAssignee}
                                                    placeholder="검색 후 추가"
                                                    styles={selectStyles}
                                                />
                                            </div>
                                            <div className="mb-3 row">
                                                <label className='mb-1'>부서</label>
                                                <Select
                                                    classNamePrefix="form-select"
                                                    options={teams}
                                                    value={selectedTeam}
                                                    onChange={setSelectedTeam}
                                                    placeholder="검색 후 추가"
                                                    styles={selectStyles}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className='mb-1'>참여자</label>
                                                <UserSelect />
                                            </div>
                                            <div className="mb-3 row">
                                                <label className='mb-1'>시작일자</label>
                                                <div>
                                                    <input className="form-control" type="date" value="2021-06-18" id="html5-date-input" />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label className='mb-1'>종료일자</label>
                                                <div>
                                                    <input className="form-control" type="date" value="2021-06-18" id="html5-date-input" />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label className='mb-1'>Git URL</label>
                                                <div>
                                                <input
                                                    className="form-control"
                                                    type="url"
                                                    id="html5-url-input"
                                                />
                                                </div>
                                            </div>
                                            <div>
                                                <label className='mb-1'> 프로젝트 설명</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>

                                {/* Table */}
                                <div className="card">
                                    <div className="table-responsive text-nowrap">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>프로젝트명</th>
                                                    <th>담당자</th>
                                                    <th>참여자</th>
                                                    <th>기간</th>
                                                    <th>상태</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-border-bottom-0">
                                                {/* Angular Project */}
                                                <tr>
                                                    <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>
                                                        <a href='/project/detail'>Angular Project</a></strong></td>
                                                    <td>Albert Cook</td>
                                                    <td>
                                                    <ul className="list-unstyled Assignee-list m-0 avatar-group d-flex align-items-center">
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Christina Parker"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                    </ul>
                                                    </td>
                                                    <td><span>2024.12.05</span></td>
                                                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                                                    <td>
                                                    <div className="dropdown">
                                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"
                                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                                        >
                                                        <a className="dropdown-item" href="#"
                                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                                        >
                                                        </div>
                                                    </div>
                                                    </td>
                                                </tr>
                                                {/* React Project */}
                                                <tr>
                                                    <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                                                    <td>Barry Hunter</td>
                                                    <td>
                                                    <ul className="list-unstyled Assignee-list m-0 avatar-group d-flex align-items-center">
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Christina Parker"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                    </ul>
                                                    </td>
                                                    <td><span>2024.12.05</span></td>
                                                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                                                    <td>
                                                    <div className="dropdown">
                                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"
                                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                                        >
                                                        <a className="dropdown-item" href="#"
                                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                                        >
                                                        </div>
                                                    </div>
                                                    </td>
                                                </tr>
                                                {/* VueJs Project */}
                                                <tr>
                                                    <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                                                    <td>Trevor Baker</td>
                                                    <td>
                                                    <ul className="list-unstyled Assignee-list m-0 avatar-group d-flex align-items-center">
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Christina Parker"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                    </ul>
                                                    </td>
                                                    <td><span>2024.12.05</span></td>
                                                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                                    <td>
                                                    <div className="dropdown">
                                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"
                                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                                        >
                                                        <a className="dropdown-item" href="#"
                                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                                        >
                                                        </div>
                                                    </div>
                                                    </td>
                                                </tr>
                                                {/* Bootstrap Project */}
                                                <tr>
                                                    <td>
                                                    <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                                                    </td>
                                                    <td>Jerry Milton</td>
                                                    <td>
                                                    <ul className="list-unstyled Assignee-list m-0 avatar-group d-flex align-items-center">
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Christina Parker"
                                                        >
                                                        <img src="/devsolutionStudy/public/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                    </ul>
                                                    </td>
                                                    <td><span>2024.12.05</span></td>
                                                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                                    <td>
                                                    <div className="dropdown">
                                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                        </button>
                                                        <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#"
                                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                                        >
                                                        <a className="dropdown-item" href="#"
                                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                                        >
                                                        </div>
                                                    </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <footer className="content-footer footer bg-footer-theme">
                            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                <div className="mb-2 mb-md-0">
                                ©
                                , made with ❤️ by
                                <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder">ThemeSelection</a>
                                </div>
                                <div>
                                <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
                                <a href="https://themeselection.com/" target="_blank" className="footer-link me-4">More Themes</a>
                                <a
                                    href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                                    target="_blank"
                                    className="footer-link me-4"
                                    >Documentation</a
                                >
                                <a
                                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                                    target="_blank"
                                    className="footer-link me-4"
                                    >Support</a>
                                </div>
                            </div>
                            </footer>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProjectList