import {
  DELETE_COMPANY,
  DELETE_COMPANY_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_COMPANIES,
  GET_COMPANIES_FAIL,
  GET_COMPANIES_SUCCESS,
  GET_PROFILE_ADMIN,
  GET_PROFILE_ADMIN_FAIL,
  GET_PROFILE_ADMIN_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  LOGIN_ADMIN,
  LOGIN_ADMIN_FAIL,
  LOGIN_ADMIN_SUCCESS,
} from "./actionTypes";

const init = {
  loadingad: false,
  admins: null,
  errors: null,
  token: null,
  isAuthad: false,
  users: null,
  Comp: null,
};

const AdminReducer = (state = init, { type, payload }) => {
  switch (type) {
    //login admin

    case LOGIN_ADMIN:
      return { ...state, loadingad: true };
    case LOGIN_ADMIN_SUCCESS:
      return {
        ...state,
        loadingad: false,
        admins: payload.existedadmin,
        token: payload.token,
        errors: null,
      };

    case LOGIN_ADMIN_FAIL:
      return { ...state, loadingad: false, errors: payload };

    //auth admin

    case GET_PROFILE_ADMIN:
      return { ...state, loadingad: true };
    case GET_PROFILE_ADMIN_SUCCESS:
      return {
        ...state,
        loadingad: false,
        admins: payload,
        isAuthad: true,
        errors: null,
      };
    case GET_PROFILE_ADMIN_FAIL:
      return { ...state, loadingad: false, errors: payload };

    //get all users
    case GET_USERS:
      return { ...state, loadingad: true };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loadingad: false,
        users: payload.employees,
      };

    case GET_USERS_FAIL:
      return { ...state, loadingad: false, errors: payload };

    // delete user
    case DELETE_USER:
      return { ...state, loadingad: true };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loadingad: false,
        users: state.users.filter((el) => el._id !== payload),
      };

    case DELETE_USER_FAIL:
      return { ...state, loadingad: false, errors: payload };

    //get all companies
    case GET_COMPANIES:
      return { ...state, loadingad: true };
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loadingad: false,
        comp: payload.employers,
      };

    case GET_COMPANIES_FAIL:
      return { ...state, loadingad: false, errors: payload };

    // delete company
    case DELETE_COMPANY:
      return { ...state, loadingad: true };
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loadingad: false,
        comp: state.comp.filter((el) => el._id !== payload),
      };

    default:
      return state;
  }
};

export default AdminReducer;
