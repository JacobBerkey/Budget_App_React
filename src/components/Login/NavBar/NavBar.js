
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {NavDropdown} from 'react-bootstrap'
import './NavBar.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'



function NavBar(props) {
    return(
        <Navbar collapseOnSelect expand="lg" className="NavBar-color" variant="light">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    {props.user && <Nav.Link href="/Stocks">Stocks</Nav.Link>}
    {props.user && <Nav.Link href="/Graph">Graph</Nav.Link>}
      <NavDropdown title="Payments" id="collasible-nav-dropdown">
        {props.user &&<NavDropdown.Item href="/CreateNewFood">Create Food Payments</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/CreateNewExpense">Create Personal Expense Payments</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/CreateNewInsurance">Create Insurance Payments</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/CreateNewTransportation">Create Transportation Payments</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/CreateNewHousing">Create Housing Payments</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/CreateNewUtility">Create Utility Payments</NavDropdown.Item>}
      </NavDropdown>
      <NavDropdown title="Tips" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/waystosave">Ways To Save</NavDropdown.Item>
        <NavDropdown.Item href="https://mint.intuit.com/investments/">Ways To Invest</NavDropdown.Item>
        <NavDropdown.Item href="https://mint.intuit.com/credit-cards/">Credit Cards</NavDropdown.Item>
        <NavDropdown.Item href="https://mint.intuit.com/personal-loans/">Personal Loans</NavDropdown.Item>
        <NavDropdown.Item href="https://mint.intuit.com/banking/">Banking</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    {!props.user && <Nav.Link onClick={props.userSignIn} href="/login">Login</Nav.Link>}
    {!props.user &&<Nav.Link  onClick={props.createNewUser} href="/SignUp">Register</Nav.Link>}
    <NavDropdown title="View Bill Statement" id="collasible-nav-dropdown">
        {props.user &&<NavDropdown.Item href="/FoodBill">Food Bill</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/ExpenseBill">Expense Bill</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/InsuranceBill">Insurance Bill</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/TransportationBill">Transportation Bill</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/HousingBill">Housing Bill</NavDropdown.Item>}
        {props.user &&<NavDropdown.Item href="/UtilityBill">Utility Bill</NavDropdown.Item>}
      </NavDropdown>
    {props.user &&<Nav.Link onClick={props.logOutUser} href="/login">Logout</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
export default NavBar;