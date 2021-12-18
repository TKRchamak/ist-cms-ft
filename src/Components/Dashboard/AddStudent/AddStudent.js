import React, { useEffect, useState } from 'react';
import { host } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddStudent = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [depts, setDepts] = useState([]);
    const [session, setSession] = useState([]);
    const [semester, setSemester] = useState([]);

    console.dir(info);

    useEffect(() => {
        fetch(`${host}/department/`)
            .then(res => res.json())
            .then(data => setDepts(data))
    }, []);
    useEffect(() => {
        fetch(`${host}/department/semester/`)
            .then(res => res.json())
            .then(data => setSemester(data))
    }, []);
    useEffect(() => {
        fetch(`${host}/student/session/`)
            .then(res => res.json())
            .then(data => setSession(data))
    }, []);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('dob', info.dob);
        formData.append('address', info.address);
        formData.append('contact', info.contact);
        formData.append('dept', info.dept);
        formData.append('semester', info.semester);
        formData.append('session', info.session);
        formData.append('image', file);

        fetch(`${host}/student/`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Student is Added')
                }
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Teacher</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="address" placeholder="address" />
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Department Name</label>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                            <select onClick={handleBlur} className="form-select" name="dept" id="inputGroupSelect01">
                                <option selected>Select Department</option>
                                {
                                    depts.map(dept => <option value={dept.name}>{dept.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Semester</label>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Semester</label>
                            <select onClick={handleBlur} className="form-select" name="semester" id="inputGroupSelect02">
                                <option selected>Select Semester</option>
                                {
                                    semester.map(sem => <option value={sem.name}>{sem.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Session</label>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect03">Session</label>
                            <select onClick={handleBlur} className="form-select" name="session" id="inputGroupSelect03">
                                <option selected>Select Session</option>
                                {
                                    session.map(sess => <option value={sess.name}>{sess.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className="form-group" style={{width: '30%'}}>
                            <label htmlFor="exampleInputEmail1">Date of Birth</label>
                            <input onBlur={handleBlur} type="date" className="form-control" name="dob" placeholder="Enter Designation" />
                        </div>
                        <div className="form-group" style={{width: '30%'}}>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group" style={{width: '30%'}}>
                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                            <input onBlur={handleBlur} type="number" className="form-control" name="contact" placeholder="Enter Phone Number" />
                        </div>
                    </div>
                    <div className="form-group pt-3">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <div className=' text-center mt-3'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddStudent;