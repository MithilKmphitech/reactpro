import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [logindata, setlogin] = useState({
        email: '',
        password: '',
    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setlogin({
            ...logindata,
            [name]: value,
        })
    }
    const handledataSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://apingweb.com/api/login',
            data: {
                "email": logindata.email,
                "password": logindata.password,
            }
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                if (response.data.token) {
                    navigate('/dashboard')
                }
            });
    }
    return (
        <>
            <div className='bg_task'>
                <form onSubmit={handledataSubmit}>
                    <h2>Sing in</h2>
                    <div className='form_control'>
                        <label htmlFor="">Email:</label>
                        <input type="text" name='email' value={logindata.email} onChange={handlechange} required />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="">Password:</label>
                        <input type="text" name='password' value={logindata.password} onChange={handlechange} required />
                    </div>
                    <button>Submit </button>
                </form>
            </div>
        </>
    )
}

export default Login