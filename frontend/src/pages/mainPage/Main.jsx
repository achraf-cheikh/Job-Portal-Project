import React from "react";
import "./main.css";

//iportation components
import NavMain from "../../components/navbarElements/navMain/NavMain";
import Footer from "../../components/footer/Footer";
import LoginEmployee from "./LoginEmployee";
import LoginEmployer from "./LoginEmployer";

const Main = () => {
  return (
    <div>
      <NavMain />
      <main>
        <section className="sec1">
          <p>
            Access a large community of job seekers! <strong>JobCareer</strong>{" "}
            help you to build your dreams
          </p>
        </section>
        <section className="sec2">
          <h1>Connexion</h1>
          <div>
            <LoginEmployee />
            <LoginEmployer />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Main;
