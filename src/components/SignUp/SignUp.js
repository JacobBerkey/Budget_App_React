import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




export default function SignUp(props) {

  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [prefix, setPrefix] = useState();
  const [email, setEmail] = useState();
  const [monthlyIncome, setMonthlyIncome] = useState();
  const [password, setPassword] = useState();



  const handleFirstNameChange = (event) =>{
    setFirstName(event.target.value);
    console.log("firstName", firstName)
  }

  const handleMiddleNameChange = (event) =>{
    setMiddleName(event.target.value);
    console.log("middleName", middleName)
  }

  const handleLastNameChange = (event) =>{
    setLastName(event.target.value);
    console.log("lastName", lastName)
  }

  const handlePrefixChange = (event) =>{
    setPrefix(event.target.value);
    console.log("prefix", prefix)
  }
    
  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
    console.log("email", email)
  }

  const handleMonthlyIncomeChange = (event) =>{
    setMonthlyIncome(event.target.value);
    console.log("monthlyIncome", monthlyIncome)
  }
    
  const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
    console.log("password", password)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
        first_name : firstName,
        middle_name : middleName,
        last_name : lastName,
        prefix : prefix,
        username : email,
        email : email,
        monthly_income : monthlyIncome,
        password : password,
        
    } 
    console.log("handleSubmit:", newUser)
    console.log("handleSubmit:", props)
    props.createNewUser(newUser);
  };

const theme = createTheme();


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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit}   sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={handleFirstNameChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="middleName"
                  required
                  fullWidth
                  id="middleName"
                  label="Middle Name"
                  onChange={handleMiddleNameChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="LastName"
                  name="lastName"
                  onChange={handleLastNameChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="prefix"
                  label="Prefix"
                  name="prefix"
                  onChange={handlePrefixChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmailChange}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="monthlyIncome"
                  required
                  fullWidth
                  id="monthlyIncome"
                  label="Monthly Income"
                  onChange={handleMonthlyIncomeChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePasswordChange}
                  
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='/Login' variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
