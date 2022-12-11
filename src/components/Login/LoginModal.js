import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from "../../App";

const MyVerticallyCenteredModal = (props) => {
  const [popup, setPopup] = useContext(UserContext);
  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <h2>LOGIN</h2>
          <span>Please enter your email and password!</span>
          <form className="d-flex flex-column mt-4 custom-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <label>Forgot password?</label>
            <input type="submit" value="LOGIN" />
          </form>
          <div className="social-login mb-4">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
          </div>
          <span>Don't have an account?</span>
          <span 
            className="text-muted ms-1 pointer-cursor"
            onClick={() => setPopup({
              signup: true,
              login: false
            })}
          >
            Sign up
            </span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function LoginModal() {
  const [popup, setPopup] = useContext(UserContext);

  return (
    <>
      <MyVerticallyCenteredModal
        show={popup.login}
        onHide={() => setPopup({
          signup: false,
          login: false
        })}
      />
    </>
  );
}
