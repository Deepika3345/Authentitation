
import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()


  useEffect(() => {
    if (!user) {
      navigate("/login")
    }

  }, [user])
  return (
    <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;WELCOME&nbsp;</span>
    <span aria-hidden="true" class="front-text">&nbsp;WELCOME&nbsp;</span>
</button>


  )
}

export default Home