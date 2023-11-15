import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAdmin } from "../../redux/action";
import NavUser from "../../components/navbarElements/navUser/NavUser";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GridViewIcon from "@mui/icons-material/GridView";
import "./AdminSpace.css";

const AdminSpace = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmin());
  }, []);

  const { admins, isAuthad } = useSelector((state) => state.AdminReducer);

  return (
    <div>
      {!isAuthad ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <div>
            <NavUser />
          </div>
          <div style={{ display: "flex" }}>
            <div className="sidebar-user">
              <h1> Admin space</h1>

              <div>
                <AccountCircleIcon className="MUIi1" />
                <h4>Profile</h4>
              </div>
              <Link to={"/DashUsers"}>
                <div>
                  <GridViewIcon className="MUIi1" />
                  <h4>Users</h4>
                </div>
              </Link>

              <Link to={"/DashCompanies"}>
                <div>
                  <DashboardIcon className="MUIi1" />
                  <h4>Companies</h4>
                </div>
              </Link>
            </div>
            <div className="full-section-profile33">
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
                  className="profile-img33"
                />
              </div>
              <div>
                <div>
                  <div className="profile-data222">
                    <p>
                      <strong>{admins.fullName}</strong>
                    </p>
                  </div>
                </div>
                <hr />
                <div style={{ width: "600px", marginTop: "20px" }}>
                  <div className="profile-data111">
                    <p>
                      <strong>E-mail :</strong> {admins.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminSpace;
