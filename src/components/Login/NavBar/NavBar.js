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
          <Nav.Link href="https://mint.intuit.com/credit-cards/">Ways to Save!</Nav.Link>
          <Nav.Link href="Stocks">View Stocks!</Nav.Link>
          <Nav.Link href="#action2">Set A Goal!</Nav.Link>
          <Nav.Link href="#action3">Edit Profile</Nav.Link>
          <NavDropdown title="Create Payments" id="offcanvasNavbarDropdown">
          <NavDropdown.Item href="Food">Create Food Payment</NavDropdown.Item>
          <NavDropdown.Item href="Expenses">Create Expense Payment</NavDropdown.Item>
          <NavDropdown.Item href="Insurance">Create Insurance Payment</NavDropdown.Item>
          <NavDropdown.Item href="Transportation">Create Transportation Payment</NavDropdown.Item>
          <NavDropdown.Item href="Housing">Create House Payment</NavDropdown.Item>
          <NavDropdown.Item href="Utilities">Create Utility Payment</NavDropdown.Item>
          </NavDropdown>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Nav.Link href="Logout">Logout</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
    </Navbar>
    )
}
export default NavBar
