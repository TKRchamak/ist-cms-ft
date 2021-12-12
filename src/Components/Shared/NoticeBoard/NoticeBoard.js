import React from 'react';
import './NoticeBoard.css'

const NoticeBoard = () => {
    return (
        <div className='noticeBar'>
            <div className='container'>
                <div>
                    <h2 style={{color: "#E66702"}}>Announcements</h2>
                    <hr />
                </div>
                <div className='row pt-3'>
                    <div className='col-4 d-flex justify-content-center'>
                        <div className='text-center'>
                            <h5 className='monthColor'>DECEMBER</h5>
                            <h1>5</h1>
                        </div>
                    </div>
                    <div className='col-8'>
                        <h4>Final Examinations (ECE 5th Semester)</h4>
                        <p>December 5th, 2021 - 8:00am to December 26th, 2021 - 5:00pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;