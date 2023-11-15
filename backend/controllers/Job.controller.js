const Job = require("../Model/Job");

// job creation (post)

exports.createJob = async (req, res) => {
  const {
    company,
    title,
    adress,
    logo,
    category,
    salary,
    region,
    vacancies,
    description,
    timestamps,
  } = req.body;
  try {
    const newJob = await Job.create({
      company,
      title,
      adress,
      logo,
      category,
      salary,
      region,
      vacancies,
      description,
      timestamps,
    });
    res.status(201).send(newJob);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update job (put)

exports.updateJob = async (req, res) => {
  try {
    const updatejob = await Job.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(200).send(updatejob);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//get all jobs

exports.getJobs = async (req, res) => {
  const limit = 40;
  const page = Number(req.query.page) || 1;
  const { sort } = req.query;
  const queryObject = {};
  try {
    const skip = (page - 1) * limit;
    const totalPromise = Job.countDocuments(queryObject);

    let jobs = Job.find(queryObject).limit(limit).skip(skip);

    const [total, JobOffers] = await Promise.all([totalPromise, jobs]);

    const NumOfPage = Math.ceil(total / limit);

    //sort
    if (sort === "Newest") {
      jobs = jobs.sort("-createdAt");
    }
    if (sort === "Oldest") {
      jobs = jobs.sort("createdAt");
    }

    res.status(200).json({ total, JobOffers, page, NumOfPage });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// get one job

exports.getJob = async (req, res) => {
  try {
    const oneJob = await Job.findById(req.params._id);
    res.status(200).send(oneJob);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
// get job by category

exports.jobCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const jobByCategory = await Job.find({ category: category });
    res.status(200).send(jobByCategory);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

// get job by region

exports.jobregion = async (req, res) => {
  try {
    const region = req.params.region;
    const jobByRegion = await Job.find({ region: region });
    res.status(200).send(jobByRegion);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

//delete job

exports.deletejob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "job is deleted successfully" });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
