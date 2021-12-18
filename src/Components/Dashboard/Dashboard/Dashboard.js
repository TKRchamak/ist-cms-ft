import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h2 style={{ color: "#e66702" }}>Super Admin</h2>
                <hr />
                <div className='container pt-5 pb-5'>
                    <div className='row text-center pt-5'>
                        <div className="dep col-4 ">
                            <Link to="/ece">
                                <div className='depStyle pt-5 pb-5'>
                                    <h2>Dept</h2>
                                    <p>All department is there</p>
                                </div>
                            </Link>
                        </div>
                        <div className="dep col-4">
                            <Link to='/allTeacher'>
                                <div className='depStyle pt-5 pb-5'>
                                    <h2>Teacher</h2>
                                    <p>All teacher Detail</p>
                                </div>
                            </Link>
                        </div>
                        <div className="dep col-4">
                            <Link to="/allStudent">
                                <div className='depStyle pt-5 pb-5'>
                                    <h2>Student</h2>
                                    <p>All Student Data</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;