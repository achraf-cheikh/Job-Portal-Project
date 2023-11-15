import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Loginadmin } from "../../redux/action";
import { Navigate } from "react-router-dom";

import "./main.css";
//importation bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function LoginAdmin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //states login admin
  const [emailad, setEmailad] = useState("");
  const [passwordad, setPasswordad] = useState("");
  //----------------------------------------------------
  const dispatch = useDispatch();

  // submit employer
  const handelSubmitad = (e) => {
    e.preventDefault();
    const admin = {
      email: emailad,
      password: passwordad,
    };
    dispatch(Loginadmin(admin));
  };

  const { loadingad, admins /*errors*/ } = useSelector(
    (state) => state.AdminReducer
  );

  return (
    <>
      {loadingad ? (
        <h1>Loading ...</h1>
      ) : // ) : errors ? (
      //   alert(`${errors.errors[0].msg}`)
      admins ? (
        <Navigate replace={true} to={"/adminSpace"} />
      ) : (
        <div>
          <Button className="btn-admin" variant="light" onClick={handleShow}>
            Admin
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>connexion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handelSubmitad}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    value={emailad}
                    onChange={(e) => {
                      setEmailad(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="*********"
                    autoFocus
                    value={passwordad}
                    onChange={(e) => {
                      setPasswordad(e.target.value);
                    }}
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose} type="submit">
                    connexion
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export default LoginAdmin;
