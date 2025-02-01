import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="taskbar">
            <div className="taskbar-item">Home</div>
            <div className="taskbar-item">About</div>
            <div className="taskbar-item">Projects</div>
            <div className="taskbar-item">Contact</div>
        </div>
    );
};

export default Menu;