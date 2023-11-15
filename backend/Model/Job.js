const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const schema = mongoose.Schema;

const JobSchema = new schema(
  {
    company: {
      type: String,
    },
    title: {
      type: String,
      trim: true,
      maxlength: 70,
    },
    logo: String,
    adress: {
      type: String,
      trim: true,
      required: [true, "first name is required"],
    },
    salary: {
      type: String,
      trim: true,
    },
    vacancies: Number,
    category: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
