import React, { useEffect } from 'react';
import './Title.css';

const Title = (props) => {
    return (
        <>
        <div className="Container">
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="Title" >
                    <div className="Title__text">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Title;