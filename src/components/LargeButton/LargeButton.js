import React from 'react';
import './LargeButton.css';

const LargeButton = (props) => {
    return (
        <>
            <div className="Container">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="LargeButton__box">
                        <button className="LargeButton">
                            <div className="LargeButton__text">
                                {props.name}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default LargeButton;