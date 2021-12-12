import React from 'react';
import { Link } from 'react-router-dom';

const TCourse = () => {
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>ECE-101</td>
                        <td>Computer Architecture</td>
                        <td>ECE-5th semester</td>
                        <td>11.00 am - 12.00pm</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default TCourse;