import React, { useEffect } from "react";
import NavUser from "../../components/navbarElements/navUser/NavUser";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GridViewIcon from "@mui/icons-material/GridView";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/action";
import DashUserDetail from "./DashUserDetail";

const DashUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.AdminReducer);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log(users);
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

            <div>
              <GridViewIcon className="MUIi1" />
              <h4>Users</h4>
            </div>

            <Link to={"/DashCompanies"}>
              <div>
                <DashboardIcon className="MUIi1" />
                <h4>Companies</h4>
              </div>
            </Link>
          </div>
          <div className="dash-comp">
            <div className="dash-comp-nav">
              <h3 style={{ marginLeft: "-25px" }}>FirstName</h3>
              <h3 style={{ marginLeft: "5px" }}>LastName</h3>
              <h3 style={{ marginLeft: "5px" }}>Scholarship</h3>
              <h3 style={{ marginLeft: "-25px" }}>Experience</h3>
              <h3>Delete</h3>
            </div>
            {users?.map((el) => (
              <div>
                <DashUserDetail key={el._id} el={el} />
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default DashUsers;
