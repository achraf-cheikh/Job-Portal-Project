const express = require("express");
const connectDB = require("./config/databaseconnection");
const cookieParser = require("cookie-parser");
//dotenv importation
require("dotenv").config({ path: "./config/.env" });
//routes importation
const Employee = require("./routes/Employee");
const Employer = require("./routes/Employer");
const User = require("./routes/User");
const Admin = require("./routes/Admin");
const Job = require("./routes/Job");

const app = express();
app.use(express.json());
app.use(cookieParser());

// database connection
connectDB();

//routes
app.use("/employee", Employee);
app.use("/employer", Employer);
app.use("/admin", Admin);
app.use("/user", User);
app.use("/job", Job);

//Port
PORT = process.env.Port || 5000;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on Port ${PORT}`)
);
