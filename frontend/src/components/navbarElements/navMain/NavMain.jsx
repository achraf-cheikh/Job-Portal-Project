import React from "react";
import "./navMain.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NavMain = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to={"/"}>
          <img src="/images/logo.JPG" alt="" />
        </Link>
      </div>
      <div className="right-navbar">
        <Button
          style={{
            fontFamily: "roboto",
            fontWeight: "600",
            fontSize: "20px",
            color: "#147084",
            letterSpacing: "-0.5px",
            textTransform: "capitalize",
          }}
          onClick={handleOpen}
        >
          Inscription
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{ border: "none", borderRadius: "5px" }}>
            <Typography
              style={{ textAlign: "center", marginBottom: "30px" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Choisissez le type de compte:
            </Typography>
            <Link to={"/signUpCondidat"}>
              <Button
                style={{
                  fontFamily: "roboto",
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#003827",
                  letterSpacing: "-0.5px",
                  textTransform: "capitalize",
                  marginRight: "45px",
                  backgroundColor: "#24f982",
                }}
                onClick={handleOpen}
              >
                Candidat
              </Button>
            </Link>
            <Link to={"/signUpEmployer"}>
              <Button
                style={{
                  fontFamily: "roboto",
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#003827",
                  letterSpacing: "-0.5px",
                  textTransform: "capitalize",
                  backgroundColor: "#24f982",
                }}
                onClick={handleOpen}
              >
                Employeur
              </Button>
            </Link>
          </Box>
        </Modal>
        <Stack spacing={2} direction="row">
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
        </Stack>
      </div>
    </div>
  );
};

export default NavMain;
