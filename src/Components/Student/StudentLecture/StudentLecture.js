import React, { useContext } from 'react';
import { host, lectureContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const StudentLecture = () => {
    const [lectures, setLectures] = useContext(lectureContext);

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
            <div className='container p-3'>
                <h2>Lecture</h2>
                <hr />
                <div>
                    {
                        lectures.map(lecture =>
                            <div className='row pt-4 border mb-3'>
                                <div className='col-3 d-flex justify-content-center'>
                                    <div className='text-center'>
                                        {/* month */}
                                        <h5 className='monthColor'>{getFullMonthName2(lecture.date)}</h5>
                                        {/* date */}
                                        <h1>{selectDate(lecture.date)}</h1>
                                    </div>
                                </div>
                                <div className='col-7 text-center'>
                                    <h4>{lecture.name}</h4>
                                    <p>Lecture {lecture.id}</p>
                                </div>
                                <div className='col-2'>
                                    <a className='btn btn-warning' href={`${host}${lecture.attachment}`} target="_blank">See Details</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default StudentLecture;