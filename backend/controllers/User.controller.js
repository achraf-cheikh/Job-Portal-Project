const Employee = require("../Model/Employee");
const Employer = require("../Model/Employer");

// guet all users (employee)

exports.getUsers = async (req, res) => {
  try {
    // sort users
    const { sort } = req.query;
    const queryObject = {};
    let users = Employee.find(queryObject).select("-password");
    if (sort === "Newest") {
      users = users.sort("-createdAt");
    }
    if (sort === "Oldest") {
      users = users.sort("createdAt");
    }

    // pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const total = await Employee.countDocuments(users);
    const NumOfPage = Math.ceil(total / limit);
    users = users.skip(skip).limit(limit);
    const employees = await users;
    res.status(200).json({ total, employees, page, NumOfPage });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// get one user (employee)

exports.getEmployee = async (req, res) => {
  try {
    const oneUser = await Employee.findById(req.params.id);
    res.status(200).send(oneUser);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// delete User (employee)

exports.deleteUsers = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// guet all companies (employer)

exports.getCompanies = async (req, res) => {
  try {
    // sort companies
    const { sort } = req.query;
    const queryObject = {};
    let companies = Employer.find(queryObject).select("-password");
    if (sort === "Newest") {
      companies = companies.sort("-createdAt");
    }
    if (sort === "Oldest") {
      companies = companies.sort("createdAt");
    }

    // pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const total = await Employer.countDocuments(companies);
    const NumOfPage = Math.ceil(total / limit);
    companies = companies.skip(skip).limit(limit);
    const employers = await companies;

    res.status(200).json({ total, employers, page, NumOfPage });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// get one company (employer)

exports.getEmployer = async (req, res) => {
  try {
    const oneCompany = await Employer.findById(req.params.id);
    res.status(200).send(oneCompany);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// delete company (employer)

exports.deleteCompany = async (req, res) => {
  try {
    await Employer.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: " Company is deleted successfully" });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
