import React, { useEffect, useState } from 'react';
import { host } from '../../../App';
import Loading from '../../Shared/Loading/Loading';


const Profile = ({ user }) => {
    const [designation, setDesignation] = useState([]);

    useEffect(() => {
        fetch(`${host}/department/faculty/designation/`)
        .then(res => res.json())
        .then(data => setDesignation(data))
    }, []);

    const selectDesignation = ((id) => {
        let value = Object.values(designation[(id-1)])
        return(value[1]);
    })
    // selectDesignation(user.designation)
    
    return (
        <div className='container pt-5 pb-5'>
            {
                user ?
                    <div className="card mb-3" style={{ maxWidth: "100%" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`${host}${user.image}`} className="img-fluid rounded-start" alt="Img" />
                            </div>
                            <div className="col-md-8 d-flex align-items-center">
                                <div className="card-body ps-5">
                                    <h5>ID : {user.id}</h5>
                                    <h3 className="card-title" style={{ color: "#E66702" }}> <i>{user.name}</i> </h3>
                                    <p className="card-text">you are going to succeed in life, you have to learn life's most important lessons.</p>
                                    <div>
                                        <h5>Designation</h5>
                                        <p>{user.designation}, Dept of {user.dept}</p>
                                    </div>
                                    <h5 className="card-title">Contact</h5>
                                    <p className='card-text'>Phone: {user.phone}</p>
                                    <p className='card-text'>Email: {user.email}</p>
                                    <p className='card-text'>Website: {user.website}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Loading></Loading>
            }
        </div>
    );
};

export default Profile;