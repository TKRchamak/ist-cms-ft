import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import tPic from '../Images/rakibSir.jpg';
import tPic2 from '../Images/LitonSir.png'
import './ECE.css'
import Footer from '../Shared/Footer/Footer';
import CourseTable from '../Shared/CourseTable/CourseTable';
import ece1 from '../Images/syllabus/ece/ece_1st_sem.png';
import ece2 from '../Images/syllabus/ece/ece_2nd_sem.png';
import ece3 from '../Images/syllabus/ece/ece_3rd_sem.png';
import ece4 from '../Images/syllabus/ece/ece_4th_sem.png';
import ece5 from '../Images/syllabus/ece/ece_5th_sem.png';
import ece6 from '../Images/syllabus/ece/ece_6th_sem.png';
import ece7 from '../Images/syllabus/ece/ece_7th_sem.png';
import ece8 from '../Images/syllabus/ece/ece_8th_sem.png';
import { host, teacherContext } from '../../App';
import { Link } from 'react-router-dom';

const ECE = () => {

    const [teachers, setTeachers] = useContext(teacherContext);
    const fourTeacher = teachers.slice(0, 4)
    console.log(fourTeacher);
    const syllabusPic = [ece1, ece2, ece3, ece4, ece5, ece6, ece7, ece8];


    return (
        <div>
            <Navbar></Navbar>
            <div className='container'>
                <div className='pt-4'>
                    <h2>Introduction of ECE</h2>
                    <hr />
                    <p>Electronic engineering (also called electronics and communications engineering) is an electrical engineering discipline which utilizes nonlinear and active electrical components (such as semiconductor devices, especially transistors and diodes) to design electronic circuits, devices, integrated circuits and their systems. The discipline typically also designs passive electrical components, usually based on printed circuit boards.

                        Electronics is a subfield within the wider electrical engineering academic subject but denotes a broad engineering field that covers subfields such as analog electronics, digital electronics, consumer electronics, embedded systems and power electronics. Electronics engineering deals with implementation of applications, principles and algorithms developed within many related fields, for example solid-state physics, radio engineering, telecommunications, control systems, signal processing, systems engineering, computer engineering, instrumentation engineering, electric power control, robotics, and many others.</p>
                </div>

                {/* Achievement */}
                {/* <div>
                    <h3>Achievement</h3>
                    <hr />
                </div> */}

                {/* Faculty Members */}
                <div className='pt-4 pb-4 mb-5 mt-5'>
                    <div className="bg-dark">
                        <div className="container pb-5">
                            <h2 style={{ color: "#ffffff", fontSize: "bold" }} className="p-3 text-center">Meet Our <span className="text-style">Faculty Members</span> </h2>
                            <div className="d-flex ">
                                {
                                    fourTeacher.map(teacher =>
                                        <div style={{ backgroundImage: `url('${host}${teacher.image}')` }} className="card crd-motion position-relative m-2" >
                                            <div className="card-body SdCardBody position-absolute bottom-0 text-center">
                                                <h5 className="card-title">{teacher.name}</h5>
                                                <p className="">Lecturer of ECE</p>
                                                <p className="">{teacher.phone}</p>
                                                <p className="">{teacher.email}</p>
                                            </div>
                                        </div>)
                                }
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                <button style={{ backgroundColor: '#E66702' }} type="button" className='btn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
                                    All Faculty Members
                                </button>
                                {/* Modal */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">All Faculty Members</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className='container'>
                                                    {teachers.map(teacher =>
                                                        <div key={teacher.id} className="card mb-3" style={{ maxWidth: '100%' }}>
                                                            <div className="row g-0">
                                                                <div className="col-md-4">
                                                                    <img src={`${host}${teacher.image}`} className="img-fluid rounded-start" alt="..." />
                                                                </div>
                                                                <div className="col-md-8 d-flex align-items-center">
                                                                    <div className="card-body ms-5">
                                                                        <div>
                                                                            <h5 className="card-title">{teacher.name}</h5>
                                                                            <p className="card-text">{teacher.designation}</p>
                                                                            <p className="card-text"><small className="text-muted">{teacher.email}</small></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Syllabus</h3>
                    <hr />
                    {/* <CourseTable></CourseTable> */}
                    {
                        syllabusPic.map(pic =>
                            <div key={pic} className='d-flex flex-column justify-content-center align-items-center'>
                                <img src={pic} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ECE;