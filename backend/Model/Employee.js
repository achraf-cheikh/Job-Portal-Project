const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const schema = mongoose.Schema;

const jobsHistorySchema = new schema(
  {
    title: {
      type: String,
      trim: true,
      maxlength: 70,
    },

    description: {
      type: String,
      trim: true,
    },
    salary: {
      type: String,
      trim: true,
    },
    region: {
      type: String,
    },
    interviewDate: {
      type: Date,
    },
    applicationStatus: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },

    user: {
      type: ObjectId,
      ref: "User",
      // required: true,
    },
  },
  { timestamps: true }
);

const employeeSchema = new schema(
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

    gender: {
      type: String,
      trim: true,
      required: true,
    },
    birthdate: {
      type: String,
      trim: true,
      required: true,
    },

    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
      minlength: [6, "password must have at least (6) caracters"],
    },
    scholarship: {
      type: String,
      trim: true,
      required: [true, "Academic study is required"],
    },
    field: {
      type: String,
      trim: true,
      required: true,
    },
    experience: {
      type: Number,
      trim: true,
      required: true,
    },
    cv: {
      type: String,
      trim: true,
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
    jobsHistory: [jobsHistorySchema],
    accountType: { type: String, default: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
