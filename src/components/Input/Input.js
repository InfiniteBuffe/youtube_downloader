import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <>
            <div className="Container">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="Input__box">
                        <input className="Input" placeholder={props.placeholder} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Input;