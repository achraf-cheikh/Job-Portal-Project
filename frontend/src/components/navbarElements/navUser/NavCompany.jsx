import React from "react";
import Button from "@mui/material/Button";
import "./NavUser.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import WorkIcon from "@mui/icons-material/Work";

const NavUser = () => {
  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to={"/"}>
          <img src="/images/logo.JPG" alt="" />
        </Link>
      </div>
      <div className="right-navbar">
        <Link to={"/contact"}>
          <Button
            style={{
              fontFamily: "roboto",
              fontWeight: "600",
              fontSize: "20px",
              color: "#147084",
              letterSpacing: "-0.5px",
              textTransform: "capitalize",
            }}
            variant="text"
          >
            Contact
          </Button>
        </Link>
        <LogoutIcon
          style={{
            marginTop: "12px",
            color: "#147084",
            marginLeft: "30px",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default NavUser;
