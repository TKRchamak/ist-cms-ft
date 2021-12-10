import React from 'react';
import './Course.css'

const Course = () => {
    return (
        <div className='container pt-5 pb-5'>
            <div>
                <h2 style={{color: "#e66702"}}>Department</h2>
                <hr />
            </div>
            <div className='row text-center pt-5'>
                <div className="dep col-4 ">
                    <div className='depStyle pt-5 pb-5'>
                        <h2>ECE</h2>
                        <p>Electronics & Communication Engineering</p>
                    </div>
                </div>
                <div className="dep col-4">
                    <div className='depStyle pt-5 pb-5'>
                        <h2>CSE</h2>
                        <p>Computer Science & Engineering</p>
                    </div>
                </div>
                <div className="dep col-4">
                    <div className='depStyle pt-5 pb-5'>
                        <h2>BBA</h2>
                        <p>Bachelor of Business Administration</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;