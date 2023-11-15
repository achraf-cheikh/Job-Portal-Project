import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJob, getCompany } from "../../redux/action";
import { Navigate } from "react-router-dom";
import NavCompany from "../../components/navbarElements/navUser/NavCompany";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./CompanySpace.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";

const CompanySpace = () => {
  const { isAuther, companies } = useSelector((state) => state.EmployerReducer);
  //states create job
  const [title, setTitle] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [company, setCompany] = useState(companies?.company);

  //--------------------------------------------------------------------
  // select state category
  const [category, setCategory] = useState("");
  const handleCategory = (newcat) => {
    setCategory(newcat);
  };

  // select state region
  const [region, setRegion] = useState("");
  const handleregion = (newreg) => {
    setRegion(newreg);
  };
  //-------------------------------------

  const dispatch = useDispatch();
  const handelCreate = (e) => {
    e.preventDefault();
    const newJob = {
      title,
      vacancies,
      salary,
      description,
      adress,
      category,
      region,
      company,
    };
    dispatch(createJob(newJob));
    setTitle("");
    setAdress("");
    setCategory("");
    setRegion("");
    setSalary("");
    setVacancies("");
    setDescription("");
  };

  useEffect(() => {
    dispatch(getCompany());
  }, []);

  return (
    <div>
      {!isAuther ? (
        <Navigate to={"/"} />
      ) : (
        <div>
          <NavCompany />
          <div style={{ display: "flex" }}>
            <div className="sidebar-company">
              <h1> Company space</h1>
              <Link to={"/CompanyProfile"}>
                <div>
                  <AccountCircleIcon className="MUIi" />
                  <h4>Profile</h4>
                </div>
              </Link>
              <div>
                <WorkIcon className="MUIi" />
                <h4>Create Job</h4>
              </div>
              <Link to={"/dashbordCompany"}>
                <div>
                  <DashboardIcon className="MUIi" />
                  <h4>Dashbord</h4>
                </div>
              </Link>
            </div>
            <div style={{ width: "1000px" }}>
              <h1 className="titl5">Create your job here </h1>
              <form className="F5" onSubmit={handelCreate}>
                <div className="all-form5">
                  <div className="left-form5">
                    <div>
                      <label className="lab51">Job Title : </label>
                      <input
                        className="input5"
                        type="text"
                        placeholder="job title"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </div>

                    <div>
                      <label className="lab52">Vacancies : </label>
                      <input
                        className="input5"
                        type="number"
                        placeholder="number of vacancies"
                        value={vacancies}
                        onChange={(e) => {
                          setVacancies(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label className="lab53">Adress : </label>
                      <input
                        className="input5"
                        type="text"
                        placeholder="adress"
                        value={adress}
                        onChange={(e) => {
                          setAdress(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label className="lab57">Company : </label>
                      <input
                        className="input5"
                        type="text"
                        placeholder=""
                        value={company}
                        onChange={(e) => {
                          setCompany(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="right-form5">
                    <div>
                      <label className="lab54">Salary : </label>
                      <input
                        className="input5"
                        type="text"
                        placeholder="Proposed remuneration"
                        value={salary}
                        onChange={(e) => {
                          setSalary(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label className="lab55">Rgion : </label>
                      <select
                        className="input5"
                        onChange={(e) => handleregion(e.target.value)}
                      >
                        <option></option>
                        <option value="sfax">sfax</option>
                        <option value="tunis">tunis</option>
                        <option value="sousse">sousse</option>
                        <option value="nabeul">nabeul</option>
                        <option value="bizerte">bizerte</option>
                        <option value="monastir">monastir</option>
                        <option value="gabes">gabes</option>
                        <option value="mahdia">mahdia</option>
                        <option value="gafsa">gafsa</option>
                      </select>
                    </div>
                    <div>
                      <label className="lab56">Category : </label>
                      <select
                        className="input5"
                        onChange={(e) => handleCategory(e.target.value)}
                      >
                        <option></option>
                        <option value="mecanique">mecanic</option>
                        <option value="informatique">informatic</option>
                        <option value="forage">drilling</option>
                        <option value="agronomie">agronomic</option>
                        <option value="call-center">call-center</option>
                        <option value="electrique">electric</option>
                        <option value="medecine">medical</option>
                        <option value="finance">finance</option>
                        <option value="comptabilité">comptability</option>
                        <option value="civile">civil</option>
                        <option value="autre">other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="textarea-container">
                  <textarea
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    placeholder="Écrivez ici..."
                  ></textarea>
                </div>
                <Button
                  className="btn-create-job"
                  variant="success"
                  type="submit"
                >
                  create job
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanySpace;
