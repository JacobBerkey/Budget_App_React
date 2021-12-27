import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Home.css"


class ExpenseBill extends Component {
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
        this.getExpenses();
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

      render() {
        return (
          <div>
          <Table responsive="md" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Expenses</th>
                <th>Hobbies</th>
                <th>Clothes</th>
                <th>Streaming Services</th>
                <th>Subscriptions</th>
                <th>Date</th>
              </tr>
            </thead>
            {this.state.expenses.map((expenses) => (
            <tbody>
              <tr>
                <td></td>
                <td>{expenses.hobbies}</td>
                <td>{expenses.clothes}</td>
                <td>{expenses.streaming_services}</td>
                <td>{expenses.subscriptions}</td>
                <td>{expenses.expense_date}</td>
              </tr>
            </tbody>
            ))}
            </Table>
        </div>
        );
    }
}

export default ExpenseBill;