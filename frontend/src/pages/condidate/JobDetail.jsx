import React, { useEffect } from "react";
import NavUser from "../../components/navbarElements/navUser/NavUser";
import { Link, useLocation, useParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getoneJob } from "../../redux/action";
import "./jobDetail.css";

const JobDetail = () => {
  const dispatch = useDispatch();

  // const location = useLocation();
  // const jobID = location.pathname.split("/")[2];

  const params = useParams();
  const jobid = params.id;
  const { oneJob } = useSelector((state) => state.JobReducer);
  useEffect(() => {
    dispatch(getoneJob(jobid));
    console.log(oneJob);
  }, [jobid]);

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
          <Link to={"/dashbordCondidate"}>
            <div>
              <DashboardIcon className="MUIi1" />
              <h4>Dashbord</h4>
            </div>
          </Link>
        </div>
        <div className="job-detail-div">
          <h1>Job details </h1>
          <hr />
          <div>
            <p>
              <strong>title :</strong> {oneJob?.title}
            </p>
            <p>
              <strong>vacancies :</strong> {oneJob?.vacancies}
            </p>
            <p>
              <strong>salary :</strong> {oneJob?.salary}
            </p>
          </div>
          <hr />
          <p>
            <strong>Company :</strong> {oneJob?.company}
          </p>
          <p>
            <strong>adress :</strong> {oneJob?.adress}
          </p>
          <p>
            <strong>description :</strong>
            <br />
            {oneJob?.description}
          </p>
          <button className="btn-job-detail">Postuler</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
