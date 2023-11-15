const express = require("express");
const { authEmployer, authEmployee } = require("../middlewares/auth");
const {
  createJob,
  updateJob,
  getJobs,
  getJob,
  deletejob,
  jobCategory,
  jobregion,
} = require("../controllers/Job.controller");
const router = express.Router();

// route "/job/newJob"
router.post("/newJob", authEmployer, createJob);
//"/job/updatejob/:id"
router.put("/updatejob/:id", authEmployer, updateJob);
// route "/job/getJobs"
router.get("/getJobs", getJobs);
// route "/job/getJob/_:id"
router.get("/getJob/:_id", getJob);
// route "/job/getByCategory/:category"
router.get("/getByCategory/:category", authEmployee, jobCategory);
// route "/job/getByRegion/:region"
router.get("/getByRegion/:region", authEmployee, jobregion);
// route "/job/delete/:id"
router.delete("/deleteJob/:id", authEmployer, deletejob);

module.exports = router;
