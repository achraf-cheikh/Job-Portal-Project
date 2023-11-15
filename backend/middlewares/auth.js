const jwt = require("jsonwebtoken");
const Employee = require("../Model/Employee");
const Employer = require("../Model/Employer");
const Admin = require("../Model/Admin");

// authentification to employee account
exports.authEmployee = async (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.codeSecret;

  try {
    var decoded = await jwt.verify(token, secret);
    if (!decoded) {
      res.status(400).json({ msg: "no valid token" });
    }
    const UserEmployee = await Employee.findById(decoded._id).select(
      "-password"
    );
    if (!UserEmployee) {
      res.status(400).json({ msg: "unauthorized" });
    } else {
      req.UserEmployee = UserEmployee;
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//------------------------------------------------------------------------------------

// authentification to employer account
exports.authEmployer = async (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.codeSecret;

  try {
    var decoded = await jwt.verify(token, secret);
    if (!decoded) {
      res.status(400).json({ msg: "no valid token" });
    }
    const UserEmployer = await Employer.findById(decoded._id).select(
      "-password"
    );
    if (!UserEmployer) {
      res.status(400).json({ msg: "unauthorized" });
    } else {
      req.UserEmployer = UserEmployer;
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//--------------------------------------------------------------------------------------------

// authentification to admin account
exports.authAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.codeSecret;

  try {
    var decoded = await jwt.verify(token, secret);
    if (!decoded) {
      res.status(400).json({ msg: "no valid token" });
    }
    const UserAdmin = await Admin.findById(decoded._id).select("-password");
    if (!UserAdmin) {
      res.status(400).json({ msg: "unauthorized" });
    } else {
      req.UserAdmin = UserAdmin;
    }
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//--------------------------------------------------------------------------------------------

// // verifying of role admin

// exports.isAdmin = (req, res, next) => {
//   if (req.UserEmployee.accountType === "user") {
//     return res.status(401).json({ msg: "Access denied, you must be an admin" });
//   }
//   next();
// };
