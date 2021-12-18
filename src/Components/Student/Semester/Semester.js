import React from 'react';
import { Link } from 'react-router-dom';
import './Semester.css'

const Semester = () => {
    return (
        <div className='container pt-4 pb-4' style={{color: '#fff'}}>
            <h2>Semesters</h2>
            <hr />
            <div className="container text-center">
                <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                        <div className="p-3 border semesterBtnStyle">1st Semester</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border semesterBtnStyle">2nd Semester</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border semesterBtnStyle">3rd Semester</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border semesterBtnStyle">4th Semester</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border semesterBtnStyle">5th Semester</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border semesterBtnStyle">6th Semester</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border semesterBtnStyle">7th Semester</div>
                    </div>
                    <div className="col">
                        <div className="p-3 border semesterBtnStyle cur">
                            <Link style={{color: '#fff'}} to='/studentLecture'>8th Semester</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='row text-center'>
                <div className='col-6'>
                    <h3>Year</h3>
                </div>
                <div className='col-6'>
                    <h5 >Semester</h5>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <h3 className='yearBtnStyle'>1st Year</h3>
                </div>
                <div className='col-6 d-flex justify-content-center'>
                    <div>
                        <h5 className='semesterBtnStyle'>1st Semester</h5>
                        <h5 className='semesterBtnStyle'>2nd Semester</h5>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Semester;