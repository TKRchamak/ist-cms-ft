import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { host, userContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';
import './Login.css'


const Login = () => {

    const [loginUser, setLoginUser] = useContext(userContext)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const CheckInputValue = (event) => {
        // let isInputHandel = true;
        // if (event.target.name === 'email') {
        //     isInputHandel = /\S+@\S+\.\S+/.test(event.target.value);
        // };
        // if (event.target.name === 'password') {
        //     isInputHandel = event.target.value.length >= 0;
        // };
        // if (isInputHandel) {
            const newUserSet = { ...user };
            newUserSet[event.target.name] = event.target.value;
            setUser(newUserSet);
            // setLoggedInUser(newUserSet.name)
        // }
    }



    const handleSubmit = (event) => {
        if (user.email && user.password) {
            console.log(user.email, user.password)
            fetch(`${host}/auth/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: user.email,
                    password: user.password
                })
            })
                .then(res => res.json())
                .then(data => setLoginUser(data))

            // console.log(user.email, user.password, user.name)
            // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            // .then((res) => {
            //     setLoginUser(user)
            //     
            //     console.log(user.name)
            // })
            // .catch((error) => {
            //   var errorCode = error.code;
            //   var errorMessage = error.message;

            //   console.log(error.code, error.message)
            //   });
        }
        event.preventDefault();
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ textAlign: "center" }}>
                    <div className='login-form'>
                        <form >
                            <h2 className='text-center'>Sign In</h2>
                            <div className='form-group'>
                                <div className='input-group'>
                                    <input onBlur={CheckInputValue} type='text' className='form-control' name='email' placeholder='email' required />
                                </div>
                            </div>
                            <div className='form-group mt-3'>
                                <div className='input-group'>
                                    <input onBlur={CheckInputValue} type='password' className='form-control' name='password' placeholder='Password' required />
                                </div>
                            </div>
                            <div className='form-group mt-3'>
                                <button onClick={handleSubmit} type='submit' className='btn btn-primary login-btn btn-block'> Sign In </button>
                            </div>
                            <div className='or-seperator'>
                                <i>---</i>
                            </div>
                            <div className='d-flex justify-content-between p-3'>
                                <label className='float-left form-check-label'>
                                    <input type='checkbox' /> Remember me
                                </label>
                                <Link to='' className='float-right'> Forgot Password? </Link>
                            </div>


                        </form>

                    </div>
                </div>
                <div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Login;