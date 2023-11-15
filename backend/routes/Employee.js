const express = require("express");
const {
  register,
  login,
  authentification,
  logout,
  updateUser,
  UserJobsHistory,
} = require("../controllers/Employee.contoller");
const { validator, registerRules } = require("../middlewares/validator");
const { authEmployee } = require("../middlewares/auth");
const router = express.Router();

// path : "/employee/register"
router.post("/register", registerRules(), validator, register);
// path : "/employee/login"
router.post("/login", login);
// path : "/employee/auth"
router.get("/auth", authEmployee, authentification);
// path : "/employee/logout"
router.get("/logout", authEmployee, logout);
// path : "/employee/updateProfile"
router.put("/updateProfile/:id", authEmployee, updateUser);
// path : "/employee/jobHistory"
router.post("/jobHistory", authEmployee, UserJobsHistory);

module.exports = router;
