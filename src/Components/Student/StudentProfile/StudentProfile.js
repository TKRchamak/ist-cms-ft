import React from 'react';
import Profile from '../../Teacher/Profile/Profile';
import pPic from '../../Images/Chamak.jpg'
import SProfile from '../SProfile/SProfile';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Semester from '../Semester/Semester';

const StudentProfile = ({}) => {
    // console.log(students);
    const user = {
        "id": 1,
        "name": "Tonmoy Kumar",
        "username": "Tonmoy",
        "bloodGroup": "O+",
        "email": "tonmoyKumarRoy6@gmail.com",
        "address": {
            "street": "Kulas Light",
            "village": "Sindurmoti",
            "city": "Lalmonirhut",
            "zipcode": "2307",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "01772536411",
        "website": "https://tonmoy-kumar-roy.web.app/",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <SProfile user={user} pic={pPic}></SProfile>
            <Semester></Semester>
            <Footer></Footer>
        </div>
    );
};

export default StudentProfile;