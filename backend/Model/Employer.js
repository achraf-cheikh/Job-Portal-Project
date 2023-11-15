const mongoose = require("mongoose");

const schema = mongoose.Schema;

const employerSchema = new schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "first name is required"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [3, "Name should have more than 3 characters"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "first name is required"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [3, "Name should have more than 3 characters"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "e-mail is required"],
      unique: true,
    },
    company: {
      type: String,
      trim: true,
      required: [true, "company name is required"],
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "phone is required"],
    },
    adress: {
      type: String,
      trim: true,
      required: [true, "first name is required"],
    },

    logo: { type: Buffer, trim: true, required: true },

    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
      minlength: [6, "password must have at least (6) caracters"],
    },

    jobPosts: [{ type: schema.Types.ObjectId, ref: "Jobs" }],
    accountType: { type: String, default: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employer", employerSchema);
