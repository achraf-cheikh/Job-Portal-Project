const mongoose = require("mongoose");

const schema = mongoose.Schema;

const adminSchema = new schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "fullname is required"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [3, "Name should have more than 3 characters"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "e-mail is required"],
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
      minlength: [6, "password must have at least (6) caracters"],
    },

    accountType: { type: String, default: "admin" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
