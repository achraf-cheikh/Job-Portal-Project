import React from "react";
import NavUser from "../../components/navbarElements/navUser/NavUser";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "./contact.css";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div>
      <NavUser />
      <div className="nav-cont">
        <div>
          <EmailIcon style={{ color: "white", marginTop: "3px" }} />
          <h4>
            <strong>JobCareer@gmail.com</strong>
          </h4>
        </div>
        <div>
          <PhoneIcon style={{ color: "white", marginTop: "3px" }} />
          <h4>
            <strong>(+216)95328312</strong>
          </h4>
        </div>
      </div>
      <div className="container100">
        <form className="form100">
          <div className="descr100">Contact us</div>
          <div className="input100">
            <input required="" autocomplete="off" type="text" />
            <label for="name">Name</label>
          </div>

          <div className="input100">
            <input required="" autocomplete="off" name="email" type="text" />
            <label for="email">E-mail</label>
          </div>

          <div className="input100">
            <textarea
              required=""
              cols="30"
              rows="1"
              id="message"
              className="input101"
            ></textarea>
            <label for="message">Message</label>
          </div>
          <button>Send message →</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
