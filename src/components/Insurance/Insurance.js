import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';



class CreateNewInsurance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            home_insurance: [],
            auto_insurance: [],
            life_insurance: [],
            insurance_date: [],
        };
    }

    handleHomeInsuranceChange = (event) => {
        this.setState({
            home_insurance: event.target.value,
        });
    }

    handleAutoInsuranceChange = (event) => {
        this.setState({
            auto_insurance: event.target.value,
        });
    }

    handleLifeInsuranceChange = (event) => {
        this.setState({
            life_insurance: event.target.value,
        });
    }

    handleInsuranceDateChange = (event) => {
        this.setState({
            insurance_date: event.target.value,
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const newInsurance = {
            home_insurance: parseInt(this.state.home_insurance),
            auto_insurance: parseInt(this.state.auto_insurance),
            life_insurance: parseInt(this.state.life_insurance),
            insurance_date: Date(this.state.insurance_date)
        }
        console.log('Create Submit', this.props, newInsurance)
        this.props.createNewInsurance(newInsurance);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A New Payment </h2>
                <Form.Group className="mb-3" controlId="formGroupInsurance">
                    <Form.Control type="text" placeholder="Home Insurance Payment" onChange={this.handleHomeInsuranceChange} value={this.state.home_insurance} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupInsurance">
                    <Form.Control type="number" placeholder="Auto Insurance Payment" onChange={this.handleAutoInsuranceChange} value={this.state.auto_insurance} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupInsurance">
                    <Form.Control type="number" placeholder="Life Insurance Payment" onChange={this.handleLifeInsuranceChange} value={this.state.life_insurance} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupInsurance">
                    <Form.Control type="date" placeholder="Date" onChange={this.handleInsuranceDateChange} value={this.state.insurance_date} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-primary">Create Payment</Button>
            </form>
        );
    }
}

export default CreateNewInsurance;