import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = () => {
    const ami = `to="/ece"`
    return (
        <div className='container pt-5 pb-5'>
            <div>
                <h2 style={{ color: "#e66702" }}>Department</h2>
                <hr />
            </div>
            <div className='row text-center pt-5'>
                <div className="dep col-4 ">
                    <Link to="/ece">
                        <div className='depStyle pt-5 pb-5'>
                            <h2>ECE</h2>
                            <p>Electronics & Communication Engineering</p>
                        </div>
                    </Link>
                </div>
                <div className="dep col-4">
                    <Link to='/cse'>
                        <div className='depStyle pt-5 pb-5'>
                            <h2>CSE</h2>
                            <p>Computer Science & Engineering</p>
                        </div>
                    </Link>
                </div>
                <div className="dep col-4">
                    <Link to="/bba">
                        <div className='depStyle pt-5 pb-5'>
                            <h2>BBA</h2>
                            <p>Bachelor of Business Administration</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;