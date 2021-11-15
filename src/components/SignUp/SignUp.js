import React, { useState } from 'react'
import {Form} from "react-bootstrap"
import {Button, Grid} from '@material-ui/core';
import {Col} from 'react-bootstrap'
import {Row} from 'react-bootstrap'




const SignUp = (props) => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [middleName, setMiddleName] = useState();
  const [prefix, setPrefix] = useState();
  const [monthlyIncome, setMonthlyIncome] = useState();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handlePrefixChange = (event) => {
    setPrefix(event.target.value)
  }
  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value)
  }
  const handleMonthlyIncomeChange = (event) => {
    setMonthlyIncome(event.target.value)
  }


    const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        prefix: prefix,
        username: username,
        email: email,
        monthly_income: monthlyIncome,
        password: password,
    }
    props.createNewUser(newUser);
    };

    return (
      <div>
                    <h2> Register </h2>
                    <br />
                    <Form onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="Enter First Name" onChange={handleFirstNameChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Last Name" onChange={handleLastNameChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Middle Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Middle Name" onChange={handleMiddleNameChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPrefix">
      <Form.Label>Middle Name</Form.Label>
      <Form.Control type="Prefix" placeholder="Enter Prefix" onChange={handlePrefixChange}/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridUserName">
    <Form.Label>Username</Form.Label>
    <Form.Control placeholder="Enter UserName" onChange={handleUsernameChange}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Enter Email" onChange={handleEmailChange}/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridIncome">
      <Form.Label>Monthly Income</Form.Label>
      <Form.Control placeholder="Enter Monthly Income" onChange={handleMonthlyIncomeChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control placeholder="Enter Password" onChange={handlePasswordChange}/>
    </Form.Group>
  </Row>
  <Button type="submit" variant="contained" class="btn btn-primary">Sign In</Button>
  </Form>
  </div>
    )
}
export default SignUp