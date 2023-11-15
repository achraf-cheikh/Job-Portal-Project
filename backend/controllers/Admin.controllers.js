const Admin = require("../Model/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SignUp new admin (admin)
exports.register = async (req, res) => {
  const { fullName, email, password, accountType, timestamps } = req.body;

  const existedAdmin = await Admin.findOne({ email });
  if (existedAdmin)
    return res.status(409).json({ msg: "User admin is already exist" });
  try {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    const newAdmin = await Admin.create({
      fullName,
      email,
      password: hash,
      accountType,
      timestamps,
    });

    const payload = {
      _id: newAdmin._id,
    };
    const secret = process.env.codeSecret;

    let token = jwt.sign(payload, secret);

    res
      .status(201)
      .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
      .send({
        token,
        newAdmin: {
          _id: newAdmin._id,
          firstName: newAdmin.firstName,
          email: newAdmin.email,
          accountType: newAdmin.accountType,
        },
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//-------------------------------------------------------------------------------------------------------------

// signIn admin (admin)

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existedadmin = await Admin.findOne({ email }).select("+password");
    if (!existedadmin)
      return res.status(406).json({ msg: "wrong information" });

    const ismatch = await bcrypt.compare(password, existedadmin.password);

    if (!ismatch) {
      res.status(404).json({ msg: "wrong information" });
    }

    const payload = {
      _id: existedadmin._id,
    };
    const secret = process.env.codeSecret;

    let token = jwt.sign(payload, secret);

    res
      .status(201)
      .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
      .send({
        token,
        existedadmin: {
          _id: existedadmin._id,
          fullName: existedadmin.lastName,
          email: existedadmin.email,
          accountType: existedadmin.accountType,
        },
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//-------------------------------------------------------------------------------------------------------

//authentification compte Admin

exports.authentification = (req, res) => {
  res.send(req.UserAdmin);
};

//------------------------------------------------------------------------------------------------------------

// logout from admin account

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "logged out",
  });
};
