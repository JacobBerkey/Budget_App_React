import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/Login/NavBar/NavBar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import FoodBill from './components/Home/FoodBill'
import ExpenseBill from './components/Home/ExpenseBill'
import InsuranceBill from './components/Home/InsuranceBill'
import TransportationBill from './components/Home/TransportationBill'
import HousingBill from './components/Home/HousingBill'
import UtilityBill from './components/Home/UtilityBill'
import Graph from './components/Home/Graph'
import Stocks from './components/Stocks/Stocks';
import CreateNewFood from './components/Food/Food';
import CreateNewUtility from './components/Utility/Utility';
import CreateNewTransportation from './components/Transportation/Transportation';
import CreateNewInsurance from './components/Insurance/Insurance';
import CreateNewHousing from './components/Housing/Housing'
import CreateNewExpense from './components/Expenses/Expenses';
import WaysToSave from './components/WaysToSave/WaysToSave';
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

  createNewFood = async (newFood) => {
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addfood/`,newFood, {headers: {Authorization: 'Bearer ' + jwt}})
    window.location = "/Food"
  }

  createNewExpense = async (newExpense) => {
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addexpense/`,newExpense, {headers: {Authorization: 'Bearer ' + jwt}})
    window.location = "/Expenses"
  }

  createNewInsurance = async (newInsurance) => {
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addinsurance/`,newInsurance, {headers: {Authorization: 'Bearer ' + jwt}})
    window.location = "/Insurance"
  }

  createNewTransportation = async (newTransportation) => {
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addtransportation/`,newTransportation, {headers: {Authorization: 'Bearer ' + jwt}})
    window.location = "/Transportation"
  }

  createNewHousing = async (newHousing) => {
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addhousing/`,newHousing, {headers: {Authorization: 'Bearer ' + jwt}})
    window.location = "/Food"
  }

  createNewUtility = async (newUtility) => {
    const jwt = localStorage.getItem('token')
    const response = await axios.post(`http://127.0.0.1:8000/api/budgetapp/addutilities/`,newUtility, {headers: {Authorization: 'Bearer ' + jwt}})
    window.location = "/Utility"
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
                return <FoodBill {...props} user={user} />
              }
            }
            } />
            <Route path="/" exact component={Home}/>
            <Route path="/waystosave" exact component={WaysToSave}/>
            <Route path="/FoodBill" exact component={FoodBill}/>
            <Route path="/ExpenseBill" exact component={ExpenseBill}/>
            <Route path="/InsuranceBill" exact component={InsuranceBill}/>
            <Route path="/TransportationBill" exact component={TransportationBill}/>
            <Route path="/HousingBill" exact component={HousingBill}/>
            <Route path="/UtilityBill" exact component={UtilityBill}/>
            <Route path="/Stocks" exact component={Stocks}/>
            <Route path="/Graph" exact component={Graph}/>
            <Route path="/SignUp" render={props => <SignUp {...props} createNewUser={this.createNewUser} />} />
            <Route path="/Login" render={props => <Login {...props} userSignIn={this.userSignIn} />} />
            <Route path="/CreateNewFood" render={props => <CreateNewFood {...props} createNewFood={this.createNewFood} />}/>
            <Route path="/CreateNewExpense" render={props => <CreateNewExpense {...props} createNewExpense={this.createNewExpense} />}/>
            <Route path="/CreateNewInsurance" render={props => <CreateNewInsurance {...props} createNewInsurance={this.createNewInsurance} />}/>
            <Route path="/CreateNewTransportation" render={props => <CreateNewTransportation {...props} createNewTransportation={this.createNewTransportation} />}/>
            <Route path="/CreateNewHousing" render={props => <CreateNewHousing {...props} createNewHousing={this.createNewHousing} />}/>
            <Route path="/CreateNewUtility" render={props => <CreateNewUtility {...props} createNewUtility={this.createNewUtility} />}/>
            <Route path="/Stats" exact component={WaysToSave}/>
          </Switch>
        </div>
      </Grid>
    )
  }
}

export default App