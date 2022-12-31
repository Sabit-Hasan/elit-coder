import React, { useContext, useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import { UserContext } from "../../App";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, google, facebook } from "../../firebase.config";

const MyVerticallyCenteredModal = (props) => {
  const [popup, setPopup, authentication, setAuthentication] = useContext(UserContext);

  const [show, setShow] = useState({
    status: false,
    msg: ""
  });

  const emailRef = useRef(null);
  const passRef = useRef(null);

  const SignInWithEmail = event => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setAuthentication({
          loggedIn: true,
          email: user.email,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        });

        setPopup({
          signup: false,
          login: false
        })
      })
      .catch((error) => {
        setShow({
          status: true,
          msg: error.message
        });
      });
  }

  const SignInWithGoogle = () => {
    signInWithPopup(auth, google)
      .then((result) => {
        const user = result.user;
        setAuthentication({
          loggedIn: true,
          email: user.email,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        });

        setPopup({
          signup: false,
          login: false
        })
      }).catch((error) => {
        setShow({
          status: true,
          msg: error.message
        });
      });
  }

  const SignInWithFacebook = () => {
    signInWithPopup(auth, facebook)
      .then((result) => {
        const user = result.user;
        setAuthentication({
          loggedIn: true,
          email: user.email,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        });

        setPopup({
          signup: false,
          login: false
        })
      }).catch((error) => {
        setShow({
          status: true,
          msg: error.message
        });
      });
  }

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
          <form onSubmit={SignInWithEmail} className="d-flex flex-column mt-4 custom-form">
            <input type="email" placeholder="Email" ref={emailRef} required />
            <input type="password" placeholder="Password" ref={passRef} required />
            <label>Forgot password?</label>
            <input type="submit" value="LOGIN" />
          </form>
          <div className="social-login mb-4">
            <i class="fa-brands fa-facebook-f social-icon" onClick={() => SignInWithFacebook()}></i>
            <i class="fa-brands fa-twitter social-icon"></i>
            <i class="fa-brands fa-google social-icon" onClick={() => SignInWithGoogle()}></i>
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
          {
            show.status && (
              <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <p>{show.msg}</p>
              </Alert>
            )
          }
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
