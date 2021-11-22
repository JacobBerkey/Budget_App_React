import React, { Component } from "react";
import { Form } from "react-bootstrap"
import { Button, Grid } from '@material-ui/core';



class CreateNewHousing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            rent: [],
            mortgage: [],
            property_tax: [],
            hoa: [],
            maintenance: [],
            housing_date: [],
        };
    }

    handleRentChange = (event) => {
        this.setState({
            rent: event.target.value,
        });
    }

    handleMortgageChange = (event) => {
        this.setState({
            mortgage: event.target.value,
        });
    }

    handlePropertyTaxChange = (event) => {
        this.setState({
            property_tax: event.target.value,
        });
    }

    handleHOAChange = (event) => {
        this.setState({
            hoa: event.target.value,
        });
    }

    handleMaintenanceChange = (event) => {
        this.setState({
            maintenance: event.target.value,
        });
    }

    handleHousingDateChange = (event) => {
        this.setState({
            housing_date: event.target.value,
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const newHousing = {
            rent: parseInt(this.state.rent),
            mortgage: parseInt(this.state.mortgage),
            property_tax: parseInt(this.state.property_tax),
            hoa: parseInt(this.state.hoa),
            maintenance: parseInt(this.state.maintenance),
            housing_date: Date(this.state.housing_date),
        }
        console.log('Create Submit', this.props, newHousing)
        this.props.createNewHousing(newHousing);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2> Register A New Payment </h2>
                <Form.Group className="mb-3" controlId="formGroupHousing">
                    <Form.Control type="text" placeholder="Rent Payment" onChange={this.handleRentChange} value={this.state.rent} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHousing">
                    <Form.Control type="number" placeholder="Mortgage Payment" onChange={this.handleMortgageChange} value={this.state.mortgage} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHousing">
                    <Form.Control type="number" placeholder="Property Tax Payment" onChange={this.handlePropertyTaxChange} value={this.state.property_tax} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHousing">
                    <Form.Control type="number" placeholder="HOA Payment" onChange={this.handleHOAChange} value={this.state.hoa} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHousing">
                    <Form.Control type="number" placeholder="Maintenance Payment" onChange={this.handleMaintenanceChange} value={this.state.maintenance} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHousing">
                    <Form.Control type="date" placeholder="Date" onChange={this.handleHousingDateChange} value={this.state.housing_date} />
                </Form.Group>
                <Button type="submit" variant="contained" class="btn btn-primary">Create Payment</Button>
            </form>
        );
    }
}

export default CreateNewHousing;