import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/ELITE.png';

export default function NavScrollBar() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container className='container' fluid>
        <Navbar.Brand href="#">
          <img className='logo' src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-4 fw-bold"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Leaderboard</Nav.Link>
            <Nav.Link href="#action2">Contest</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="dark">Sign up</Button>
            <Button className='ms-2' variant="outline-dark">Log in</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

