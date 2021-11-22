import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';



class CreateNewUtility extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            water: [],
            electricity: [],
            hvac: [],
            gas: [],
            sewage: [],
            internet: [],
            phone: [],
            utilities_date: [],
        };
    }

    handleWaterChange = (event) => {
        this.setState({
            water: event.target.value,
        });
    }

    handleElectricityChange = (event) => {
        this.setState({
            electricity: event.target.value,
        });
    }

    handleHVACChange = (event) => {
        this.setState({
            hvac: event.target.value,
        });
    }

    handleGasChange = (event) => {
        this.setState({
            gas: event.target.value,
        });
    }

    handleSewageChange = (event) => {
        this.setState({
            sewage: event.target.value,
        });
    }

    handleInternetChange = (event) => {
        this.setState({
            internet: event.target.value,
        });
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value,
        });
    }

    handleUtilitiesDateChange = (event) => {
        this.setState({
            utilities_date: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newUtility = {
            water: parseInt(this.state.water),
            electricity: parseInt(this.state.electricity),
            hvac: parseInt(this.state.hvac),
            gas: parseInt(this.state.gas),
            sewage: parseInt(this.state.sewage),
            internet: parseInt(this.state.internet),
            phone: parseInt(this.state.phone),
            utilities_date: Date(this.state.utilities_date),
        }
        console.log('Create Submit', this.props, newUtility)
        this.props.createNewUtility(newUtility);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A New Payment </h2>
                <Form.Group className="mb-3" controlId="formGroupWater">
                    <Form.Control type="text" placeholder="Water Payment" onChange={this.handleWaterChange} value={this.state.water} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupElectricity">
                    <Form.Control type="number" placeholder="Electricity Payment" onChange={this.handleElectricityChange} value={this.state.electricity} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHVAC">
                    <Form.Control type="number" placeholder="HVAC Payment" onChange={this.handleHVACChange} value={this.state.hvac} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupGas">
                    <Form.Control type="number" placeholder="Gas Payment" onChange={this.handleGasChange} value={this.state.gas} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupSewage">
                    <Form.Control type="number" placeholder="Sewage Payment" onChange={this.handleSewageChange} value={this.state.sewage} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupInternet">
                    <Form.Control type="number" placeholder="Internet Payment" onChange={this.handleInternetChange} value={this.state.internet} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                    <Form.Control type="number" placeholder="Phone Payment" onChange={this.handlePhoneChange} value={this.state.phone} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                    <Form.Control type="date" placeholder="Date" onChange={this.handleUtilitiesDateChange} value={this.state.utilities_date} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-primary">Create Payment</Button>
            </form>
        );
    }
}

export default CreateNewUtility;