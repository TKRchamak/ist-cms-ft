import React from 'react';


const Profile = ({user, pic}) => {

    return (
        <div className='container pt-5 pb-5'>
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pic} className="img-fluid rounded-start" alt="Img" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body">
                            <h5>ID : {user.id}</h5>
                            <h3 className="card-title" style={{ color: "#E66702" }}> <i>{user.name}</i> </h3>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div>
                                <h5>Designation</h5>
                                <p>Lecturer, Dept of Electronics & communication Engineering</p>
                            </div>
                            <h5 className="card-title">Contact</h5>
                            <p className='card-text'>Phone: {user.phone}</p>
                            <p className='card-text'>Email: {user.email}</p>
                            <p className='card-text'>Website: {user.website}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;