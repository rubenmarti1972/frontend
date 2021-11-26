import React from 'react'
import Register from '../../components/Register';
import Login from '../../components/Login';
import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            {/*****Uso de react router*******/}
            <Link to="/home">Home</Link>
            <Login/>
            <br/>
            <hr/>
            <br/>
            <Register/>
        </div>
    )
}

export default Auth;
