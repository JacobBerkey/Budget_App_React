
import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import "./Home.css"


class FoodBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [{
                user: "",
                restaurant: [],
                groceries: [],
                food_date: [],
            }]
        }
    }

    componentDidMount = () => {
        this.getFood();
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

      render() {
        return (
          <div>
          <Table responsive="sm" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Food</th>
                <th>Restaurant</th>
                <th>Groceries</th>
                <th>Date</th>
              </tr>
            </thead>
            {this.state.food.map((food) => (
            <tbody>
              <tr>
                <td></td>
                <td>{food.restaurant}</td>
                <td>{food.groceries}</td>
                <td>{food.food_date}</td>
              </tr>
            </tbody>
            ))}
          </Table>
        </div>
        );
    }
}

export default FoodBill;