import React from 'react';
import './MenuBar.css';

const MenuBar = ({children}) => {
    return (
        <>
            <div className="menuBar">
                {children}
            </div>
        </>
    )
};

export default MenuBar;