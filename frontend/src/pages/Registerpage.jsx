import { Link } from 'react-router-dom';

// MUI framework
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';
const  baseURL = import.meta.env.VITE_BASE_URL;

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#2196f3",
      dark: "#0d47a1",
      contrastText: "#fff",
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const SignUp = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")  

  const register = async () =>{
    console.log("xdctfvygbuhnij");
    e.preventDefault();
    const response = await fetch(`${baseURL}/register`,{
      method:"POST",
      body:JSON.stringify({username,password}),
      headers:{"Content-Type":"application/json"},
    }) 
    if(response.status === 200){
      alert(" ลงทะเบียนสำเร็จ!!")
    }else{
      alert("ลงทะเบียนไม่สำเร็จ!!")
    }
    
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5" >
            Register
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User name"
                  name="username"
                  onChange={(e)=>setUsername(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e)=>setPassword(e.target.value)}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={register}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sm={10}>
              Already have an account?
                <Link to="" variant="body2" spacing={6} style={{color:"#594035"}}>
                   Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;