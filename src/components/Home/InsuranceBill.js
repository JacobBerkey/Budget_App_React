
import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Home.css"


class InsuranceBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insurance: [{
                user: "",
                home_insurance: [],
                auto_insurance: [],
                life_insurance: [],
                insurance_date: [],
            }]
        }
    }

    componentDidMount = () => {
        this.getInsurance();
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