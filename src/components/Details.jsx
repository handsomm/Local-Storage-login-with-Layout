import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { Navigate } from "react-router-dom";


const Details = () => {
    const navigate = useNavigate();

    const getUserArr = localStorage.getItem('user_login');
    const data = {
        name: '',
        email: '',
        password: ''
    }
    if (getUserArr) {
        const user = JSON.parse(getUserArr)
        data.name = user.name
        data.email = user.email
        data.password = user.password
    }
    else {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <div>
                <h1>Name: {data.name}</h1>
                <h1>Email: {data.email}</h1>
                <h1>Password: {data.password}</h1>
            </div>
        </>
    )
}

export default Details