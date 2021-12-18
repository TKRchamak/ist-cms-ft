import React, { useContext } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Profile from '../Profile/Profile';
import TCourse from '../TCourse/TCourse';
import tPic from '../../Images/rakibSir.jpg'
import { teacherContext } from '../../../App';

const TeacherPage = () => {
    const [teachers, setTeachers] = useContext(teacherContext)
    const user = teachers[0];

    const courses = [
        {
            "code": "ece-102",
            "courseName": 'Numerical Engineering',
            "semester": 'ECE-1st semester',
            'routine': '12.00am - 2.00pm'
        },
        {
            "code": "ece-202",
            "courseName": 'Computer Architecture',
            "semester": 'ECE-4th semester',
            'routine': '12.00am - 2.00pm'
        }
    ]
    return (
        <div>
            <Navbar></Navbar>
            <Profile user={user}></Profile>
            <TCourse courses={courses}></TCourse>
            <Footer></Footer>
        </div>
    );
};

export default TeacherPage;