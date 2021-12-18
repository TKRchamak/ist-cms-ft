import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import pdf from '../file/notice_2849_pub_date_02112021.pdf';
import { host, noticeContext } from '../../App';
import { Link } from 'react-router-dom';


const Notice = () => {

    const [allNotice, setAllNotice] = useContext(noticeContext);
    const fastFourNotice = allNotice.slice(0, 4);

    const getFullMonthName2 = (date) => {
        const fullDate = new Date(date);
        const monthNumber = fullDate.getMonth();
        const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthName[monthNumber];
    }
    const selectDate = (date) => {
        const fullDate = new Date(date);
        return fullDate.getDate();
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='container mt-3'>
                <h2>All Notices</h2>
                <hr />
            </div>
            <div className='container mt-4'>
                {
                    allNotice.map(notice =>
                        <div className='row border shadow-sm p-3 mb-5 bg-body rounded'>
                            <div className='col-3 d-flex justify-content-center'>
                                <div className='text-center'>
                                    {/* month */}
                                    <h5 className='monthColor'>{getFullMonthName2(notice.date)}</h5>
                                    {/* date */}
                                    <h1>{selectDate(notice.date)}</h1>
                                </div>
                            </div>
                            <div className='col-7'>
                                <h4>{notice.name}</h4>
                                {/* <p>December 5th, 2021 - 8:00am to December 26th, 2021 - 5:00pm</p> */}
                            </div>
                            <div className='col-2'>
                                    <a className='btn btn-warning' href={`${host}${notice.attachment}`} target="_blank">See Details</a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Notice;