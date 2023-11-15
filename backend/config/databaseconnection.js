const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.db);
    console.log("DataBase is connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
