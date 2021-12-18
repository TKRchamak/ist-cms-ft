import React, { useState } from 'react';
import { host } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddNotice = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    console.log(file);

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('name', info.name);
        formData.append('attachment', file);

        fetch(`${host}/notice/`, {
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
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", maxWidth: '100%', height: '100%'}}>
                <div className='d-flex justify-content-center align-items-center' style={{ height: '100%'}}>
                    <div style={{ width: '60%' }}>
                        <h5 className="text-brand">Add Notice</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group pt-2">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="exampleInputPassword1">Upload a image</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <div className=' text-center mt-3'>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddNotice;