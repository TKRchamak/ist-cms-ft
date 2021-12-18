import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../Shared/Loading/Loading';
import { host, studentContext, teacherContext } from '../../../App';

const AllTeacher = () => {
    const [teachers, setTeachers] = useContext(teacherContext);

    console.log(teachers);

    const deleteT = (id) => {
        fetch(`${host}/department/faculty/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
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
                <h2>All Teacher</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers?.map(teacher =>
                                <tr key={teacher.id}>
                                    <th scope="row">{teacher.id}</th>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.dept}</td>
                                    <td>{teacher.email}</td>
                                    <td onClick={() => deleteT(teacher.id)}><FontAwesomeIcon icon={faTrashAlt} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {
                    teachers?.length === 0 &&
                    <div style={{ height: '500px' }}>
                        <Loading></Loading>
                    </div>
                }
            </div>
        </section>

    );
};

export default AllTeacher;