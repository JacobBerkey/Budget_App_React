import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/Login/NavBar/NavBar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Stocks from './components/Stocks/Stocks'
import jwtDecode from 'jwt-decode';
import {Grid} from '@material-ui/core'



class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        user : "",
      }
  }


  componentDidMount () {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({user});
    } catch (err) {
      console.log("Error")
    }
  }

  createNewUser = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/register/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }

   getAllFoods = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/getallfoods/`, newUser)
      window.location = '/login'
      console.log()
    }
    catch(err){  
    }
   }

   createNewFood = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addfood/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }

   getAllExpenses = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/getallexpenses/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }

   createNewExpense = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addexpense/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }

   getAllInsurance = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/getallinsurance/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }

   createNewInsurance = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addinsurance/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }

   getAllTransportation = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/getalltransportation/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }
   createNewTransportation = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addtransportation/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }
   getAllHousing = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/getallhousing/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }
   createNewHousing = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addhousing/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }
   getAllUtilities = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/getallutilities/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
   }

  createNewUtilities = async (newUser) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addutilites/`, newUser)
      window.location = '/login'
    }
    catch(err){  
    }
  }


  userSignIn = async (userCredentials) => {
    try{
      const response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, userCredentials)
      localStorage.setItem('token', response.data.access)
      window.location = '/';
    }
    catch (err){
      console.log("Login Error")
    }
  }

  logOutUser =  () => {
    localStorage.removeItem('token');
    window.location = '/Login'
  }


  render () {
    var user = this.state.user;
    return(
      <Grid>
        <NavBar user={user} logOutUser={this.logOutUser}/>
        <div className="App">
        <Switch>
          <Route path="/Home" exact render={props => {
          if(!user){
            return <Redirect to="/Login" />
          }
        else{
          return <Home {...props} user={user} />
        }}
      }/>
          <Route path="/" exact component={Home}/>
          <Route path = "/SignUp" render={props => <SignUp {...props} createNewUser={this.createNewUser}/>}/>
          <Route path="/Login" render={props => <Login {...props} userSignIn={this.userSignIn}/>}/>
          <Route path="/Stocks" component={Stocks}/>
        </Switch>
      </div> 
      </Grid> 
    )}
}

export default App;