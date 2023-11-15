import React from "react";
import { useDispatch } from "react-redux";
import { DeleteCompany } from "../../redux/action";

// import { useDispatch } from "react-redux";
// import { DeleteUser } from "../../redux/action";

const DashCompDetail = ({ el }) => {
  const dispatch = useDispatch();
  const handledeletecomp = () => {
    dispatch(DeleteCompany(el._id));
    window.location.reload();
  };
  //--------------------------------------------------

  return (
    <div className="dashbord-details">
      <h6 style={{ width: "80px", textAlign: "start", marginLeft: "-30px" }}>
        {el.firstName}
      </h6>
      <h6 style={{ width: "80px", textAlign: "start" }}>{el.lastName}</h6>
      <h6 style={{ width: "200px", textAlign: "start" }}>{el.company}</h6>
      <h6 style={{ width: "150px", textAlign: "start", marginLeft: "0px" }}>
        {el.phone}
      </h6>

      <button
        className="btn-del-dash"
        style={{ width: "120px", textAlign: "start" }}
        onClick={() => handledeletecomp()}
      >
        delete
      </button>
    </div>
  );
};

export default DashCompDetail;
