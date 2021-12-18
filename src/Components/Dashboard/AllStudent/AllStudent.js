import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { host, studentContext } from '../../../App';

const AllStudent = () => {
    const [students, setStudents] = useContext(studentContext);
    // const [students, setStudents] = useState([])

    const deleteS = (id) => {
        // const link = `${host}/student/${id}`;
        // console.log(link)
        fetch(`${host}/student/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                console.log(res)
                if (res) {
                    alert('delete product successfully')
                }
            })
        console.log(id)
    }

    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h2>All Student</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student =>
                                <tr key={student.id}>
                                    <th scope="row">{student.id}</th>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td onClick={() => deleteS(student.id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                                </tr>)
                        }
                    </tbody>
                </table>
                {
                    students.length === 0 &&
                    <div style={{ height: '500px' }}>
                        <Loading></Loading>
                    </div>
                }
            </div>
        </section>
    );
};

export default AllStudent;