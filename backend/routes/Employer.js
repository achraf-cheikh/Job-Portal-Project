const express = require("express");
const {
  register,
  login,
  authentification,
  logout,
  updateUser,
} = require("../controllers/Employer.controller");
const { registerRules, validator } = require("../middlewares/validator");
const { authEmployer } = require("../middlewares/auth");
const router = express.Router();

// path : "/employer/register"
router.post("/register", registerRules(), validator, register);

// path : "/employer/login"
router.post("/login", login);

// path : "/employer/auth"
router.get("/auth", authEmployer, authentification);

// path : "/employer/logout"
router.get("/logout", authEmployer, logout);

// path : "/employer/updateProfile"
router.put("/updateProfile/:id", authEmployer, updateUser);

module.exports = router;
