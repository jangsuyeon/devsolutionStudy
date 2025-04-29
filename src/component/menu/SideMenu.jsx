import React, { useState } from 'react'
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuGroup';
import Logo from "../../../public/img/logo/logoImg.png"
import 'boxicons'
import 'boxicons/css/boxicons.min.css';




const SideMenu = () => {
    // 메뉴 상태를 관리하는 useState 추가
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 메뉴 토글 함수
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            {/* 모바일에서 메뉴 열기 버튼 */}
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a 
                    className="nav-item nav-link px-0 me-xl-4" 
                    href="#"
                    onClick={toggleMenu} // 메뉴 토글 클릭 이벤트
                >
                    <box-icon name='menu' color='#697a8d' size="lg"></box-icon>
                </a>
            </div>

            {/* #layout-menu의 부모에 layout-menu-expanded 클래스 추가 */}
            <div className={`layout-menu-wrapper ${isMenuOpen ? 'layout-menu-expanded' : ''}`}>
                <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                    <div className="app-brand demo">
                        <a href="/devsolutionStudy/" className="app-brand-link">
                            <span className="app-brand-logo demo">
                                <img src={Logo} alt='logo' width={30} />
                            </span>
                            <span className="app-brand-text demo menu-text fw-bolder ms-2">Planit</span>
                        </a>

                        {/* 메뉴 닫기 버튼 */}
                        <a 
                            href="#" 
                            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                            onClick={toggleMenu} // 메뉴 토글 클릭 이벤트
                            style={{color: 'black', display: 'inline-block'}}
                        >
                            {/* <i className="bx bx-chevron-left bx-sm align-middle"></i> */}
                            <box-icon name='x' color='#fff'></box-icon>

                        </a>
                    </div>
                    <div className="menu-inner-shadow"></div>

                    <ul className="menu-inner py-1 ps ps--active-y">
                        {/* 서브메뉴 없을 때 */}
                        <MenuItem icon="bx-home-circle" title="칸반보드" href="/devsolutionStudy/KanbanBoard" />
                        <MenuItem icon="bx-home-circle" title="업무 관리" href="/devsolutionStudy/project" />

                        {/* 서브메뉴 있을 때 */}
                        <MenuItemGroup
                            title="프로젝트 관리"
                            icon="bx-layout"
                            subMenuItems={[
                                { title: "프로젝트", href: "/devsolutionStudy/project" },
                                { title: "코드리뷰", href: "/devsolutionStudy/codeReview" },
                            ]}
                        />
                    </ul>
                </aside>
            </div>
        </>
    );
};

export default SideMenu;
