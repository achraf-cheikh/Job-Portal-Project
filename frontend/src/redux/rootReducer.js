import { combineReducers } from "redux";
import EmployerReducer from "./EmployerReducer";
import EmployeeReducer from "./EmployeeReducer";
import AdminReducer from "./AdminReducer";
import JobReducer from "./JobReducer";

const rootReducer = combineReducers({
  EmployerReducer,
  EmployeeReducer,
  AdminReducer,
  JobReducer,
});

export default rootReducer;
