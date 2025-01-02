import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MenuItem = ({ icon, title, href }) => {
    return (
        <li className="menu-item">
            <Link to={href} className="menu-link">
                <i className={`menu-icon tf-icons ${icon}`}></i>
                <span>{title}</span>
            </Link>
        </li>
    );
};

export default MenuItem