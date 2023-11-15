import React, { useEffect } from "react";
import "./profile.css";
import NavUser from "../../components/navbarElements/navUser/NavUser";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfilee, getUser } from "../../redux/action";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Profile = () => {
  //modal bootstrap state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //---------------------------------------------

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const { users, isAuthee } = useSelector((state) => state.EmployeeReducer);

  // state to edit profile
  const [email, setEmail] = useState(users?.email);
  const [gender, setGender] = useState(users?.gender);
  const [birthdate, setBirthdate] = useState(users?.birthdate);
  const [scholarship, setScholarship] = useState(users?.scholarship);
  const [field, setField] = useState(users?.field);
  const [experience, setExperience] = useState(users?.experience);
  const [phone, setPhone] = useState(users?.phone);
  const [adress, setAdress] = useState(users?.adress);

  const handleEditee = (e) => {
    e.preventDefault();
    const editedUser = {
      _id: users._id,
      email,
      gender,
      birthdate,
      scholarship,
      field,
      experience,
      phone,
      adress,
    };
    dispatch(UpdateProfilee(editedUser));
  };

  return (
    <div>
      <NavUser />
      {!isAuthee ? (
        <Navigate to={"/"} />
      ) : (
        <div style={{ display: "flex" }}>
          <div className="sidebar-user">
            <h1> Condidate space</h1>

            <div>
              <AccountCircleIcon className="MUIi1" />
              <h4>Profile</h4>
            </div>

            <Link to={"/offers"}>
              <div>
                <WorkIcon className="MUIi1" />
                <h4>Find Job</h4>
              </div>
            </Link>
            <Link to={"/dashbordCondidate"}>
              <div>
                <DashboardIcon className="MUIi1" />
                <h4>Dashbord</h4>
              </div>
            </Link>
          </div>
          <div className="full-section-profile1">
            <div
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "20px",
              }}
            >
              <img
                src="/images/profile.png"
                alt="profile-img"
                className="profile-img"
              />
            </div>
            <div>
              <div className="profile-fullname">
                <h1>{users.firstName}</h1>
                <h1>{users.lastName}</h1>
                <div>
                  <Button
                    variant="info"
                    onClick={handleShow}
                    style={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "space-around",
                      width: "110px",
                      height: "38px",
                    }}
                  >
                    <UpgradeIcon />
                    <h2
                      style={{
                        color: "black",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      Edit
                    </h2>
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handleEditee}>
                        <Form.Group>
                          <Form.Label style={{ marginLeft: "-400px" }}>
                            Email :
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label style={{ marginLeft: "-390px" }}>
                            Gender :
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="male/female"
                            autoFocus
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label style={{ marginLeft: "-380px" }}>
                            birthdate :
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="_/_/_"
                            autoFocus
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label style={{ marginLeft: "-365px" }}>
                            scholarship :
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="scholarship"
                            autoFocus
                            value={scholarship}
                            onChange={(e) => setScholarship(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label style={{ marginLeft: "-415px" }}>
                            field :
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="field"
                            autoFocus
                            value={field}
                            onChange={(e) => setField(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label style={{ marginLeft: "-370px" }}>
                            experience :
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="experience"
                            autoFocus
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label style={{ marginLeft: "-400px" }}>
                            phone :
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="phone"
                            autoFocus
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label style={{ marginLeft: "-400px" }}>
                            adress :
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="male/female"
                            autoFocus
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                          />
                        </Form.Group>
                        <Modal.Footer>
                          <Button
                            variant="primary"
                            onClick={handleClose}
                            type="submit"
                          >
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
              <hr />
              <div style={{ width: "600px", marginTop: "20px" }}>
                <div className="profile-data">
                  <p>
                    <strong>E-mail :</strong> {users.email}
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <strong>Gender :</strong> {users.gender}
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <strong>Birthdate :</strong> {users.birthdate}
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <strong>Scholarship :</strong> {users.scholarship}
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <strong>Field :</strong> {users.field}
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <strong>Year of experience :</strong> {users.experience}
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <strong>Phone :</strong> {users.phone}
                  </p>
                </div>
                <div className="profile-data">
                  <p>
                    <strong>Adress :</strong> {users.adress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
