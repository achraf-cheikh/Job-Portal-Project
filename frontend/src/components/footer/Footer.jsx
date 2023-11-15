import React from "react";
import "./footer.css";
import LoginAdmin from "../../pages/mainPage/LoginAdmin";

const Footer = () => {
  return (
    <div className="sec-footer">
      <p className="top-footer">
        Looking for new job! <strong>JobCareer</strong> puts you in touch with
        best offers
      </p>
      <div className="mid-footer">
        <img src="images/footer1.JPG" alt="" />
        <img src="images/footer2.JPG" alt="" />
        <img src="images/footer3.JPG" alt="" />
        <img src="images/footer4.JPG" alt="" />
      </div>
      <p className="bottom-footer">© 2023 Powered by Jobcareer.com</p>
      <LoginAdmin />
    </div>
  );
};

export default Footer;
