
import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Home.css"


class UtilityBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.getUtility();
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
                <th>Utilities</th>
                <th>Water</th>
                <th>Electricity</th>
                <th>HVAC</th>
                <th>Gas</th>
                <th>Sewage</th>
                <th>Internet</th>
                <th>Phone</th>
                <th>Date</th>
              </tr>
            </thead>
            {this.state.utility.map((utility) => (
            <tbody>
              <tr>
                <td></td>
                <td>{utility.water}</td>
                <td>{utility.electricity}</td>
                <td>{utility.hvac}</td>
                <td>{utility.gas}</td>
                <td>{utility.sewage}</td>
                <td>{utility.internet}</td>
                <td>{utility.phone}</td>
                <td>{utility.utilities_date}</td>
              </tr>
            </tbody>
            ))}
          </Table>
        </div>
        );
    }
}

export default UtilityBill;