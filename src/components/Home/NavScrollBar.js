import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/ELITE.png';
import avatar from '../../assets/images/man.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase.config';

const DropdownMenu = () => {
  const [popup, setPopup, authentication, setAuthentication] = useContext(UserContext);

  const SignOut = () => {
    return (
      signOut(auth).then(() => {
        setAuthentication({
          loggedIn: false,
          email: undefined,
          displayName: undefined,
          photoUrl: undefined,
        })
      }).catch((error) => {
        alert(error.message);
      })
    );
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="white" id="dropdown-basic">
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className='d-flex align-items-center' href="">
            <img className='avatar-nav' src={avatar} alt="" />
            <div className='d-flex flex-column ms-2 text-sm'>
              <span className='fw-bold'>{authentication.displayName}</span>
              <span className='text-muted'>{authentication.email}</span>
            </div>
          </Dropdown.Item>
          <hr />
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <Dropdown.Item onClick={() => SignOut()}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default function NavScrollBar() {
  const [popup, setPopup, authentication, setAuthentication] = useContext(UserContext);
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
            <Nav.Link href="/leaderBoard">Leaderboard</Nav.Link>
            <Nav.Link href="/contest">Contest</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
          </Nav>
          {
            authentication.loggedIn ? (
              <>
                <div className='d-flex align-items-center'>
                  <span className='fw-bold'><i class="fa-solid fa-trophy"></i> 2300</span>
                  <img className='avatar-nav' src={avatar} alt="" />
                  <DropdownMenu />
                </div>
              </>
            ) : (
              <>
                <Form className="d-flex">
                  <Button
                    variant="dark"
                    onClick={() => setPopup({
                      signup: true,
                      login: false
                    })}
                  >
                    Sign up
                  </Button>
                  <Button
                    className='ms-2'
                    variant="outline-dark"
                    onClick={() => setPopup({
                      signup: false,
                      login: true
                    })}
                  >
                    Log in
                  </Button>
                </Form>
              </>
            )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

