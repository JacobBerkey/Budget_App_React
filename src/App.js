import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/Login/NavBar/NavBar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Expenses from './components/Expenses/Expenses'
import Insurance from './components/Insurance/Insurance'
import Transportation from './components/Transportation/Transportation'
import Housing from './components/Housing/Housing'
import Utilities from './components/Utilities/Utilities'
import Stocks from './components/Stocks/Stocks'
import Food from './components/Food/Food';
import jwtDecode from 'jwt-decode';
import {Grid} from '@material-ui/core'



class App extends Component {


  constructor(props){
    super(props);
      this.state = {
        user : "",
        food : [],
        expenses : [],
        insurance : [],
        transportation : [],
        housing : [],
        utilities : []
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

  getAllFoods = async () => {
    try {
    let response = await axios.get(`http://127.0.0.1:8000/api/budgetapp/getallfoods/`)
    this.setState({
      food : response.data
    })} 
    catch (error){
  }
 }
   getAllExpenses = async () => {
    try {
    let response = await axios.get(`http://127.0.0.1:8000/api/budgetapp/getallfoods/`)
    this.setState({
      expenses : response.data
    })} 
    catch (error){
  }
 }
   getAllTransportation = async () => {
    try {
    let response = await axios.get(`http://127.0.0.1:8000/api/budgetapp/getallfoods/`)
    this.setState({
      transportation : response.data
    })} 
    catch (error){
  }
 }
   getAllInsurance = async () => {
    try {
    let response = await axios.get(`http://127.0.0.1:8000/api/budgetapp/getallfoods/`)
    this.setState({
      insurance : response.data
    })} 
    catch (error){
  }
 }
   getAllHousing = async () => {
    try {
    let response = await axios.get(`http://127.0.0.1:8000/api/budgetapp/getallfoods/`)
    this.setState({
      housing : response.data
    })} 
    catch (error){
  }
 }
   getAllUtilities = async () => {
    try {
    let response = await axios.get(`http://127.0.0.1:8000/api/budgetapp/getallfoods/`)
    this.setState({
      utilities : response.data
    })} 
    catch (error){
  }
 }

   createNewFood = async (food) => {
    try{
      let response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addfood/`, food)
      this.getAllFoods()
      window.location = '/login'
      return response.status
    }
    catch(err){  
    }
   }
   createNewExpense = async (expenses) => {
    try{
      let response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addfood/`, expenses)
      this.getAllFoods()
      window.location = '/login'
      return response.status
    }
    catch(err){  
    }
   }
   createNewTransportation = async (transportation) => {
    try{
      let response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addfood/`, transportation)
      this.getAllFoods()
      window.location = '/login'
      return response.status
    }
    catch(err){  
    }
   }
   createNewInsurance = async (insurance) => {
    try{
      let response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addfood/`, insurance)
      this.getAllFoods()
      window.location = '/login'
      return response.status
    }
    catch(err){  
    }
   }
   createNewHousing = async (housing) => {
    try{
      let response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addfood/`, housing)
      this.getAllFoods()
      window.location = '/login'
      return response.status
    }
    catch(err){  
    }
   }
   createNewUtility = async (utilities) => {
    try{
      let response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addfood/`, utilities)
      this.getAllFoods()
      window.location = '/login'
      return response.status
    }
    catch(err){  
    }
  }

  render () {
    var user = this.state.user;
    return (
      <Grid>
        <NavBar user={user} logOutUser={this.logOutUser} />
        <div className="App">
          <Switch>
            <Route path="/Home" exact render={props => {
              if (!user) {
                return <Redirect to="/Login" />
              }
              else {
                return <Home {...props} user={user} />
              }
            }
            } />
            <Route path="/" exact component={Home}/>
            <Route path="/SignUp" render={props => <SignUp {...props} createNewUser={this.createNewUser} />} />
            <Route path="/Login" render={props => <Login {...props} userSignIn={this.userSignIn} />} />
          </Switch>
        </div>
      </Grid>
    )
  }
}

export default App