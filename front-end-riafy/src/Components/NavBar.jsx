import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

function navBar() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="colorDark"><h5>Store</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="colorDark"></Nav.Link>
            <Nav.Link href="#pricing" className="colorDark"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="colorDark">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="colorDark">
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default navBar;