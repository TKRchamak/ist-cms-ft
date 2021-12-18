import React, { useEffect, useState } from 'react';
import { host } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const UserPermission = () => {

    const [info, setInfo] = useState({})
    const [designation, setDesignation] = useState([]);
    const [permission, setPermission] = useState([]);
    console.log(info)

    useEffect(() => {
        fetch(`${host}/department/faculty/designation/`)
            .then(res => res.json())
            .then(data => setDesignation(data))
    }, []);

    useEffect(() => {
        fetch(`${host}/auth/permission/`)
            .then(res => res.json())
            .then(data => setPermission(data))
    }, []);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        console.log(newInfo);
        setInfo(newInfo);
    }
    let selectPermission = [];
    
    const selectPermissionProcess = e =>{

        selectPermission = [...selectPermission, e.target.value];
        console.log(selectPermission);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const data = {
            'designation': info.designation,
            'permissionList': selectPermission
        }
        console.log(data)

        fetch(`${host}/auth/group/`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    'designation': info.designation,
                    'permissionList': selectPermission
                }
            )
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Added user auth')
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
                <h5 className="text-brand">Create User Permission</h5>
                <form onSubmit={handleSubmit}>

                    <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Designation Name</label>
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
                    </div>
                    <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Permission List</label>
                        </div>
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Permission List</label>
                            <select onClick={selectPermissionProcess} className="form-select" name="permission" id="inputGroupSelect02">
                                <option selected></option>
                                {
                                    permission.map(perm => <option value={perm.name}>{perm.name}</option>)
                                }
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default UserPermission;