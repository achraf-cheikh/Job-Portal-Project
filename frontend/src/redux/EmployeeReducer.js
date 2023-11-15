import {
  GET_PROFILE_EMPLOYEE,
  GET_PROFILE_EMPLOYEE_FAIL,
  GET_PROFILE_EMPLOYEE_SUCCESS,
  LOGIN_EMPLOYEE,
  LOGIN_EMPLOYEE_FAIL,
  LOGIN_EMPLOYEE_SUCCESS,
  REGISTER_EMPLOYEE,
  REGISTER_EMPLOYEE_FAIL,
  REGISTER_EMPLOYEE_SUCCESS,
  UPDATE_PROFILE_EMPLOYEE,
} from "./actionTypes";

const init = {
  loadingee: false,
  users: null,
  errors: null,
  token: null,
  isAuthee: false,
};

//register employee

const EmployeeReducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_EMPLOYEE:
      return { ...state, loadingee: true };
    case REGISTER_EMPLOYEE_SUCCESS:
      return { ...state, loadingee: false, users: payload };

    case REGISTER_EMPLOYEE_FAIL:
      return { ...state, loadingee: false, errors: payload };

    //login employee

    case LOGIN_EMPLOYEE:
      return { ...state, loadingee: true };
    case LOGIN_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loadingee: false,
        users: payload.existedUser,
        token: payload.token,
        errors: null,
      };

    case LOGIN_EMPLOYEE_FAIL:
      return { ...state, loadingee: false, errors: payload };

    //auth employee

    case GET_PROFILE_EMPLOYEE:
      return { ...state, loadingee: true };
    case GET_PROFILE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loadingee: false,
        users: payload,
        isAuthee: true,
        errors: null,
      };
    case GET_PROFILE_EMPLOYEE_FAIL:
      return { ...state, loadingee: false, errors: payload };

    // update profile employee
    case UPDATE_PROFILE_EMPLOYEE:
      return {
        ...state,
        users: payload,
      };

    default:
      return state;
  }
};

export default EmployeeReducer;
