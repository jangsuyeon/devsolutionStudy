import React, { useState } from 'react';
import SubmenuItem from './SubMenuItem';

const MenuItemGroup = ({ title, icon, subMenuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className={`menu-item ${isOpen ? 'active open' : ''}`}>
            <a href="#" className="menu-link menu-toggle" onClick={toggleMenu}>
                <i className={`menu-icon tf-icons ${icon}`}></i>
                <div>{title}</div>
            </a>
            <ul className="menu-sub">
                {subMenuItems.map((item) => (
                    <SubmenuItem key={item.title} {...item} />
                ))}
            </ul>
        </li>
    );
};

export default MenuItemGroup