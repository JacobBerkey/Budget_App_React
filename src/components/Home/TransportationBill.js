
import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Home.css"


class TransportationBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transportation: [{
                user: "",
                auto_payment: [],
                fuel: [],
                public_transportation: [],
                auto_maintenance: [],
                transportation_date: [],
            }]
        }
    }

    componentDidMount = () => {
        this.getTransportation();
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

      render() {
        return (
          <div>
          <Table responsive="sm" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Transportation</th>
                <th>Auto Payment</th>
                <th>Fuel</th>
                <th>Public Transportation</th>
                <th>Auto Maintenance</th>
                <th>Date</th>
              </tr>
            </thead>
            {this.state.transportation.map((transportation) => (
            <tbody>
              <tr>
                <td></td>
                <td>{transportation.auto_payment}</td>
                <td>{transportation.fuel}</td>
                <td>{transportation.public_transportation}</td>
                <td>{transportation.auto_maintenance}</td>
                <td>{transportation.transportation_date}</td>
              </tr>
            </tbody>
            ))}
          </Table>
        </div>
        );
    }
}

export default TransportationBill;