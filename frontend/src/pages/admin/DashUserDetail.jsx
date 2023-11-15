import React from "react";

import { useDispatch } from "react-redux";
import { DeleteUser } from "../../redux/action";

const DashUserDetail = ({ el }) => {
  const dispatch = useDispatch();
  const handledelete = () => {
    dispatch(DeleteUser(el._id));
    window.location.reload();
  };
  //--------------------------------------------------

  return (
    <div className="dashbord-details">
      <h6 style={{ width: "100px", textAlign: "start" }}>{el.firstName}</h6>
      <h6 style={{ width: "100px", textAlign: "start" }}>{el.lastName}</h6>
      <h6 style={{ width: "120px", textAlign: "start" }}>{el.scholarship}</h6>
      <h6 style={{ width: "50px", textAlign: "start" }}>{el.experience}</h6>
      {/* <img src={el.cv} alt="" /> */}
      {/* <iframe src={el.cv} width="600" height="800" title="Word Viewer"></iframe> */}

      <button
        className="btn-del-dash"
        style={{ width: "120px", textAlign: "start" }}
        onClick={() => handledelete()}
      >
        delete
      </button>
    </div>
  );
};

export default DashUserDetail;
