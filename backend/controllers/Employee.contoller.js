const Employee = require("../Model/Employee");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SignUp new user (employee)
exports.register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    gender,
    birthdate,
    password,
    scholarship,
    field,
    experience,
    cv,
    phone,
    adress,
    accountType,
    timestamps,
  } = req.body;

  const existedEmployee = await Employee.findOne({ email });
  if (existedEmployee)
    return res.status(409).json({ msg: "User is already exist" });
  try {
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    const newEmployee = await Employee.create({
      firstName,
      lastName,
      email,
      gender,
      birthdate,
      password: hash,
      scholarship,
      field,
      experience,
      cv,
      phone,
      adress,
      accountType,
      timestamps,
    });

    const payload = {
      _id: newEmployee._id,
    };
    const secret = process.env.codeSecret;

    let token = jwt.sign(payload, secret);

    res
      .status(201)
      .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
      .send({
        token,
        newEmployee: {
          _id: newEmployee._id,
          firstName: newEmployee.firstName,
          lastName: newEmployee.lastName,
          email: newEmployee.email,
          accountType: newEmployee.accountType,
        },
      });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//-------------------------------------------------------------------------------------------------------------

// signIn new user (employee)

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existedUser = await Employee.findOne({ email }).select("+password");
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

//-----------------------------------------------------------------------------------------------------------

//authentification compte user (employee)

exports.authentification = (req, res) => {
  res.send(req.UserEmployee);
};

//------------------------------------------------------------------------------------------

// logout from employee account

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "logged out",
  });
};

//-------------------------------------------------------------------------------------------

// update  employee account

exports.updateUser = async (req, res) => {
  try {
    const updateuser = await Employee.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(200).send(updateuser);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//---------------------------------------------------------------------------------------------------
//jobs history
exports.UserJobsHistory = async (req, res, next) => {
  const { title, description, salary, region } = req.body;

  try {
    const currentUser = await Employee.findOne(req.params.id);
    if (!currentUser) {
      return res.status(404).json({ msg: "you must logIn" });
    } else {
      const addJobHistory = {
        title,
        description,
        salary,
        region,
        user: req.params.id,
      };
      currentUser.jobsHistory = currentUser.jobsHistory.concat(addJobHistory);
      await currentUser.save();
      // currentUser.jobsHistory.push(addJobHistory);
      // await currentUser.save();
    }

    res.status(200).json({
      success: true,
      currentUser,
    });
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
