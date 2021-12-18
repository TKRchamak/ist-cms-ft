import React from 'react';
import './CourseTable.css'

const CourseTable = () => {
    return (
        <div className='m-5'>
            <div className=''>
                <h3 className='text-center'>Semester I</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col-3">Course Code</th>
                            <th scope="col-6">Course Title</th>
                            <th scope="col-3">Credit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseTable;