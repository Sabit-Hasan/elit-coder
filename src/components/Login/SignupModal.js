import React, { useState, useContext, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from "../../App";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";

const MyVerticallyCenteredModal = (props) => {
  const [popup, setPopup, authentication, setAuthentication] = useContext(UserContext);
  const [show, setShow] = useState({
    status: false,
    msg: ""
  });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const emailSignIn = event => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
      .then(userCredential => {
        // Signed in 
        const user = userCredential.user;

        // UPDATE PROFILE-------
        updateProfile(auth.currentUser, {
          displayName: nameRef.current.value
        }).then(() => {
          console.log("PROFILE UPDATED");
        }).catch((error) => {
          alert(error.errorMessage);
        });
        // ---------------------

        setAuthentication({
          loggedIn: true,
          email: user.email,
          displayName: nameRef.current.value,
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
          <h2>SIGN UP</h2>
          <span>Please fill up the form!</span>
          <form onSubmit={emailSignIn} className="d-flex flex-column mt-4 custom-form">
            <input type="text" placeholder="Full name" ref={nameRef} required />
            <input type="email" placeholder="Email" ref={emailRef} required />
            <input type="password" placeholder="Password" ref={passRef} required />
            <input className="mt-3" type="submit" value="CREATE" />
          </form>
          <div className="social-login mb-4">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
          </div>
          <span>Already have account?</span>
          <span
            className="text-muted ms-1 pointer-cursor"
            onClick={() => setPopup({
              signup: false,
              login: true
            })}
          >
            Login
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

export default function SignupModal() {
  const [popup, setPopup] = useContext(UserContext);

  return (
    <>
      <MyVerticallyCenteredModal
        show={popup.signup}
        onHide={() => setPopup({
          signup: false,
          login: false
        })}
      />
    </>
  );
}
