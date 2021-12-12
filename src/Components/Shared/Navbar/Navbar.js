import React, { useContext } from 'react';
import './Nabvar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faUserCircle, faBook, faCalendarAlt, faWallet, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import { cartContest, userContest } from '../../../App';
import logo from "../../Images/WhatsApp Image 2021-12-10 at 2.05.54 AM.jpeg"

const Navbar = () => {
    // const [cart] = useContext(cartContest);
    // const [user] = useContext(userContest);
    const decimalFix = (num) => {
        return (num.toFixed(2));
    }
    // const totalQuantity = +decimalFix(cart.reduce((result, pd) => result + pd.quantity, 0));

    return (
        <div className="bg-light pt-2 pb-2">
            <div className="m-2 d-flex justify-content-center">
                <img src={logo} className="img-fluid me-3" alt="" style={{ height: "80px" }} />
                <h1 className="LogoStyle">IST CMS</h1>
            </div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#E66702"}}>
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <div className="m-auto" style={{ width: "auto" }}>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item p-2">
                                        <Link className="nav-a" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item p-2">
                                        <Link className="nav-a" to="/teacher">Faculty Members</Link>
                                    </li>
                                    <li className="nav-item p-2">
                                        <Link className="nav-a" to="/student">Student</Link>
                                    </li>
                                    {/* <li className="nav-item p-2">
                                        <Link className="nav-a" to="/admission">Admission</Link>
                                    </li> */}
                                    <li className="nav-item p-2">
                                    <Link to="/about">About</Link>
                                    </li>
                                    <li className="nav-item p-2 dropdown">
                                        <Link className="nav-Link dropdown-toggle" to="/shop" role="button" id="dropdownMenua" data-bs-toggle="dropdown" aria-expanded="false">
                                            Department
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenua">
                                            <li><Link className="dropdown-item" to="/ece" >ECE</Link></li>
                                            <li><Link className="dropdown-item" to="/cse" >CSE</Link></li>
                                            <li><Link className="dropdown-item" to="/bba" >BBA</Link></li>
                                        </ul>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-a" to="/admin">Admin</Link>
                                    </li> */}
                                </ul>
                                <div>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <form className="d-flex nav-item p-2">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-success active" type="submit">Search</button>
                                        </form>
                                        {/* <li className="nav-item p-2">
                                            <Link className="nav-a" to="/login"><FontAwesomeIcon icon={faUserCircle} />{user.name}</Link>
                                        </li>
                                        <li className="nav-item p-2">
                                            <Link className="nav-a" to="/cart/review"><FontAwesomeIcon icon={faCartArrowDown} />{totalQuantity}</Link>
                                        </li> */}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container p-2">

            </div>
            <div className="container">
                <div className="row pt-3 pb-3">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs-3 pe-3">
                                <FontAwesomeIcon icon={faBook} />
                            </div>
                            <div>
                                <h6>Most Acceptable syllabus</h6>
                                <small>International Academic Syllabus</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs-3 pe-3">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                            <div>
                                <h6>Three DEPT</h6>
                                <small>CSE  ||  ECE  ||  BBA</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs-3 pe-3">
                                <FontAwesomeIcon icon={faWallet} />
                            </div>
                            <div>
                                <h6>Scholarship</h6>
                                <small>Scholarship for Good result</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="fs-3 pe-3">
                                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            </div>
                            <div>
                                <h6>Help & Support</h6>
                                <small>Call us : +8801726937910</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;