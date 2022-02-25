import React, { Component } from 'react'
import axios from 'axios'
import { Doughnut, defaults } from 'react-chartjs-2'
import "./Home.css"


class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [{
                user: "",
                restaurant: [],
                groceries: [],
            }],
            expenses: [{
                user: "",
                hobbies: [],
                clothes: [],
                streaming_services: [],
                subscriptions: [],
            }],
            insurance: [{
                user: "",
                home_insurance: [],
                auto_insurance: [],
                life_insurance: [],
            }],
            transportation: [{
                user: "",
                auto_payment: [],
                fuel: [],
                public_transportation: [],
                auto_maintenance: [],
            }],
            housing: [{
                user: "",
                rent: [],
                mortgage: [],
                property_tax: [],
                hoa: [],
                maintenance: [],
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
      <Doughnut
        data={{
          labels: ['Food', 'Personal Expenses', 'Insurance', 'Transportation', 'Housing', 'Utilities'],
          datasets: [
            {
              label: '# of votes',
              data: [this.getFood, this.getExpenses, this.getInsurance, this.getHousing],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}

        height={1080}
        width={720}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 30,
            },
          },
        }}
      />
    </div>
        );
    }
}

export default Graph;