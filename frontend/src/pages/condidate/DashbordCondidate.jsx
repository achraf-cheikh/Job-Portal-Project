import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NavUser from "../../components/navbarElements/navUser/NavUser";
import "./profile.css";

const DashbordCondidate = () => {
  return (
    <div>
      <div>
        <NavUser />
      </div>
      <div style={{ display: "flex" }}>
        <div className="sidebar-user">
          <h1> Condidate space</h1>
          <Link to={"/CondidateProfile"}>
            <div>
              <AccountCircleIcon className="MUIi1" />
              <h4>Profile</h4>
            </div>
          </Link>
          <Link to={"/offers"}>
            <div>
              <WorkIcon className="MUIi1" />
              <h4>Find Job</h4>
            </div>
          </Link>

          <div>
            <DashboardIcon className="MUIi1" />
            <h4>Dashbord</h4>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashbordCondidate;
