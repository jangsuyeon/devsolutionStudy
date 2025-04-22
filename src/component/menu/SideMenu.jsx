import React, { useState } from 'react'
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuGroup';
import Logo from "/devsolutionStudy/public/img/logo/logoImg.png"

const SideMenu = () => {
    return (
        <aside id="layout-menu" className="menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="/devsolutionStudy/" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        <img src={Logo} alt='logo' width={30} />
                    </span>
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">Planit</span>
                </a>

                <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
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
    );
};

export default SideMenu;