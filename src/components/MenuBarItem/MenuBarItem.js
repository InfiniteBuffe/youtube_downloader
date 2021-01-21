import React, { useState, useEffect } from 'react';
import './MenuBarItem.css';

const MenuBarItem = (props) => {
    const [active, setActive] = useState('menuBar__item');
    useEffect(()=>{
        if (props.active !== undefined) {
            setActive('menuBar__item menuBar__item--active')
        }
    },[])

    return (
        <>
            <div className={active}>
                <div className="name">
                    {props.name}
                </div>
            </div>
        </>
    )
};

export default MenuBarItem;