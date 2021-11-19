
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './NavBar.css'



function NavBar(props) {
    return(
        <Navbar collapseOnSelect expand="lg" className="NavBar-color" variant="light">
  <Container>
        <a className="navbar-brand" href="#">
        </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Fill</Nav.Link>
                    <Nav.Link href="/">Fill</Nav.Link> 
                    <Nav.Link href="/">Fill</Nav.Link>                
                    </Nav>
                    <Nav>
                    {props.user &&<Nav.Link href="/">fill</Nav.Link>}
                    {props.user &&<Nav.Link href="/">Fill</Nav.Link>}
                    {props.user &&<Nav.Link href="/">Fill</Nav.Link>}
                    {!props.user && <Nav.Link onClick={props.userSignIn} href="/login">Login</Nav.Link>}
                    {!props.user &&<Nav.Link  onClick={props.createNewUser} href="/SignUp">Register</Nav.Link>} 
                    {props.user &&<Nav.Link onClick={props.logOutUser} href="/login">Logout</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
          </Container>
</Navbar>
    );
}
export default NavBar;