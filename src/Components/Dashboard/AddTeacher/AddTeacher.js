import React, { useEffect, useState } from 'react';
import { host } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddTeacher = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [depts, setDepts] = useState([]);
    const [designation, setDesignation] = useState([]);
    console.dir(info);
    console.log(file);

    useEffect(() => {
        fetch(`${host}/department/`)
            .then(res => res.json())
            .then(data => setDepts(data))
    }, []);
    useEffect(() => {
        fetch(`${host}/department/faculty/designation/`)
            .then(res => res.json())
            .then(data => setDesignation(data))
    }, []);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        console.log(newInfo);
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];

        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('image', file);
        formData.append('name', info.name);
        formData.append('address', info.address);
        formData.append('designation', info.designation);
        formData.append('contact', info.contact);
        formData.append('email', info.email);
        formData.append('dob', info.dob);
        formData.append('dept', 1);
        formData.append('price', info.price);

        e.preventDefault();

        fetch(`${host}/department/faculty/`, {
            method: 'POST',
            // headers: { "Content-Type": "application/json" },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Teacher is Added')
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
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Department Name</label>
                        {/* <input onBlur={handleBlur} type="text" className="form-control" name="dept" placeholder="Enter Department name" /> */}
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department Name</label>
                        <select onClick={handleBlur} className="form-select" name="dept" id="inputGroupSelect01">
                            <option selected>Department</option>
                            {
                                depts.map(dept => <option value={dept.name}>{dept.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Designation Name</label>
                        {/* <input onBlur={handleBlur} type="text" className="form-control" name="dept" placeholder="Enter Department name" /> */}
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Designation Name</label>
                        <select onClick={handleBlur} className="form-select" name="designation" id="inputGroupSelect02">
                            <option selected>Enter Designation</option>
                            {
                                designation.map(desig => <option value={desig.name}>{desig.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className="form-group" style={{ width: '30%' }}>
                            <label htmlFor="exampleInputEmail1">Date of Birth</label>
                            <input onBlur={handleBlur} type="date" className="form-control" name="dob" placeholder="Enter Designation" />
                        </div>
                        <div className="form-group" style={{ width: '30%' }}>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group" style={{ width: '30%' }}>
                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                            <input onBlur={handleBlur} type="number" className="form-control" name="contact" placeholder="Enter Phone Number" />
                        </div>
                    </div>
                    <div className="form-group mt-3">
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

export default AddTeacher;