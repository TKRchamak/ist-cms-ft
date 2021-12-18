import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { host, lectureContext, studentContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';

const ClassLecture = () => {
    const [students, setStudents] = useContext(studentContext);
    const [lectures, setLectures] = useContext(lectureContext)
    const [depts, setDepts] = useState([]);
    const [semester, setSemester] = useState([]);
    const [course, setCourse] = useState([])

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    console.log(file);

    useEffect(() => {
        fetch(`${host}/department/`)
            .then(res => res.json())
            .then(data => setDepts(data))
    }, []);
    useEffect(() => {
        fetch(`${host}/department/semester`)
            .then(res => res.json())
            .then(data => setSemester(data))
    }, []);
    useEffect(() => {
        fetch(`${host}/department/course/`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }


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

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('name', info.name);
        formData.append('dept', info.dept);
        formData.append('semester', info.semester);
        formData.append('course', info.course);
        formData.append('file', file);

        fetch(`${host}/lecture/`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Notice is Added')
                }
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='container p-3 d-flex justify-content-center'>
                <div className='d-flex justify-content-between bg-secondary p-3 rounded' style={{ width: '70%' }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5>Upload Class Lecture</h5>
                    </div>
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <FontAwesomeIcon className='me-2' icon={faDownload} />
                        Upload Lecture
                    </button>

                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Upload Lecture</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
                                        <div style={{ width: '90%' }}>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group pt-2">
                                                    <label htmlFor="inputGroupSelect0">Name</label>
                                                    <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                                                </div>
                                                <div className="input-group pt-2">
                                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Department Name</label>
                                                    <select onClick={handleBlur} className="form-select" name="dept" id="inputGroupSelect01">
                                                        <option selected>Department</option>
                                                        {
                                                            depts.map(dept => <option value={dept.name}>{dept.name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="input-group pt-2">
                                                    <label className="input-group-text" htmlFor="inputGroupSelect02">Semester Name</label>
                                                    <select onClick={handleBlur} className="form-select" name="semester" id="inputGroupSelect02">
                                                        <option selected>Semester</option>
                                                        {
                                                            semester.map(sem => <option value={sem.name}>{sem.name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="input-group pt-2">
                                                    <label className="input-group-text" htmlFor="inputGroupSelect03">Course Name</label>
                                                    <select onClick={handleBlur} className="form-select" name="course" id="inputGroupSelect03">
                                                        <option selected>Course</option>
                                                        {
                                                            course.map(cor => <option value={cor.name}>{cor.name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-group pt-2">
                                                    <label htmlFor="exampleInputFile1">Upload a image</label>
                                                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputFile1" placeholder="Picture" />
                                                </div>
                                                <div className=' text-center mt-3'>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='p-5 mt-5'>
                <div className='d-flex justify-content-between'>
                    <div style={{width: '45%'}}>
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
                                        <div className='col-6 text-center'>
                                            <h4>{lecture.name}</h4>
                                            <p>Lecture {lecture.id}</p>
                                        </div>
                                        <div className='col-3'>
                                            <a className='btn btn-warning' href={`${host}${lecture.attachment}`} target="_blank">See Details</a>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div style={{width: '45%'}}>
                        <table className="table table-striped">
                            <thead>
                                <tr className='text-center'>
                                    <th scope="col">ID</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Student Detail</th>
                                    <th scope="col">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map(student =>
                                        <tr key={student.id}>
                                            <th scope="row">{student.id}</th>
                                            <td>{student.name}</td>
                                            <td>{student.address}</td>
                                            <td>{student.email}</td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ClassLecture;