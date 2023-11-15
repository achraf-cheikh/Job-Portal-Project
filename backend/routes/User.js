const express = require("express");
const {
  getUsers,
  getEmployee,
  deleteUsers,
  getCompanies,
  getEmployer,
  deleteCompany,
} = require("../controllers/User.controller");
const { authAdmin } = require("../middlewares/auth");
const router = express.Router();

// path : "/user/getUser"
router.get("/getUser", authAdmin, getUsers);
// path : "/user/getEmployee/id"
router.get("/getEmployee/:id", getEmployee);
// path : "/user/DeleteUser/id"
router.delete("/DeleteUser/:id", authAdmin, deleteUsers);
// path : "/user/getCompanies"
router.get("/getCompanies", authAdmin, getCompanies);
// path : "/user/getEmployer/id"
router.get("/getEmployer/:id", getEmployer);
// path : "/user/deleteCompany/id"
router.delete("/deleteCompany/:id", authAdmin, deleteCompany);

module.exports = router;
