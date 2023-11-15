import React from "react";
import "./JobCard.css";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import WorkIcon from "@mui/icons-material/Work";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Link } from "react-router-dom";

const JobCard = ({ el }) => {
  const createdAt = el.createdAt;
  // Convertissez la chaîne de date en objet Date
  const dateObj = new Date(createdAt);
  // Récupérez le jour, le mois et l'année
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const date = `${day}/${month}/${year}`;
  //---------------------------------------------------------

  return (
    <>
      <div>
        <div className="top-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <WorkIcon
              style={{
                color: "blue",
                marginRight: "5px",
                marginBottom: "10px",
              }}
            />
            <h4 style={{ fontSize: "18px", fontStyle: "italic" }}>
              {el.title}
            </h4>
          </div>
          <h5 style={{ fontSize: "15px", fontStyle: "italic" }}>{date}</h5>
        </div>
        <div className="middle-card">
          <p>{el.description.split(" ").slice(0, 8).join(" ") + "     ..."}</p>
          <Stack spacing={2} direction="row">
            <Link to={`/jobDetail/${el._id}`}>
              <Button
                variant="contained"
                style={{ textTransform: "capitalize" }}
              >
                Details
              </Button>
            </Link>
          </Stack>
        </div>
        <div className="bottom-card">
          <div
            style={{ display: "flex", alignItems: "center", width: "100px" }}
          >
            <ApartmentIcon
              style={{ color: "blue", marginRight: "5px", marginBottom: "5px" }}
            />
            <h6 style={{ fontSize: "14px" }}>{el.company}</h6>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PinDropIcon
              style={{ color: "blue", marginRight: "5px", marginBottom: "5px" }}
            />
            <h6>{el.region}</h6>
          </div>
          <h6>
            <strong>Salary : </strong>
            {el.salary}
          </h6>
        </div>
      </div>
    </>
  );
};

export default JobCard;
