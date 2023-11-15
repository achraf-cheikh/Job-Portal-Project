const Employer = require("../Model/Employer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SignUp new user (employer)
exports.register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    company,
    phone,
    password,
    adress,
    logo,
    accountType,
    timestamps,
  } = req.body;

  const existedEmployer = await Employer.findOne({ email });
  if (existedEmployer)
    return res.status(409).json({ msg: "User is already exist" });
  try {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    const newEmployer = await Employer.create({
      firstName,
      lastName,
      email,
      company,
      password: hash,
      phone,
      adress,
      logo,
      accountType,
      timestamps,
    });

    const payload = {
      _id: newEmployer._id,
    };
    const secret = process.env.codeSecret;

    let token = jwt.sign(payload, secret);

    res
      .status(201)
      .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
      .send({
        token,
        newEmployer: {
          _id: newEmployer._id,
          firstName: newEmployer.firstName,
          lastName: newEmployer.lastName,
          email: newEmployer.email,
          accountType: newEmployer.accountType,
        },
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//-------------------------------------------------------------------------------------------------------------

// signIn new company (employer)

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existedUser = await Employer.findOne({ email }).select("+password");
    if (!existedUser) return res.status(406).json({ msg: "wrong information" });

    const ismatch = await bcrypt.compare(password, existedUser.password);

    if (!ismatch) {
      res.status(404).json({ msg: "wrong information" });
    }

    const payload = {
      _id: existedUser._id,
    };
    const secret = process.env.codeSecret;

    let token = jwt.sign(payload, secret);

    res
      .status(201)
      .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
      .send({
        token,
        existedUser: {
          _id: existedUser._id,
          firstName: existedUser.firstName,
          lastName: existedUser.lastName,
          email: existedUser.email,
          accountType: existedUser.accountType,
        },
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//-------------------------------------------------------------------------------------------------------

//authentification compte company (employer)

exports.authentification = (req, res) => {
  res.send(req.UserEmployer);
};

//------------------------------------------------------------------------------------------------------------

// logout from employer account

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "logged out",
  });
};

//-------------------------------------------------------------------------------------------

//update company account

exports.updateUser = async (req, res) => {
  try {
    const updatecompany = await Employer.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(200).send(updatecompany);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
