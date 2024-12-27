import React, { useEffect } from "react";
import "/public/vendor/fonts/boxicons.css";
import "/public/vendor/css/core.css";
import "/public/vendor/css/theme-default.css";
import "/public/css/demo.css";
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "/public/vendor/libs/apex-charts/apex-charts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';

function Layout() {

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">

        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="/" className="app-brand-link">
              <span className="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
            </a>
          </div>
          <div className="menu-inner-shadow"></div>
          <ul className="menu-inner py-1">
            {/* 일정관리 */}
            <li className="menu-item active">
              <a href="/" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">일정관리</div>
              </a>
            </li>
            {/* 업무관리 */}
            <li className="menu-item">
              <a href="#layouts" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">업무관리</div>
              </a>
            </li>
            {/* 프로젝트 관리 */}  
            <li className="menu-item open">
              <a href="#layouts" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">프로젝트 관리</div>
              </a>

              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="layouts-without-menu.html" className="menu-link">
                    <div data-i18n="Without menu">A 프로젝트</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="layouts-without-navbar.html" className="menu-link">
                    <div data-i18n="Without navbar">B 프로젝트</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="layouts-container.html" className="menu-link">
                    <div data-i18n="Container">웹포털 프로젝트</div>
                  </a>
                </li>
              </ul>
            </li>
            {/* 채팅 */}  
            <li className="menu-item">
              <a href="#layouts" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">채팅</div>
              </a>
            </li>
          </ul>
        </aside>
        <div className="layout-page">
        <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar">
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a aria-label='toggle for sidebar' className="nav-item nav-link px-0 me-xl-4" href="#">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a aria-label='dropdown profile avatar' className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
              <div className="avatar avatar-online">
                <img src="/public/img/avatars/1.png" className="w-px-40 h-auto rounded-circle" alt="avatar-image" aria-label='Avatar Image'/>
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a aria-label='go to profile' className="dropdown-item" href="#">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar avatar-online/public/img/avatars/1.png">
                        <img src="/public/img/avatars/1.png" className="w-px-40 h-auto rounded-circle" alt='avatar-image' aria-label='Avatar Image' />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-medium d-block">John Doe</span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <a aria-label='go to profile' className="dropdown-item" href="#">
                  <i className="bx bx-user me-2"></i>
                  <span className="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a aria-label='go to setting' className="dropdown-item" href="#">
                  <i className="bx bx-cog me-2"></i>
                  <span className="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a aria-label='go to billing' className="dropdown-item" href="#">
                  <span className="d-flex align-items-center align-middle">
                    <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                    <span className="flex-grow-1 align-middle ms-1">Billing</span>
                    <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <a aria-label='click to log out' className="dropdown-item" href="#">
                  <i className="bx bx-power-off me-2"></i>
                  <span className="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
            </div>
          </div>
          <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                    <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between pb-0">
                            <div className="card-title mb-0">
                                <h5 className="m-0 me-2">Order Statistics</h5>
                                <small className="text-muted">42.82k Total Sales</small>
                            </div>
                            <div className="dropdown">
                                <button aria-label='Click me'
                                    className="btn p-0"
                                    type="button"
                                    id="orederStatistics"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="orederStatistics"
                                >
                                    <a aria-label="select all " className="dropdown-item" href="#">
                                        Select All
                                    </a>
                                    <a aria-label="refresh" className="dropdown-item" href="#">
                                        Refresh
                                    </a>
                                    <a aria-label="share" className="dropdown-item" href="#">
                                        Share
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-column align-items-center gap-1">
                                    <h2 className="mb-2">8,258</h2>
                                    <span>Total Orders</span>
                                </div>
                                <div id="orderStatisticsChart"></div>
                            </div>
                            <ul className="p-0 m-0">
                                <li className="d-flex mb-4 pb-1">
                                    <div className="avatar flex-shrink-0 me-3">
                                        <span className="avatar-initial rounded bg-label-primary">
                                            <i className="bx bx-mobile-alt"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                        <div className="me-2">
                                            <h6 className="mb-0">Electronic</h6>
                                            <small className="text-muted">Mobile, Earbuds, TV</small>
                                        </div>
                                        <div className="user-progress">
                                            <small className="fw-medium">82.5k</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 pb-1">
                                    <div className="avatar flex-shrink-0 me-3">
                                        <span className="avatar-initial rounded bg-label-success">
                                            <i className="bx bx-closet"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                        <div className="me-2">
                                            <h6 className="mb-0">Fashion</h6>
                                            <small className="text-muted">
                                                T-shirt, Jeans, Shoes
                                            </small>
                                        </div>
                                        <div className="user-progress">
                                            <small className="fw-medium">23.8k</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 pb-1">
                                    <div className="avatar flex-shrink-0 me-3">
                                        <span className="avatar-initial rounded bg-label-info">
                                            <i className="bx bx-home-alt"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                        <div className="me-2">
                                            <h6 className="mb-0">Decor</h6>
                                            <small className="text-muted">Fine Art, Dining</small>
                                        </div>
                                        <div className="user-progress">
                                            <small className="fw-medium">849k</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex">
                                    <div className="avatar flex-shrink-0 me-3">
                                        <span className="avatar-initial rounded bg-label-secondary">
                                            <i className="bx bx-football"></i>
                                        </span>
                                    </div>
                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                        <div className="me-2">
                                            <h6 className="mb-0">Sports</h6>
                                            <small className="text-muted">
                                                Football, Cricket Kit
                                            </small>
                                        </div>
                                        <div className="user-progress">
                                            <small className="fw-medium">99</small>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

