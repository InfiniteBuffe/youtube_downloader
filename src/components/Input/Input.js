import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <>
            <div className="Container">
                <div className="Input__box">
                    <input className="Input" placeholder={props.placeholder} />
                </div>
            </div>
        </>
    )
};

export default Input;