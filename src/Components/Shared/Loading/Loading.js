import React from 'react';
import "./Loading.css"

const Loading = () => {
    return (
        <div className='loading'>
            <div className="ringContainer">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <p>Loading ...</p>
            </div>
        </div>
    );
};

export default Loading;