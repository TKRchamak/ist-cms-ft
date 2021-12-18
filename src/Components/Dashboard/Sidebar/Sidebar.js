import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { userContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // const [isDoctor, setIsDoctor] = useState(false);

    // useEffect(() => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsDoctor(data));
    // }, [])


    const handleLogOut = () => {
        sessionStorage.clear();

    }

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 ps-5 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                {/* {isDoctor &&  */}
                <div>
                    <li>
                        <Link to="/allTeacher" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>All Teacher</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allStudents" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>All Student</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addTeacher" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Teacher</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addStudent" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Student</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addNotice" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Notice</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/userPermission" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>User Permission</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div>
                {/* // } */}
            </ul>
            <div>
                <Link to="/" className="text-white" onClick={handleLogOut}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;