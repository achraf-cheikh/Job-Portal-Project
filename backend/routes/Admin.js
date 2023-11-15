const express = require("express");

const {
  register,
  login,
  authentification,
  logout,
} = require("../controllers/Admin.controllers");
const { authAdmin } = require("../middlewares/auth");
const { validator, adminRules } = require("../middlewares/validator");

const router = express.Router();

// path : "/admin/register"
router.post("/register", adminRules(), validator, register);
// path : "/admin/login"
router.post("/login", login);
// path : "/admin/auth"
router.get("/auth", authAdmin, authentification);
// path : "/admin/logout"
router.get("/logout", authAdmin, logout);

module.exports = router;
