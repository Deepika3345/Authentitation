import React, { useEffect, useState } from 'react'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/Auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        password2: ""

    })
    const { name, lastname, email, password, password2 } = formData

    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handlesubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error("invalid")
        }

        dispatch(registerUser(formData))
    }

    useEffect(() => {
        if (user && isSuccess) {
            navigate("/")
        }

    }, [user])
    if (isLoading) {
        return (
            <Typography variant='h1' sx={{ textAlign: "center" ,marginTop:"100px"}}>Loading...</Typography>
        )
    }



    return (



        <>
            <div className='container'>
                <div className='box'>

                    <form class="form" onSubmit={handlesubmit}>
                        <p class="title">Register </p>
                        <p class="message">Signup now and get full access to our app. </p>
                        <div class="flex">
                            <label>
                                <input class="input" type="text" placeholder="" required="" name='name'
                                    value={name}
                                    onChange={handlechange} />
                                <span>Firstname</span>
                            </label>

                            <label>
                                <input class="input" type="text" placeholder="" required="" name='lastname' value={lastname} onChange={handlechange} />
                                <span>Lastname</span>
                            </label>
                        </div>

                        <label>
                            <input class="input" type="email" placeholder="" required="" name='email'
                                value={email}
                                onChange={handlechange} />
                            <span>Email</span>
                        </label>

                        <label>
                            <input class="input" type="password" placeholder="" required="" name='password'
                                value={password}
                                onChange={handlechange} />
                            <span>Password</span>
                        </label>
                        <label>
                            <input class="input" type="password" placeholder="" required="" name='password2'
                                value={password2}
                                onChange={handlechange} />
                            <span>Confirm password</span>
                        </label>
                        <button class="submit">Submit</button>
                        <p class="signin">Already have an acount ?
                            <Link to={'/login'}>
                                <a href="#">Signin</a>
                            </Link>
                        </p>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Register