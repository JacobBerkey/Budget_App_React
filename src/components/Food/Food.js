import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';
import { Redirect } from "react-router";



class CreateNewFood extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            groceries: [],
            restaurant: [],
            food_date: [],
        };
    }

    handleGroceriesChange = (event) => {
        this.setState({
            groceries: event.target.value,
        });
    }
    handleRestaurantChange = (event) => {
        this.setState({
            restaurant: event.target.value,
        });
    }
    handleFoodDateChange = (event) => {
        this.setState({
            food_date: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            groceries: parseInt(this.state.groceries),
            restaurant: parseInt(this.state.restaurant),
            food_date: Date(this.state.food_date),
        }
        console.log('Create Submit', this.props, newFood)
        this.props.createNewFood(newFood);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A New Payment </h2>
                <Form.Group className="mb-3" controlId="formGroupGroceries">
                    <Form.Control type="text" placeholder="Grocery Payment" onChange={this.handleGroceriesChange} value={this.state.groceries} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRestaurant">
                    <Form.Control type="number" placeholder="Restaurant Payment" onChange={this.handleRestaurantChange} value={this.state.restaurant} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDate">
                    <Form.Control type="date" placeholder="Date" onChange={this.handleFoodDateChange} value={this.state.food_date} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-primary">Create Payment</Button>
            </form>
        );
    }
}

export default CreateNewFood;