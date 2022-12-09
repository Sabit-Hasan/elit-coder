import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/ELITE.png';
import { useContext } from 'react';
import { UserContext } from '../../App';

export default function NavScrollBar() {
  const [popup, setPopup] = useContext(UserContext);

  return (
    <Navbar className='fixed-top' bg="white" expand="lg">
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
            <Nav.Link className='text-dark' href="/">Home</Nav.Link>
            <Nav.Link href="">Leaderboard</Nav.Link>
            <Nav.Link href="">Contest</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              variant="dark"
              onClick={() => setPopup(true)}
            >
              Sign up
            </Button>
            <Button
              className='ms-2'
              variant="outline-dark"
              onClick={() => setPopup(true)}
            >
              Log in
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

