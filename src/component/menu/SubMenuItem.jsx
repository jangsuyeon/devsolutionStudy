import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SubmenuItem = ({ title, href }) => {
    return (
        <li className="menu-item">
            <Link to={href} className="menu-link">
                <span>{title}</span>
            </Link>
        </li>
    );
};


export default SubmenuItem