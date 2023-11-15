import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/mainPage/Main";
import SignUpCandidat from "./pages/signUp/SignUpCandidat";
import SignUpEmployer from "./pages/signUp/SignUpEmployer";
import Offers from "./pages/condidate/Offers";
import CompanySpace from "./pages/company/CompanySpace";
import AdminSpace from "./pages/admin/AdminSpace";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/condidate/Profile";
import ProfileCompany from "./pages/company/ProfileCompany";
import DashbordCompany from "./pages/company/DashbordCompany";
import DashbordCondidate from "./pages/condidate/DashbordCondidate";
import JobDetail from "./pages/condidate/JobDetail";
import DashUsers from "./pages/admin/DashUsers";
import DashCompanies from "./pages/admin/DashCompanies";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/signUpCondidat"} element={<SignUpCandidat />} />
          <Route path={"/signUpEmployer"} element={<SignUpEmployer />} />
          <Route path={"/offers"} element={<Offers />} />
          <Route path={"/CompanySpace"} element={<CompanySpace />} />
          <Route path={"/adminSpace"} element={<AdminSpace />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/CondidateProfile"} element={<Profile />} />
          <Route path={"/CompanyProfile"} element={<ProfileCompany />} />
          <Route path={"/dashbordCompany"} element={<DashbordCompany />} />
          <Route path={"/dashbordCondidate"} element={<DashbordCondidate />} />
          <Route path={"/jobDetail/:id"} element={<JobDetail />} />
          <Route path={"/DashUsers"} element={<DashUsers />} />
          <Route path={"/DashCompanies"} element={<DashCompanies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
