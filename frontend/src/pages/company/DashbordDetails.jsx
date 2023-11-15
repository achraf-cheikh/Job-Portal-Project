import React, { useState } from "react";
import "./dashbordCompany.css";
import { useDispatch } from "react-redux";
import { UpdateJob, deleteJob } from "../../redux/action";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const DashbordDetails = ({ el }) => {
  //state modal bootstrap
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //--------------------------------------------
  const createdAt = el.createdAt;
  // Convertissez la chaîne de date en objet Date
  const dateObj = new Date(createdAt);
  // Récupérez le jour, le mois et l'année
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const date = `${day}/${month}/${year}`;
  const dispatch = useDispatch();
  const handledelete = () => {
    dispatch(deleteJob(el._id));
    window.location.reload();
  };
  //--------------------------------------------------
  const [title, setTitle] = useState(el.title);
  const [description, setDescription] = useState(el.description);
  const [vacancies, setVacancies] = useState(el.vacancies);

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const updatedJob = {
      _id: el._id,
      title,
      description,
      vacancies,
    };
    dispatch(UpdateJob(updatedJob));
    window.location.reload();
  };

  return (
    <div className="dashbord-details">
      <h6 style={{ width: "200px", textAlign: "start" }}>{el.title}</h6>
      <h6 style={{ width: "100px", textAlign: "start" }}>{el.region}</h6>
      <h6 style={{ width: "120px", textAlign: "start" }}>{date}</h6>
      <h6 style={{ width: "50px", textAlign: "start" }}>{el.vacancies}</h6>

      <Button
        variant="primary"
        onClick={handleShow}
        className="btn-upd-dash"
        style={{ width: "120px", textAlign: "start" }}
      >
        update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateJob}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Job title</Form.Label>
              <Form.Control
                type="text"
                placeholder="job"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Vacancies</Form.Label>
              <Form.Control
                type="number"
                placeholder="vacancies"
                autoFocus
                value={vacancies}
                onChange={(e) => setVacancies(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose} type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <button
        className="btn-del-dash"
        style={{ width: "120px", textAlign: "start" }}
        onClick={() => handledelete()}
      >
        delete
      </button>
    </div>
  );
};

export default DashbordDetails;
