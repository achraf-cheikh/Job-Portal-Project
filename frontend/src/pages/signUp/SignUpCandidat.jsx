import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./signUpCandidat.css";
import Button from "react-bootstrap/Button";
import { registerEmployee } from "../../redux/action";

const SignUpCandidat = () => {
  //states register employee
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [scholarship, setScholarship] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [field, setField] = useState("");
  const [experience, setExperience] = useState("");
  const [cv, setCv] = useState(null);
  //--------------------------------------------------------------------

  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      email,
      password,
      gender,
      scholarship,
      birthdate,
      field,
      experience,
      cv,
      phone,
      adress,
    };
    dispatch(registerEmployee(newEmployee));
  };

  const { loadingee, users /*errors*/ } = useSelector(
    (state) => state.EmployeeReducer
  );

  const handleFile = (e) => {
    let files = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataURL = e.target.result;
      files = dataURL;
      setCv(files);
    };
    reader.readAsDataURL(files);
  };
  return (
    <div>
      {loadingee ? (
        <h1>Loading ...</h1>
      ) : // ) : errors ? (
      //   alert(`${errors.errors[0].msg}`)
      users ? (
        <Navigate to={"/"} />
      ) : (
        <div>
          <h1 className="titl1">Create your candidate space </h1>
          <form className="F2" onSubmit={handelSubmit}>
            <div className="all-form2">
              <div className="left-form2">
                <div>
                  <label className="lab21">FirstName : </label>
                  <input
                    className="input2"
                    type="text"
                    placeholder="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab22">LastName : </label>
                  <input
                    className="input2"
                    type="text"
                    placeholder="lastname"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab23">Email : </label>
                  <input
                    className="input2"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab24">Gender : </label>
                  <input
                    className="input2"
                    type="text"
                    placeholder="male/female"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab25">BirthDate : </label>
                  <input
                    className="input2"
                    type="text"
                    placeholder="__ /__ /____"
                    value={birthdate}
                    onChange={(e) => {
                      setBirthdate(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab26">Password : </label>
                  <input
                    className="input2"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="right-form2">
                <div>
                  <label className="lab27">Schoolarship : </label>
                  <input
                    className="input2"
                    type="text"
                    placeholder="scholarship"
                    value={scholarship}
                    onChange={(e) => {
                      setScholarship(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab28">Field : </label>
                  <input
                    className="input2"
                    type="text"
                    placeholder="field"
                    value={field}
                    onChange={(e) => {
                      setField(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab29">Experience : </label>
                  <input
                    className="input2"
                    type="number"
                    placeholder="year of experience"
                    value={experience}
                    onChange={(e) => {
                      setExperience(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab30">CV : </label>
                  <input
                    className="input2"
                    type="file"
                    id="file"
                    placeholder="upload your file"
                    onChange={(e) => handleFile(e)}
                  />
                </div>
                <div>
                  <label className="lab31">Phone : </label>
                  <input
                    className="input2"
                    type="text"
                    placeholder="(+216)"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="lab32">Adress : </label>
                  <input
                    className="input2"
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
              className="btn-signUp2"
              variant="outline-info"
              type="submit"
            >
              Register
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpCandidat;
