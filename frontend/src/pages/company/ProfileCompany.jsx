import React, { useEffect, useState } from "react";
import "./ProfileCompany.css";
import { useDispatch, useSelector } from "react-redux";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import NavCompany from "../../components/navbarElements/navUser/NavCompany";
import { UpdateProfiler, getCompany } from "../../redux/action";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";

const ProfileCompany = () => {
  //modal bootstrap state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //---------------------------------------------
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompany());
  }, []);

  const { companies, isAuther } = useSelector((state) => state.EmployerReducer);

  // state to edit profile
  const [email, setEmail] = useState(companies?.email);
  const [company, setCompany] = useState(companies?.company);
  const [phone, setPhone] = useState(companies?.phone);
  const [adress, setAdress] = useState(companies?.adress);

  const handleEditer = (e) => {
    e.preventDefault();
    const editedCompany = {
      _id: companies._id,
      email,
      company,
      phone,
      adress,
    };
    dispatch(UpdateProfiler(editedCompany));
  };

  return (
    <div>
      <NavCompany />

      {!isAuther ? (
        <Navigate to={"/"} />
      ) : (
        <div style={{ display: "flex" }}>
          <div className="sidebar-company">
            <h1> Company space</h1>
            <div>
              <AccountCircleIcon className="MUIi" />
              <h4>Profile</h4>
            </div>
            <Link to={"/CompanySpace"}>
              <div>
                <WorkIcon className="MUIi" />
                <h4>Create Job</h4>
              </div>
            </Link>
            <Link to={"/dashbordCompany"}>
              <div>
                <DashboardIcon className="MUIi" />
                <h4>Dashbord</h4>
              </div>
            </Link>
          </div>
          <div className="full-section-profile">
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
                className="profile-img1"
              />
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <div>
                  <div className="profile-data2">
                    <p>
                      <strong>{companies.company}</strong>
                    </p>
                  </div>
                  <div className="profile-fullname1">
                    <h1>{companies.firstName}</h1>
                    <h1>{companies.lastName}</h1>
                  </div>
                </div>
                <div>
                  <Button
                    variant="success"
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
                        color: "white",
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
                      <Form onSubmit={handleEditer}>
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
                          <Form.Label style={{ marginLeft: "-370px" }}>
                            company :
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="company name"
                            autoFocus
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
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
                <div className="profile-data1">
                  <p>
                    <strong>E-mail :</strong> {companies.email}
                  </p>
                </div>

                <div className="profile-data1">
                  <p>
                    <strong>Phone :</strong> {companies.phone}
                  </p>
                </div>
                <div className="profile-data1">
                  <p>
                    <strong>Adress :</strong> {companies.adress}
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

export default ProfileCompany;
