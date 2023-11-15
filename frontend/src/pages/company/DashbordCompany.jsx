import React, { useEffect } from "react";
import NavCompany from "../../components/navbarElements/navUser/NavCompany";
import { Link } from "react-router-dom";
import "./dashbordCompany.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getCompany, getJobs } from "../../redux/action";
import DashbordDetails from "./DashbordDetails";

const DashbordCompany = () => {
  const { jobOffers } = useSelector((state) => state.JobReducer);
  const { companies } = useSelector((state) => state.EmployerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompany());
    dispatch(getJobs());
  }, []);
  console.log(jobOffers);
  return (
    <div>
      <div>
        <NavCompany />
      </div>
      <div style={{ display: "flex" }}>
        <div className="sidebar-company">
          <h1> Company space</h1>
          <Link to={"/CompanyProfile"}>
            <div>
              <AccountCircleIcon className="MUIi" />
              <h4>Profile</h4>
            </div>
          </Link>
          <Link to={"/CompanySpace"}>
            <div>
              <WorkIcon className="MUIi" />
              <h4>Create Job</h4>
            </div>
          </Link>
          <div>
            <DashboardIcon className="MUIi" />
            <h4>Dashbord</h4>
          </div>
        </div>
        <div className="dash-comp">
          <div className="dash-comp-nav">
            <h3 style={{ marginLeft: "-55px" }}>Job title</h3>
            <h3 style={{ marginLeft: "75px" }}>Region</h3>
            <h3 style={{ marginLeft: "10px" }}>Date</h3>
            <h3 style={{ marginLeft: "-25px" }}>Vacancies</h3>
            <h3 style={{ marginLeft: "-35px" }}>Update</h3>
            <h3>Delete</h3>
          </div>
          {jobOffers
            ?.filter((el) => el.company === companies?.company)
            .map((el) => (
              <DashbordDetails key={el._id} el={el} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashbordCompany;
