
import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Home.css"


class HousingBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housing: [{
                user: "",
                rent: [],
                mortgage: [],
                property_tax: [],
                hoa: [],
                maintenance: [],
                housing_date: [],
            }]
        }
    }

    componentDidMount = () => {
        this.getHousing();
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

      render() {
        return (
          <div>
          <Table responsive="sm" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Housing</th>
                <th>Rent</th>
                <th>Mortgage</th>
                <th>Property Tax</th>
                <th>HOA</th>
                <th>Maintenance</th>
                <th>Date</th>
              </tr>
            </thead>
            {this.state.housing.map((housing) => (
            <tbody>
              <tr>
                <td></td>
                <td>{housing.rent}</td>
                <td>{housing.mortgage}</td>
                <td>{housing.property_tax}</td>
                <td>{housing.hoa}</td>
                <td>{housing.maintenance}</td>
                <td>{housing.housing_date}</td>
              </tr>
            </tbody>
            ))}
          </Table>
        </div>
        );
    }
}

export default HousingBill;