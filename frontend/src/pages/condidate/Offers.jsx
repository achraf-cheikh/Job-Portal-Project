import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/action";
import { Navigate } from "react-router-dom";
import NavUser from "../../components/navbarElements/navUser/NavUser";
import JobList from "../../components/jobCards/JobList";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./profile.css";

const Offers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const { isAuthee } = useSelector((state) => state.EmployeeReducer);
  return (
    <div>
      <div>
        {!isAuthee ? (
          <Navigate to={"/"} />
        ) : (
          <>
            <NavUser />
            <div style={{ display: "flex" }}>
              <div className="sidebar-user" style={{ height: "initial" }}>
                <h1> Condidate space</h1>
                <Link to={"/CondidateProfile"}>
                  <div>
                    <AccountCircleIcon className="MUIi1" />
                    <h4>Profile</h4>
                  </div>
                </Link>

                <div>
                  <WorkIcon className="MUIi1" />
                  <h4>Find Job</h4>
                </div>

                <Link to={"/dashbordCondidate"}>
                  <div>
                    <DashboardIcon className="MUIi1" />
                    <h4>Dashbord</h4>
                  </div>
                </Link>
              </div>
              <div>
                <JobList />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Offers;
