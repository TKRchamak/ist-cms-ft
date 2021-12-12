import React from 'react';
import './Semester.css'

const Semester = () => {
    return (
        <div className='container pt-4 pb-4'>
            <h2>Semesters</h2>
             <hr />
            <div className='d-flex justify-content-between pt-3'>
                <p className='semesterBtnStyle'>1st Semester</p>
                <p className='semesterBtnStyle'>2nd Semester</p>
                <p className='semesterBtnStyle'>3rd Semester</p>
                <p className='semesterBtnStyle'>4th Semester</p>
                <p className='semesterBtnStyle'>5th Semester</p>
                <p className='semesterBtnStyle cur'>6th Semester</p>
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