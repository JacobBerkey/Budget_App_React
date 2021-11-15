import {Button} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Offcanvas} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'



function NavBar(props) {
    return(
        <Navbar bg="dark" variant="dark" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Budget Pro</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Navigate</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#action2">Ways to Save!</Nav.Link>
          <Nav.Link href="Stocks">Visit Most Popular Stocks!</Nav.Link>
          <Nav.Link href="#action2">Set A Goal!</Nav.Link>
          <NavDropdown title="Options" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="Login">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="Logout">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
    </Navbar>
    )
}
export default NavBar
