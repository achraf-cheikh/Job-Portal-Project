import React, { useEffect } from "react";
import NavUser from "../../components/navbarElements/navUser/NavUser";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GridViewIcon from "@mui/icons-material/GridView";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies } from "../../redux/action";
import DashCompDetail from "./DashCompDetail";

const DashCompanies = () => {
  const dispatch = useDispatch();
  const { comp } = useSelector((state) => state.AdminReducer);
  useEffect(() => {
    dispatch(getAllCompanies());
  }, []);
  console.log(comp);

  return (
    <div>
      <>
        <div>
          <NavUser />
        </div>
        <div style={{ display: "flex" }}>
          <div className="sidebar-user">
            <h1> Admin space</h1>
            <Link to={"/adminSpace"}>
              <div>
                <AccountCircleIcon className="MUIi1" />
                <h4>Profile</h4>
              </div>
            </Link>
            <Link to={"/DashUsers"}>
              <div>
                <GridViewIcon className="MUIi1" />
                <h4>Users</h4>
              </div>
            </Link>

            <div>
              <DashboardIcon className="MUIi1" />
              <h4>Companies</h4>
            </div>
          </div>
          <div className="dash-comp">
            <div className="dash-comp-nav">
              <h3 style={{ marginLeft: "-125px" }}>FirstName </h3>
              <h3 style={{ marginLeft: "-75px" }}>LastName</h3>
              <h3 style={{ marginLeft: "-55px" }}>Company</h3>
              <h3 style={{ marginLeft: "60px" }}>Phone</h3>
              <h3>Delete</h3>
            </div>
            {comp?.map((el) => (
              <div>
                <DashCompDetail key={el._id} el={el} />
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default DashCompanies;
