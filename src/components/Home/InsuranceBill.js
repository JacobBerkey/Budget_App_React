
import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import "./Home.css"


class InsuranceBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [{
                user: "",
                restaurant: [],
                groceries: [],
                food_date: [],
            }],
            expenses: [{
                user: "",
                hobbies: [],
                clothes: [],
                streaming_services: [],
                subscriptions: [],
                expense_date: [],
            }],
            insurance: [{
                user: "",
                home_insurance: [],
                auto_insurance: [],
                life_insurance: [],
                insurance_date: [],
            }],
            transportation: [{
                user: "",
                auto_payment: [],
                fuel: [],
                public_transportation: [],
                auto_maintenance: [],
                transportation_date: [],
            }],
            housing: [{
                user: "",
                rent: [],
                mortgage: [],
                property_tax: [],
                hoa: [],
                maintenance: [],
                housing_date: [],
            }],
            utility: [{
                user: "",
                water: [],
                electricity: [],
                hvac: [],
                gas: [],
                sewage: [],
                internet: [],
                phone: [],
                utilities_date: [],
            }],
        }
    }

    componentDidMount = () => {
        this.getFood();
        this.getExpenses();
        this.getInsurance();
        this.getTransportation();
        this.getHousing();
        this.getUtility();
    }

    getFood = async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/budgetapp/getallfoods/')
        this.setState({
          food : response.data
        })}
       catch(err){
      }
    }

    getExpenses = async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/budgetapp/getallexpenses/')
        this.setState({
          expenses : response.data
        })}
       catch(err){
      }
    }

    getInsurance = async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/budgetapp/getallinsurance/')
        this.setState({
          insurance : response.data
        })}
       catch(err){
      }
    }

    getTransportation = async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/budgetapp/getalltransportation/')
        this.setState({
          transportation : response.data
        })}
       catch(err){
      }
    }

    getHousing = async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/budgetapp/getallhousing/')
        this.setState({
          housing : response.data
        })}
       catch(err){
      }
    }

    getUtility = async () => {
      try {
        let response = await axios.get('http://127.0.0.1:8000/api/budgetapp/getallutilities/')
        this.setState({
          utility : response.data
        })}
       catch(err){
      }
    }

      render() {
        return (
          <div>
          <Table responsive="sm" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Insurance</th>
                <th>Home Insurance</th>
                <th>Auto Insurance</th>
                <th>Life Insurance</th>
                <th>Date</th>
              </tr>
            </thead>
            {this.state.insurance.map((insurance) => (
            <tbody>
              <tr>
                <td></td>
                <td>{insurance.home_insurance}</td>
                <td>{insurance.auto_insurance}</td>
                <td>{insurance.life_insurance}</td>
                <td>{insurance.insurance_date}</td>
              </tr>
            </tbody>
            ))}
          </Table>
        </div>
        );
    }
}

export default InsuranceBill;