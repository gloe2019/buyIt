import React, {useEffect} from 'react'

import Page from "../interfaces/page";
import  Avatar  from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'
import  Grid  from '@mui/material/Grid';
import  Typography  from '@mui/material/Typography';
import  Container  from '@mui/material/Container';
import Box from '@mui/material/Box'
import LockOpen from '@mui/icons-material/LockOpen';


const Login: React.FunctionComponent<Page> = props => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log(data)
  }


  useEffect(() => {
    console.log(`Loading ${props.name}`)
  })
  return (

    <Container maxWidth="sm">
      <Box
        sx={{
          margin: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'}}
      >
        <Avatar sx={{bgcolor: 'primary.main'}}>
          <LockOpen />
        </Avatar>
        <Typography>Sign In</Typography>
         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
      </Box>

    </Container>
  )
}

export default Login