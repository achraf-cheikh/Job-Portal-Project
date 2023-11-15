import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loginemployee } from "../../redux/action";
import { Navigate } from "react-router-dom";
import "./main.css";
//importation bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LoginEmployee = () => {
  //bootsrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //states login employee
  const [emailee, setEmailee] = useState("");
  const [passwordee, setPasswordee] = useState("");
  //----------------------------------------------------
  const dispatch = useDispatch();

  // submit employee
  const handelSubmitee = (e) => {
    e.preventDefault();
    const Employee = {
      email: emailee,
      password: passwordee,
    };
    dispatch(Loginemployee(Employee));
  };

  const { loadingee, users /*errors*/ } = useSelector(
    (state) => state.EmployeeReducer
  );

  return (
    <div>
      {loadingee ? (
        <h1>Loading ...</h1>
      ) : // ) : errors ? (
      //   alert(`${errors.errors[0].msg}`)
      users ? (
        <Navigate to={"/offers"} />
      ) : (
        <div>
          <Button className="sec2-btn1" onClick={handleShow}>
            Espace Candidat
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>connexion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handelSubmitee}>
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
                    value={emailee}
                    onChange={(e) => {
                      setEmailee(e.target.value);
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
                    value={passwordee}
                    onChange={(e) => {
                      setPasswordee(e.target.value);
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

export default LoginEmployee;
