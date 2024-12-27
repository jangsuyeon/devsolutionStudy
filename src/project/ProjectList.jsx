import React, { useState } from 'react'
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"
import "/public/css/project/projectList.css"

import Modal from "./projectAdd"

function ProjectList(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <div className="layout-wrapper">
                <div className="layout-container layout-content-navbar">
                    {/* Menu */}
                    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                        <div className="app-brand demo">
                            <a href="index.html" className="app-brand-link">
                            <span className="app-brand-logo demo">
                                <svg
                                width="25"
                                viewBox="0 0 25 42"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                <defs>
                                    <path
                                    d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z"
                                    id="path-1"
                                    ></path>
                                    <path
                                    d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z"
                                    id="path-3"
                                    ></path>
                                    <path
                                    d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z"
                                    id="path-4"
                                    ></path>
                                    <path
                                    d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z"
                                    id="path-5"
                                    ></path>
                                </defs>
                                <g id="g-app-brand" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
                                    <g id="Icon" transform="translate(27.000000, 15.000000)">
                                        <g id="Mask" transform="translate(0.000000, 8.000000)">
                                        <mask id="mask-2" fill="white">
                                            <use xlinkHref="#path-1"></use>
                                        </mask>
                                        <use fill="#696cff" xlinkHref="#path-1"></use>
                                        <g id="Path-3" mask="url(#mask-2)">
                                            <use fill="#696cff" xlinkHref="#path-3"></use>
                                            <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-3"></use>
                                        </g>
                                        <g id="Path-4" mask="url(#mask-2)">
                                            <use fill="#696cff" xlinkHref="#path-4"></use>
                                            <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-4"></use>
                                        </g>
                                        </g>
                                        <g
                                        id="Triangle"
                                        transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) "
                                        >
                                        <use fill="#696cff" xlinkHref="#path-5"></use>
                                        <use fillOpacity="0.2" fill="#FFFFFF" xlinkHref="#path-5"></use>
                                        </g>
                                    </g>
                                    </g>
                                </g>
                                </svg>
                            </span>
                            <span className="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
                            </a>

                            <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                            <i className="bx bx-chevron-left bx-sm align-middle"></i>
                            </a>
                        </div>

                        <div className="menu-inner-shadow"></div>

                        <ul className="menu-inner py-1 ps ps--active-y">
                            <li className="menu-item">
                            <a href="#" className="menu-link">
                                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                <div data-i18n="Schedule">일정 관리</div>
                            </a>
                            </li>
                            <li className="menu-item">
                            <a href="#" className="menu-link">
                                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                                <div data-i18n="Work">업무 관리</div>
                            </a>
                            </li>
                            <li className="menu-item active open">
                            <a href="#" className="menu-link menu-toggle">
                                <i className="menu-icon tf-icons bx bx-layout"></i>
                                <div data-i18n="Project">프로젝트 관리</div>
                            </a>

                            <ul className="menu-sub">
                                <li className="menu-item">
                                <a href="#" className="menu-link">
                                    <div data-i18n="Without menu">A 프로젝트</div>
                                </a>
                                </li>
                                <li className="menu-item">
                                <a href="#" className="menu-link">
                                    <div data-i18n="Without navbar">B 프로젝트</div>
                                </a>
                                </li>
                            </ul>
                            </li>
                        </ul>
                    </aside>

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
                                            <img src="/img/avatars/1.png" alt="Avatar" className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar avatar-online">
                                                        <img src="/img/avatars/1.png" alt="Avatar" className="w-px-40 h-auto rounded-circle" />
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
                                
                                {/* Table */}
                                <div className="card">
                                    <div>
                                        <button className="btn-project mb-4" 
                                        onClick={openModal}>+ 프로젝트 생성</button>
                                    </div>
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
                                                    <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong></td>
                                                    <td>Albert Cook</td>
                                                    <td>
                                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller"
                                                        >
                                                        <img src="/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson"
                                                        >
                                                        <img src="/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Christina Parker"
                                                        >
                                                        <img src="/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
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
                                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller"
                                                        >
                                                        <img src="/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson"
                                                        >
                                                        <img src="/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Christina Parker"
                                                        >
                                                        <img src="/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
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
                                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller"
                                                        >
                                                        <img src="/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson"
                                                        >
                                                        <img src="/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Christina Parker"
                                                        >
                                                        <img src="/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
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
                                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller"
                                                        >
                                                        <img src="/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson"
                                                        >
                                                        <img src="/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                                        </li>
                                                        <li
                                                        data-bs-toggle="tooltip"
                                                        data-popup="tooltip-custom"
                                                        data-bs-placement="top"
                                                        className="avatar avatar-xs pull-up"
                                                        title="Christina Parker"
                                                        >
                                                        <img src="/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
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