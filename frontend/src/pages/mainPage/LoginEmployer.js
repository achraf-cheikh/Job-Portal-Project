import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loginemployer } from "../../redux/action";
import { Navigate } from "react-router-dom";
import "./main.css";
//importation bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LoginEmployer = () => {
  //bootsrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //states login employer
  const [emailer, setEmailer] = useState("");
  const [passworder, setPassworder] = useState("");
  //----------------------------------------------------
  const dispatch = useDispatch();

  // submit employer
  const handelSubmiter = (e) => {
    e.preventDefault();
    const Employer = {
      email: emailer,
      password: passworder,
    };
    dispatch(Loginemployer(Employer));
  };

  const { loadinger, companies /*errors*/ } = useSelector(
    (state) => state.EmployerReducer
  );

  return (
    <div>
      {loadinger ? (
        <h1>Loading ...</h1>
      ) : // ) : errors ? (
      //   alert(`${errors.errors[0].msg}`)
      companies ? (
        <Navigate to={"/CompanySpace"} />
      ) : (
        <div>
          <Button className="sec2-btn2" onClick={handleShow}>
            Espace Employeur
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>connexion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handelSubmiter}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ marginRight: "410px" }}>
                    Email :
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    autoFocus
                    value={emailer}
                    onChange={(e) => {
                      setEmailer(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label style={{ marginRight: "350px" }}>
                    Mot de passe :
                  </Form.Label>
                  <Form.Control
                    type="password"
                    autoFocus
                    value={passworder}
                    onChange={(e) => {
                      setPassworder(e.target.value);
                    }}
                  />
                </Form.Group>
                <Modal.Footer>
                  <Button
                    className="btn-conx"
                    onClick={handleClose}
                    type="submit"
                  >
                    connexion
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default LoginEmployer;
