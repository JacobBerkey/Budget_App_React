import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';



class CreateNewExpense extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            hobbies: [],
            clothes: [],
            streaming_services: [],
            subscriptions: [],
            expense_date:[]
        };
    }

    handleHobbiesChange = (event) => {
        this.setState({
            hobbies: event.target.value,
        });
    }

    handleClothesChange = (event) => {
        this.setState({
            clothes: event.target.value,
        });
    }

    handleStreamingServicesChange = (event) => {
        this.setState({
            streaming_services: event.target.value,
        });
    }

    handleSubscriptionsChange = (event) => {
        this.setState({
            subscriptions: event.target.value,
        });
    }

    handleExpenseDateChange = (event) => {
        this.setState({
            expense_date: event.target.value,
        });
    }



    handleSubmit = (event) => {
        event.preventDefault();
        const newExpense = {
            hobbies: parseInt(this.state.hobbies),
            clothes: parseInt(this.state.clothes),
            streaming_services: parseInt(this.state.streaming_services),
            subscriptions: parseInt(this.state.subscriptions),
            expense_date: Date(this.state.expense_date),
        }
        console.log('Create Submit', this.props, newExpense)
        this.props.createNewExpense(newExpense);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A New Payment </h2>
                <Form.Group className="mb-3" controlId="formGroupExpense">
                    <Form.Control type="text" placeholder="Hobbies Payment" onChange={this.handleHobbiesChange} value={this.state.hobbies} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupExpense">
                    <Form.Control type="number" placeholder="Clothing Payment" onChange={this.handleClothesChange} value={this.state.clothes} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupExpense">
                    <Form.Control type="number" placeholder="Streaming-Services Payment" onChange={this.handleStreamingServicesChange} value={this.state.streaming_services} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupExpense">
                    <Form.Control type="number" placeholder="Subscription Payment" onChange={this.handleSubscriptionsChange} value={this.state.subscriptions} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupExpense">
                    <Form.Control type="date" placeholder="Date(yr-month-day)" onChange={this.handleExpenseDateChange} value={this.state.expense_date} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-primary">Create Payment</Button>
            </form>
        );
    }
}

export default CreateNewExpense;