import React, { useState } from 'react'
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"
import "boxicons/css/boxicons.min.css";

function ProjectModify() {

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

                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <h4 className="fw-bold py-3 mb-4">Angular Project</h4>


                                <div className="row mb-5">
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <a href="javascript:void(0)" class="btn btn-outline-primary">수정</a>
                                                <h5 className="card-title">Angular Project</h5>
                                                <div>
                                                    <p>
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                    </p>
                                                </div>
                                                <div className="mb-3">
                                                    <label><b>담당자</b></label>
                                                    <p>홍길동</p>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label><b>부서</b></label>
                                                    <p>개발팀</p>                                
                                                </div>
                                                <div className="mb-3">
                                                    <label><b>참여자</b></label>
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
                                                </div>
                                                <div className="mb-3 row">
                                                    <label><b>시작일자</b></label>
                                                    <p>2024-12-31</p>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label><b>종료일자</b></label>
                                                    <p>2025-01-31</p>
                                                </div>
                                                <div className="mb-3 row">
                                                    <label><b>Git URL</b></label>
                                                    <div className="col-md-10">
                                                        <p>https://www.naver.com/</p>
                                                    </div>
                                                </div>
                                                <img
                                                    className="img-fluid d-flex mx-auto my-4"
                                                    src="/img/elements/4.jpg"
                                                    alt="Card image cap"
                                                />
                                                <div className="table-responsive text-nowrap">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>주요기능</th>
                                                                <th>참여자</th>
                                                                <th>진행률</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-border-bottom-0">
                                                            {/* Angular Project */}
                                                            <tr>
                                                                <td><i className="fab fa-angular fa-lg text-danger me-3"></i>
                                                                <strong>회원</strong></td>
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
                                                                <td>
                                                                {/* <div class="progress">
                                                                    <div
                                                                        className="progress-bar"
                                                                        role="progressbar"
                                                                        style="width: 25%"
                                                                        aria-valuenow="25"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100"
                                                                    >
                                                                        25%
                                                                    </div>
                                                                </div> */}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>코드리뷰</strong></td>
                                                                <td>
                                                                16h
                                                                </td>
                                                                <td><span>2024.12.05</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <h4>칸반보드</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProjectModify