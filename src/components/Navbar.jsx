import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoOutUser } from '../features/Auth/authSlice'

const Navbar = () => {

    const { user } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const handlelogout = () => {
        dispatch(logoOutUser())
    }



    return (
        <AppBar>
            <Toolbar className='navbar'>
                <Typography variant='h5' sx={{ flexGrow: 1 }}>
                    <Link to={'/'} className='nav-text'>
                        Authentication

                    </Link>

                </Typography>
                {
                    !user ? (
                        <>
                            <Link to={'/register'}>
                                <Button variant='contained' >Register</Button>
                            </Link>
                            <Link to={'/login'}>
                                <Button variant='contained' sx={{ mx: 1 }}>Login</Button>
                            </Link>
                        </>
                    ) :

                        (<Button variant='contained' sx={{ mx: 1, bgcolor: "red" }} onClick={handlelogout}>LogOut</Button>)
                }


            </Toolbar>
        </AppBar>
    )
}

export default Navbar