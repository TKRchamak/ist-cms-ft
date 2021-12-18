import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const TCourse = ({ courses }) => {
    return (
        <div className='container'>
            <h3>Courses</h3>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Course No</th>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Time</th>
                        <th scope="col">Go to Course</th>
                    </tr>
                </thead>
                <tbody>
                {
                    courses.map((course) => 
                            <tr key={course.code}>
                                <th scope="row">1</th>
                                <td>{course.code}</td>
                                <td>{course.courseName}</td>
                                <td>{course.semester}</td>
                                <td>{course.routine}</td>
                                <td>
                                    <Link to={'/classLecture'} className='btn btn-warning'>
                                        More
                                        <FontAwesomeIcon className='ms-2' icon={faArrowAltCircleRight} />
                                    </Link>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default TCourse;