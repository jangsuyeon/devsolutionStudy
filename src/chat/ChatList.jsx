import React, { useState } from 'react'
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"
import "/public/css/project/projectList.css"
import "/public/css/project/projectAdd.css"
import "/public/css/chat/chat.css"
import "boxicons/css/boxicons.min.css"

import Profile1 from "../../public/img/avatars/1.png"
import Profile6 from "../../public/img/avatars/6.png"


function ChatList() {
    
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
                                            <img src={Profile1} alt="Avatar" className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar avatar-online">
                                                        <img src={Profile1} alt="Avatar" className="w-px-40 h-auto rounded-circle" />
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
                                <div className="app-chat card overflow-hidden">
                                    <div className="row g-0">
                                        {/* Chat */}
                                        <div className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end" id="app-chat-contacts">
                                            <div className="sidebar-header px-6 border-bottom d-flex align-items-center">
                                                <div className="d-flex align-items-center me-6 me-lg-0">
                                                    <div className="flex-shrink-0 avatar avatar-online me-4"
                                                        
                                                        
                                                        data-target="#app-chat-sidebar-left"
                                                    >
                                                        <img src={Profile1} alt="Avatar" className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                    <div className="flex-grow-1 input-group input-group-merge rounded-pill">
                                                        <span className="input-group-text" id="basic-addon-search31">
                                                            <i className="icon-base bx bx-search icon-sm"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <i className="icon-base bx bx-x icon-lg cursor-pointer position-absolute top-50 end-0 translate-middle d-lg-none d-block"
                                                    data-overlay
                                                    
                                                    data-target="#app-chat-contacts"
                                                ></i>
                                            </div>
                                            <div className="sidebar-body ps ps--active-y">
                                                {/* Chats */}
                                                <ul className="list-unstyled chat-contact-list py-2 mb-0" id="chat-list">
                                                    <li className="chat-contact-list-item chat-contact-list-item-title mt-0">
                                                        <h5 className="text-primary mb-0">Chats</h5>
                                                    </li>
                                                    <li className="chat-contact-list-item chat-list-item-0 d-none">
                                                        <h6 className="text-body-secondary mb-0">No Chats Found</h6>
                                                    </li>
                                                    <li className="chat-contact-list-item mb-1">
                                                        <a className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 avatar asvatar-online">
                                                                <img src={Profile1} alt="Avatar" className="rounded-circle"></img>
                                                            </div>
                                                            <div className="chat-contact-info flex-grow-1 ms-4">
                                                                <h6 className="chat-contact-name text-truncate m-0 fw-normal">Waldmar Mannering</h6>
                                                                <small className="chat-contact-list-item-time">5분</small>
                                                            </div>
                                                            <small className="chat-contact-status text-truncate">안녕하세요</small>
                                                        </a>
                                                    </li>
                                                    <li className="chat-contact-list-item mb-1">
                                                        <a className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 avatar asvatar-online">
                                                                <img src={Profile6} alt="Avatar" className="rounded-circle"></img>
                                                            </div>
                                                            <div className="chat-contact-info flex-grow-1 ms-4">
                                                                <h6 className="chat-contact-name text-truncate m-0 fw-normal">Felecia Rower</h6>
                                                                <small className="chat-contact-list-item-time">30분</small>
                                                            </div>
                                                            <small className="chat-contact-status text-truncate">안녕하세요🙌</small>
                                                        </a>
                                                    </li>
                                                    <li className="chat-contact-list-item mb-1">
                                                        <a className="d-flex align-items-center">
                                                            <div className="flex-shrink-0 avatar asvatar-online">
                                                                <span className="avatar-initial rounded-circle bg-label-succes">CM</span>
                                                            </div>
                                                            <div className="chat-contact-info flex-grow-1 ms-4">
                                                                <h6 className="chat-contact-name text-truncate m-0 fw-normal">Calvin Moore</h6>
                                                                <small className="chat-contact-list-item-time">1일</small>
                                                            </div>
                                                            <small className="chat-contact-status text-truncate">안녕하세요</small>
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* Group Chats */}
                                                <ul className="list-unstyled chat-contact-list mb-0 py-2" id="contact-list">
                                                    <li className="chat-contact-list-item chat-contact-list-item-title mt-0">
                                                        <h5 className="text-primary mb-0">그룹</h5>
                                                    </li>
                                                    <li className="chat-contact-list item contact-list-item-0 d-none">
                                                        <h6 className="text-body-secondary mb-0">그룹 채팅이 없습니다</h6>
                                                    </li>
                                                    <li className="chat-contact-list-item">
                                                        <a className="d-flex align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-shrink-0 avatar">
                                                                    <span className="avatar-initial rounded-circle bg-label-success">A</span>
                                                                </div>
                                                            </div>
                                                            <div className="chat-contact-info flex-grow-1 ms-4">
                                                                <h6 className="chat-contact-name text-truncate m-0 fw-normal">프로젝트 A</h6>
                                                                <small className="chat-contact-status text-truncate">홍길동 외 4명</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* <div className="px__rail-x" style={{ left: "0px", bottom: "0px" }}>
                                                    <div className="px__thumb-x" tabIndex={0} style={{ left: "0px", width: "0px" }}></div>
                                                </div>
                                                <div className="px__rail-y" style={{ top: "0px", height: "252px", right: "0px" }}>
                                                    <div className="px__thumb-y" tabIndex={0} style={{ top: "0px", height: "62px" }}></div>
                                                </div> */}
                                            </div>
                                        </div>
                                        {/* Chat History */}
                                        <div className="col app-chat-history d-block" id="app-chat-history">
                                            <div className="chat-history-wrapper">
                                                <div className="chat-history-header border-bottom">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="d-flex overflow-hidden align-times-center">
                                                            <i className="icon-base bx bx-menu icon-lg cursor-pointer d-lg-none d-block me-4" 
                                                                
                                                                data-overlay data-target="#app-chat-contacts"></i>
                                                            <div className="flex-shrink-0 avatar avatar-online">
                                                                <img src={Profile6} alt="Avatar" className="rounded-circle"
                                                                    
                                                                    data-overlay data-target="#app-chat-sidebar-right"></img>
                                                            </div>
                                                            <div className="chat-contact-info flex-grow-1 ms-4">
                                                                <h6 className="m-0 fw-normal">Felecia Rower</h6>
                                                                <small className="user-status text-body">NextJS developer</small>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <span className="btn btn-text-secondary text-secondary cursor-pointer d-sm-inline-flex d-none me-1 btn-icon rounded-pill">
                                                                <i className="icon-base bx bx-phone icone-md"></i>
                                                            </span>
                                                            <span className="btn btn-text-secondary text-secondary cursor-pointer d-sm-inline-flex d-none me-1 btn-icon rounded-pill">
                                                                <i className="icon-base bx bx-search icone-md"></i>
                                                            </span>
                                                            <div className="dropdown">
                                                                <button className="btn btn-icon btn-text-secondary text-secondary rounded-pill drowdown-toggle hide-arrow"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="true"
                                                                        id="chat-header-actions">
                                                                            <i className="icon-base bx bx-dots-vertical-rounded icon-md"></i>
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end"
                                                                    aria-labelledby="chat-header-actions">
                                                                        <a className="dropdown-menue" href="#">알림 끄기</a>
                                                                        <a className="dropdown-menue" href="#">채팅방 나가기</a>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>
                                                </div>
                                                <div className="chat-history-body ps ps--active-y">
                                                    <ul className="list-unstyled chat-history">
                                                        <li className="chat-message chat-message-right">
                                                            <div className="d-flex overflow-hidden">
                                                                <div className="chat-message-wrapper flex-grow-1">
                                                                    <div className="chat-message-text">
                                                                        <p className="mb-0">프로젝트 언제까지인가요?</p>
                                                                    </div>
                                                                    <div className="text-end text-body-secondary mt-1">
                                                                        <i className="icon-base bx bx-check-double icon-16px text-success me-1"></i>
                                                                        <small>10:00 AM</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="chat-message">
                                                            <div className="d-flex overflow-hidden">
                                                            <div className="chat-message-wrapper flex-grow-1">
                                                                    <div className="chat-message-text">
                                                                        <p className="mb-0">2월 14일까지요</p>
                                                                        <p className="mb-0">어디까지 진행되셨나요?</p>
                                                                    </div>
                                                                    <div className="text-body-secondary mt-1">
                                                                        <small>10:10 AM</small>
                                                                    </div>
                                                                </div>
                                                            </div> 
                                                        </li>
                                                        <li className="chat-message chat-message-right">
                                                            <div className="d-flex overflow-hidden">
                                                                <div className="chat-message-wrapper flex-grow-1">
                                                                    <div className="chat-message-text">
                                                                        <p className="mb-0">50% 정도 완성했어요</p>
                                                                    </div>
                                                                    <div className="text-end text-body-secondary mt-1">
                                                                        <i className="icon-base bx bx-check-double icon-16px text-success me-1"></i>
                                                                        <small>10:11 AM</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="ps__rail-x" style={{left: '0px', bottom: '-979px'}}>
                                                        <div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}}></div>
                                                    </div>
                                                    <div className="ps__rail-y" style={{top: '979px', right: '0px', height: '237px'}}>
                                                        <div className="ps__thumb-y" tabIndex={0} style={{top: '191px', height:'46px'}}></div>
                                                    </div>
                                                </div>
                                                <div className="chat-history-footer shadow-xs">
                                                    <form className="form-send-message d-flex justify-content-between align-items-center">
                                                        <input className="form-control message-input border-0 me-4 shadow-none" placeholder="메시지를 입력하세요"></input>
                                                        <div className="message-actions d-flex align-items-center">
                                                            <label for="attach-doc" className="form-label mb-0">
                                                                <span className="btn btn-text-secondary btn-icon rounded-pill cursor-pointer mx-1">
                                                                    <i className="icon-base bx bx-paperclip icon-md text-heading"></i>
                                                                </span>
                                                                <input type="file" id="attach-doc" hidden></input>
                                                            </label>
                                                            <button className="btn btn-primary d-flex send-msg-btn">
                                                                <span className="align-middle d-md-inline-block d-none">보내기</span>
                                                                <i className="icon-base bx bx-paper-plane icon-sm ms-md-2 ms-0"></i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="app-overlay"></div>
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


export default ChatList