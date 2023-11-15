import {
  GET_PROFILE_EMPLOYER,
  GET_PROFILE_EMPLOYER_FAIL,
  GET_PROFILE_EMPLOYER_SUCCESS,
  LOGIN_EMPLOYER,
  LOGIN_EMPLOYER_FAIL,
  LOGIN_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER,
  REGISTER_EMPLOYER_FAIL,
  REGISTER_EMPLOYER_SUCCESS,
  UPDATE_PROFILE_EMPLOYER,
  UPDATE_PROFILE_EMPLOYER_FAIL,
  UPDATE_PROFILE_EMPLOYER_SUCC,
} from "./actionTypes";

const init = {
  loadinger: false,
  companies: null,
  errors: null,
  token: null,
  isAuther: false,
};

const EmployerReducer = (state = init, { type, payload }) => {
  switch (type) {
    //register employer
    case REGISTER_EMPLOYER:
      return { ...state, loadinger: true };
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, loadinger: false, companies: payload };

    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loadinger: false, errors: payload };

    //login employer
    case LOGIN_EMPLOYER:
      return { ...state, loadinger: true };
    case LOGIN_EMPLOYER_SUCCESS:
      return {
        ...state,
        loadinger: false,
        companies: payload.existedUser,
        token: payload.token,
        errors: null,
      };

    case LOGIN_EMPLOYER_FAIL:
      return { ...state, loadinger: false, errors: payload };

    //auth employer

    case GET_PROFILE_EMPLOYER:
      return { ...state, loadinger: true };
    case GET_PROFILE_EMPLOYER_SUCCESS:
      return {
        ...state,
        loadinger: false,
        companies: payload,
        isAuther: true,
        errors: null,
      };
    case GET_PROFILE_EMPLOYER_FAIL:
      return { ...state, loadinger: false, errors: payload };

    //update profile employer

    case UPDATE_PROFILE_EMPLOYER:
      return { ...state, loadinger: true };
    case UPDATE_PROFILE_EMPLOYER_SUCC:
      return {
        ...state,
        loadinger: false,
        companies: payload,
      };
    case UPDATE_PROFILE_EMPLOYER_FAIL:
      return { ...state, loadinger: false, errors: payload };

    default:
      return state;
  }
};

export default EmployerReducer;
