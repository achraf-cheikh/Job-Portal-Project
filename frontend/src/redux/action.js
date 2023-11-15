import {
  CREATE_JOB,
  CREATE_JOB_FAIL,
  CREATE_JOB_SUCCESS,
  DELETE_COMPANY,
  DELETE_COMPANY_FAIL,
  DELETE_COMPANY_SUCCESS,
  DELETE_JOB,
  DELETE_JOB_FAIL,
  DELETE_JOB_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_COMPANIES,
  GET_COMPANIES_FAIL,
  GET_COMPANIES_SUCCESS,
  GET_OFFERS,
  GET_OFFERS_FAIL,
  GET_OFFERS_SUCCESS,
  GET_ONE_OFFER,
  GET_ONE_OFFER_FAIL,
  GET_ONE_OFFER_SUCCESS,
  GET_PROFILE_ADMIN,
  GET_PROFILE_ADMIN_FAIL,
  GET_PROFILE_ADMIN_SUCCESS,
  GET_PROFILE_EMPLOYEE,
  GET_PROFILE_EMPLOYEE_FAIL,
  GET_PROFILE_EMPLOYEE_SUCCESS,
  GET_PROFILE_EMPLOYER,
  GET_PROFILE_EMPLOYER_FAIL,
  GET_PROFILE_EMPLOYER_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  LOGIN_ADMIN,
  LOGIN_ADMIN_FAIL,
  LOGIN_ADMIN_SUCCESS,
  LOGIN_EMPLOYEE,
  LOGIN_EMPLOYEE_FAIL,
  LOGIN_EMPLOYEE_SUCCESS,
  LOGIN_EMPLOYER,
  LOGIN_EMPLOYER_FAIL,
  LOGIN_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYEE,
  REGISTER_EMPLOYEE_FAIL,
  REGISTER_EMPLOYEE_SUCCESS,
  REGISTER_EMPLOYER,
  REGISTER_EMPLOYER_FAIL,
  REGISTER_EMPLOYER_SUCCESS,
  UPDATE_JOB,
  UPDATE_JOB_FAIL,
  UPDATE_JOB_SUCCESS,
  UPDATE_PROFILE_EMPLOYEE,
  UPDATE_PROFILE_EMPLOYER,
  UPDATE_PROFILE_EMPLOYER_FAIL,
  UPDATE_PROFILE_EMPLOYER_SUCC,
} from "./actionTypes";
import axios from "axios";

// register of employer account
export const registerEmployer = (newEmployer) => async (dispatch) => {
  dispatch({
    type: REGISTER_EMPLOYER,
  });
  try {
    const { data } = await axios.post("/employer/register", newEmployer);
    dispatch({
      type: REGISTER_EMPLOYER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_EMPLOYER_FAIL,
      payload: error.response.data,
    });
  }
};

// register of employee account
export const registerEmployee = (newEmployee) => async (dispatch) => {
  dispatch({
    type: REGISTER_EMPLOYEE,
  });
  try {
    const { data } = await axios.post("/employee/register", newEmployee);
    dispatch({
      type: REGISTER_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_EMPLOYEE_FAIL,
      payload: error.response.data,
    });
  }
};

// login for employer account
export const Loginemployer = (Employer) => async (dispatch) => {
  dispatch({
    type: LOGIN_EMPLOYER,
  });
  try {
    const { data } = await axios.post("/employer/login", Employer);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_EMPLOYER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_EMPLOYER_FAIL,
      payload: error.response.data,
    });
  }
};

// login for employee account
export const Loginemployee = (Employee) => async (dispatch) => {
  dispatch({
    type: LOGIN_EMPLOYEE,
  });
  try {
    const { data } = await axios.post("/employee/login", Employee);
    console.log(data);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_EMPLOYEE_FAIL,
      payload: error.response.data,
    });
  }
};

// login for admin account
export const Loginadmin = (admin) => async (dispatch) => {
  dispatch({
    type: LOGIN_ADMIN,
  });
  try {
    const { data } = await axios.post("/admin/login", admin);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ADMIN_FAIL,
      payload: error.response.data,
    });
  }
};

// authentification admin account
export const getAdmin = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  const configad = {
    headers: { Authorization: token },
  };
  dispatch({
    type: GET_PROFILE_ADMIN,
  });
  try {
    const { data } = await axios.get("/admin/auth", configad);
    dispatch({
      type: GET_PROFILE_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_ADMIN_FAIL,
      payload: error.response.data,
    });
  }
};

// authentification company account
export const getCompany = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  const configer = {
    headers: { Authorization: token },
  };
  dispatch({
    type: GET_PROFILE_EMPLOYER,
  });
  try {
    const { data } = await axios.get("/employer/auth", configer);
    dispatch({
      type: GET_PROFILE_EMPLOYER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_EMPLOYER_FAIL,
      payload: error.response.data,
    });
  }
};

// authentification employee account
export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  const configee = {
    headers: { Authorization: token },
  };
  dispatch({
    type: GET_PROFILE_EMPLOYEE,
  });
  try {
    const { data } = await axios.get("/employee/auth", configee);
    dispatch({
      type: GET_PROFILE_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_EMPLOYEE_FAIL,
      payload: error.response.data,
    });
  }
};

// get all jobs
export const getJobs = (page) => async (dispatch) => {
  dispatch({
    type: GET_OFFERS,
  });
  try {
    const { data } = await axios.get(`/job/getJobs/?${page}`);
    // console.log(data);
    dispatch({
      type: GET_OFFERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_OFFERS_FAIL,
      payload: error.response.data,
    });
  }
};

//UPDATE PROFILE Employee

export const UpdateProfilee = (editedUser) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configer = {
    headers: { Authorization: token },
  };
  try {
    const { data } = await axios.put(
      `/employee/updateProfile/${editedUser._id}`,
      editedUser,
      configer
    );
    dispatch({
      type: UPDATE_PROFILE_EMPLOYEE,
      payload: editedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

// create new job
export const createJob = (newJob) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configer = {
    headers: { Authorization: token },
  };
  dispatch({
    type: CREATE_JOB,
  });
  try {
    const { data } = await axios.post("/job/newJob", newJob, configer);
    dispatch({
      type: CREATE_JOB_SUCCESS,
      payload: data,
    });
    console.log(newJob);
  } catch (error) {
    dispatch({
      type: CREATE_JOB_FAIL,
      payload: error.response.data,
    });
  }
};

//update company profile
export const UpdateProfiler = (editedCompany) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configee = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: UPDATE_PROFILE_EMPLOYER,
  });
  try {
    const { data } = await axios.put(
      `/employer/updateProfile/${editedCompany._id}`,
      editedCompany,
      configee
    );
    dispatch({
      type: UPDATE_PROFILE_EMPLOYER_SUCC,
      payload: editedCompany,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_EMPLOYER_FAIL,
      payload: error.response.data,
    });
  }
};

// delete a job

export const deleteJob = (_id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configer = { headers: { Authorization: token } };
  dispatch({
    type: DELETE_JOB,
  });
  try {
    await axios.delete(`/job/deleteJob/${_id}`, configer);
    dispatch({
      type: DELETE_JOB_SUCCESS,
      payload: _id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
      payload: error.response.data,
    });
  }
};

//update a job
export const UpdateJob = (editedJob) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configer = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: UPDATE_JOB,
  });
  try {
    const { data } = await axios.put(
      `/job/updatejob/${editedJob._id}`,
      editedJob,
      configer
    );
    dispatch({
      type: UPDATE_JOB_SUCCESS,
      payload: editedJob,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_JOB_FAIL,
      payload: error.response.data,
    });
  }
};

// get job by id
export const getoneJob = (_id) => async (dispatch) => {
  dispatch({
    type: GET_ONE_OFFER,
  });
  try {
    const { data } = await axios.get(`/job/getJob/${_id}`);

    dispatch({
      type: GET_ONE_OFFER_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_ONE_OFFER_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

export const getUsers = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configad = {
    headers: { Authorization: token },
  };
  dispatch({
    type: GET_USERS,
  });
  try {
    const { data } = await axios.get("/user/getUser", configad);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: error.response.data,
    });
  }
};

export const DeleteUser = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configad = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: DELETE_USER,
  });
  try {
    await axios.delete(`/user/DeleteUser/${id}`, configad);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const getAllCompanies = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configad = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_COMPANIES,
  });
  try {
    const { data } = await axios.get("/user/getCompanies", configad);
    dispatch({
      type: GET_COMPANIES_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_COMPANIES_FAIL,
      payload: error.response.data,
    });
  }
};

export const DeleteCompany = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const configad = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: DELETE_COMPANY,
  });
  try {
    await axios.delete(`user/deleteCompany/${id}`, configad);
    dispatch({
      type: DELETE_COMPANY_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COMPANY_FAIL,
      payload: error.response.data,
    });
  }
};
