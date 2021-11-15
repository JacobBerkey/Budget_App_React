import React, { Component } from 'react'
import {Form} from "react-bootstrap"
import {Button, Grid} from '@material-ui/core';


class Transportation extends Component{
    constructor(props) {
        super(props);

        this.state={                       
            auto_payment : "",
            fuel : "",
            public_transportation : "",
            auto_maintenance : "",
        }
    }

    handleRestaurantChange = (event) => {
        this.setState({
            restaurant: event.target.value
        })
    }

    handleGroceriesChange = (event) => {
        this.setState({
            groceries: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newFood = {
            restaurant : this.state.restaurant,
            groceries : this.state.groceries
        }
        this.props.createNewFood(newFood);
    }
    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <h2> Create Food Payment </h2>
                    <Form.Group className="mb-3" controlId="formGroup">
                        <Form.Control type="text" placeholder="Restaurant" onChange={this.handleRestaurantChange} value={this.state.restaurant}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroup">
                        <Form.Control type="text" placeholder="Groceries" onChange={this.handleGroceriesChange} value={this.state.groceries}/>
                    </Form.Group>
                    <Button type="submit" variant="contained" class="btn btn-primary">Sign In</Button>
                    <Grid style={{marginLeft: "850px"}}></Grid>
                </form>
        )
    }
}
export default Transportation