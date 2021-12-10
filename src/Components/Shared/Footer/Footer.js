import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        // { name: "Emergency Dental Care", link: "/emergency" },
        // { name: "Check Up", link: "/checkup" },
        // { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        // { name: "Tooth Extraction", link: "/tooth-extract" },
        // { name: "", link: "" },
    ]
    const ourAddress = [
        { name: "House # 54, Road # 15/A (Old-26)Dhanmondi (East of Shankar Bus Stand)Dhaka-1209.", link: "//google.com/map" }

    ]
    const oralHealth = [
        { name: "Admission Eligibility", link: "/emergency" },
        { name: "Tuition Fees Structure", link: "/checkup" },
        { name: "Brochure", link: "/checkup" },
        { name: "Results", link: "/checkup" }
    ]
    const services = [
        { name: "Programming Club of IST (pcIST)", link: "/emergency" },
        { name: "Electronics, Communication and Robotics Club of IST (ECRC)", link: "/checkup" },
        { name: "Business and Communication Club (BCC)", link: "/checkup" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    {/* <FooterCol key={1} menuTitle={"."} menuItems={noNamed} /> */}
                    <FooterCol key={2} menuTitle="Student Clubs" menuItems={services} />
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle="Contact" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                    <FooterCol key={1} menuTitle="." menuItems={noNamed}>
                        <div className="">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+88 02-55029352</button>
                            <button className="btn btn-brand">+8801726937910</button>
                        </div>
                        <div className="mt-1">
                            <h6>Email</h6>
                            <button className="btn btn-brand">info@ist.edu.bd</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;