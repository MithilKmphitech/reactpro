import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate=useNavigate();
    const [userdata, setUserdata] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
        confirm_password: '',
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setUserdata({
            ...userdata,
            [name]: value,
        })
        if (userdata.password === userdata.confirm_password) {
            console.log('pass')
        } else {
            console.log('Wrong');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://apingweb.com/api/register',
            data: {
                "name": userdata.name,
                "email": userdata.email,
                "phone": userdata.number,
                "password": userdata.password,
                "password_confirmation": userdata.confirm_password,
            }
        })
            .then((response) => {
                console.log(".then  response", response.data.success);
                setUserdata(response.data);
                if(response.data.success){
                    navigate('/login');
                }
            });
    }
    return (
        <>
            <div className='bg_task'>
                <form onSubmit={handleSubmit}>
                    <h2>Sing up</h2>
                    <div className='form_control'>
                        <label htmlFor="">Name:</label>
                        <input type="text" name='name' value={userdata.name} onChange={handlechange} required />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="">Email:</label>
                        <input type="email" name='email' value={userdata.email} onChange={handlechange} required />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="">Number:</label>
                        <input type="number" name='number' value={userdata.number} onChange={handlechange} required />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="">Password:</label>
                        <input type="password" name='password' value={userdata.password} onChange={handlechange} required />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="">Confirm password:</label>
                        <input type="password" name='confirm_password' value={userdata.confirm_password} onChange={handlechange} required />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Register