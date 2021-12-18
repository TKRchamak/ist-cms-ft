import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import Course from '../Course/Course';
import Founder from '../Founder/Founder';
import Slider from '../Slider/Slider';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Founder></Founder>
            <Course></Course>
            <NoticeBoard></NoticeBoard>
            <Footer></Footer>
        </div>
    );
};

export default Home;