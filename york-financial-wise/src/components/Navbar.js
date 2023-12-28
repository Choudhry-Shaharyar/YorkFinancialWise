import {Navbar, Container, Nav, NavDropDown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
function Navigation() {
  
  return (
    <><div className='header'>
      <h1>International Finance Hub @ York</h1> 
    </div><>



        <Navbar className='navbar-custom' expand='sm'>
          <Container>
            <Navbar.Brand href="/home">York University</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/learning">Learning</Nav.Link>
                <Nav.Link href="/banking">Banking</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </></>
  );
}

export default Navigation;