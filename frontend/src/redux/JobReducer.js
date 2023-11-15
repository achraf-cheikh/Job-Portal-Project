import {
  CREATE_JOB,
  CREATE_JOB_FAIL,
  CREATE_JOB_SUCCESS,
  DELETE_JOB,
  DELETE_JOB_FAIL,
  DELETE_JOB_SUCCESS,
  GET_OFFERS,
  GET_OFFERS_FAIL,
  GET_OFFERS_SUCCESS,
  GET_ONE_OFFER,
  GET_ONE_OFFER_FAIL,
  GET_ONE_OFFER_SUCCESS,
  UPDATE_JOB,
  UPDATE_JOB_FAIL,
  UPDATE_JOB_SUCCESS,
} from "./actionTypes";

const init = {
  loadingjob: false,
  jobOffers: null,
  page: null,
  total: null,
  NumOfPage: null,
  errors: null,
  oneJob: null,
};

const JobReducer = (state = init, { type, payload }) => {
  switch (type) {
    //get job offers
    case GET_OFFERS:
      return { ...state, loadingjob: true };
    case GET_OFFERS_SUCCESS:
      return {
        ...state,
        loadingjob: false,
        jobOffers: payload.JobOffers,
        total: payload.total,
        page: payload.page,
        NumOfPage: payload.NumOfPage,
      };

    case GET_OFFERS_FAIL:
      return { ...state, loadingjob: false, errors: payload };

    //create new job
    case CREATE_JOB:
      return { ...state, loadingjob: true };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        loadingjob: false,
        jobOffers: payload,
      };

    case CREATE_JOB_FAIL:
      return { ...state, loadingjob: false, errors: payload };

    //delete job
    case DELETE_JOB:
      return { ...state, loadingjob: true };
    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        loadingjob: false,
        jobOffers: state.jobOffers.filter((el) => el._id !== payload),
      };

    case DELETE_JOB_FAIL:
      return { ...state, loadingjob: false, errors: payload };

    //update job
    case UPDATE_JOB:
      return { ...state, loadingjob: true };
    case UPDATE_JOB_SUCCESS:
      return {
        ...state,
        loadingjob: false,
        jobOffers: state.jobOffers.map((el) =>
          el._id === payload._id ? payload : el
        ),
      };

    case UPDATE_JOB_FAIL:
      return { ...state, loadingjob: false, errors: payload };

    //get job by id
    case GET_ONE_OFFER:
      return { ...state, loadingjob: true };
    case GET_ONE_OFFER_SUCCESS:
      return {
        ...state,
        loadingjob: false,
        oneJob: { ...payload },
      };

    case GET_ONE_OFFER_FAIL:
      return { ...state, loadingjob: false, errors: payload };

    default:
      return state;
  }
};

export default JobReducer;
