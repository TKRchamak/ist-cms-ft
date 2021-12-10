import React from 'react';
import founderPic from "../../Images/DSC_6271.jpg"

const Founder = () => {
    return (
        <div className='p-5'>
            <div className='pb-5 pt-5'>
                <h2 style={{color: "#E66702"}}>Message From The Founder</h2>
                <hr />
            </div>
            <div className='row'>
                <div className='col'>
                    <h3 style={{color: "#E66702"}}>
                        <i>Professor Dr. Shahida Rafique</i>
                    </h3>
                    <p>Emeritus Professor Dr. Shahida Rafique is the founder and the current Chairman of Institute of Science and Technology.

                        Previously, she was the Dean of the Faculty of Engineering at the University of Dhaka. She completed her Ph.D in 1979 from the University of London, and Post Doc in 1985 from the Kyoto University of Japan. She founded IST in the presence of Nobel Laureate Professor Dr. Abdus Salam.

                        Research areas she is working on are Communication Engineering, High-Speed LAN/WAN, Image Processing, Artificial Intelligence, Neural Network, Solar Materials & Renewable Energy Technology, etc.
                    </p>
                </div>
                <div className='col'>
                    <img className='img-fluid' src={founderPic} alt="founderPic" />
                </div>
            </div>
        </div>
    );
};

export default Founder;