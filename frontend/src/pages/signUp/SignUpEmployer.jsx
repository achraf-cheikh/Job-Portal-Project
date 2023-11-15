import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./signUpEmployer.css";
import Button from "react-bootstrap/Button";
import { registerEmployer } from "../../redux/action";
import { Navigate } from "react-router-dom";

const SignUpEmployer = () => {
  //states register employer
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [logo, setLogo] = useState("");
  //---------------------------------------------------------------
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const newEmployer = {
      firstName,
      lastName,
      email,
      password,
      company,
      phone,
      adress,
      logo,
    };
    dispatch(registerEmployer(newEmployer));
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
        <Navigate to={"/"} />
      ) : (
        <div>
          <h1 className="titl2">Create your Company space </h1>
          <form className="F1" onSubmit={handelSubmit}>
            <div className="all-form">
              <div className="left-form">
                <div>
                  <label className="lab1">FirstName : </label>
                  <input
                    className="input1"
                    type="text"
                    placeholder="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab2">LastName : </label>
                  <input
                    className="input1"
                    type="text"
                    placeholder="lastname"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab3">Email : </label>
                  <input
                    className="input1"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab4">Password : </label>
                  <input
                    className="input1"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="right-form">
                <div>
                  <label className="lab5">Company : </label>
                  <input
                    className="input1"
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab6">Logo : </label>
                  <input
                    className="input1"
                    type="file"
                    value={logo}
                    onChange={(e) => {
                      setLogo(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab7">Phone : </label>
                  <input
                    className="input1"
                    type="text"
                    placeholder="(+216)"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab8">Adress : </label>
                  <input
                    className="input1"
                    type="text"
                    placeholder="adress"
                    value={adress}
                    onChange={(e) => {
                      setAdress(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="btn-signUp1"
              variant="outline-success"
            >
              Register
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpEmployer;
