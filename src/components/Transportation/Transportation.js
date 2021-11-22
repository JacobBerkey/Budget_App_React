import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';



class CreateNewTransportation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            auto_payment: [],
            fuel: [],
            public_transportation: [],
            auto_maintenance: [],
            transportation_date: [],
        };
    }

    handleAutoPaymentChange = (event) => {
        this.setState({
            auto_payment: event.target.value,
        });
    }

    handleFuelChange = (event) => {
        this.setState({
            fuel: event.target.value,
        });
    }

    handlePublicTransportationChange = (event) => {
        this.setState({
            public_transportation: event.target.value,
        });
    }

    handleAutoMaintenanceChange = (event) => {
        this.setState({
            auto_maintenance: event.target.value,
        });
    }

    handleTransportationDateChange = (event) => {
        this.setState({
            transportation_date: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newTransportation = {
            auto_payment: parseInt(this.state.auto_payment),
            fuel: parseInt(this.state.fuel),
            public_transportation: parseInt(this.state.public_transportation),
            auto_maintenance: parseInt(this.state.auto_maintenance),
            transportation_date: Date(this.state.transportation_date),
        }
        console.log('Create Submit', this.props, newTransportation)
        this.props.CreateNewTransportation(newTransportation);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A New Payment </h2>
                <Form.Group className="mb-3" controlId="formGroupAutoPayment">
                    <Form.Control type="text" placeholder="Auto Payment" onChange={this.handleAutoPaymentChange} value={this.state.auto_payment} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupFuel">
                    <Form.Control type="number" placeholder="Fuel Payment" onChange={this.handleFuelChange} value={this.state.fuel} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPublicTransportation">
                    <Form.Control type="number" placeholder="Public Transportation Payment" onChange={this.handlePublicTransportationChange} value={this.state.public_transportation} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAutoMaintenance">
                    <Form.Control type="number" placeholder="Auto-Maintenance Payment" onChange={this.handleAutoMaintenanceChange} value={this.state.auto_maintenance} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupAutoMaintenance">
                    <Form.Control type="date" placeholder="Date" onChange={this.handleTransportationDateChange} value={this.state.transportation_date} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-primary">Create Payment</Button>
            </form>
        );
    }
}

export default CreateNewTransportation;