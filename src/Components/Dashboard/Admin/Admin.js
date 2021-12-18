import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../Shared/Loading/Loading';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);

    }

    const handleSubmit = (e) => {
        // const formData = new FormData()
        // formData.append('name', info.name);
        // formData.append('email', info.email);
        // formData.append('file', file);

        fetch('https://powerful-spire-56228.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: info.name, email: info.email })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Admin is Added')
                }
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const [admins, setAdmin] = useState([])
    useEffect(() => {
        fetch('https://powerful-spire-56228.herokuapp.com/allAdmin')
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
                console.log(data)
            })
    }, []);


    const deletePD = (id) => {
        fetch(`https://powerful-spire-56228.herokuapp.com/allAdmin/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    console.log('delete admin successfully')
                }
            })
        console.log(id)
    }




    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h2>Admins</h2>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins.map(admin =>
                                <tr key={admin._id}>
                                    <th scope="row">{admin.index}</th>
                                    <td>{admin.name}</td>
                                    <td>{admin.email}</td>
                                    <td onClick={() => deletePD(admin._id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                                </tr>)
                        }
                    </tbody>
                </table>

                {
                    admins.length === 0 &&
                    <div style={{ height: '500px' }}>
                        <Loading></Loading>
                    </div>
                }

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section >
    );
};

export default Admin;