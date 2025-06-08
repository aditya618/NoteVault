import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function LoginComponent() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
      <Typography variant='h5'>Login</Typography>
       <TextField
          required
          id="outlined-required"
          type='email'
          placeholder='Email'
          className='w-1/2'
        />
       <TextField
          required
          id="outlined-required"
          type='password'
          placeholder='Password'
          className='w-1/2'
        />
        <Button className='w-1/2' variant="contained">Login</Button>
    </Box>
  )
}

export default LoginComponent