import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Profile from '../Profile/Profile';
import TCourse from '../TCourse/TCourse';
import tPic from '../../Images/rakibSir.jpg'

const TeacherPage = () => {
    const user = {
        "id": 1,
        "name": "Md. Rakib Hossain",
        "username": "Rakib",
        "tPic": {tPic},
        "email": "rakibhossainist@gmial.com",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "01731318275",
        "website": "rakibhossain.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <Profile user={user} pic={tPic}></Profile>
            <TCourse></TCourse>
            <Footer></Footer>
        </div>
    );
};

export default TeacherPage;