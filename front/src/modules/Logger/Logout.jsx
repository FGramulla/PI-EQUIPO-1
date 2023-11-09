import React from "react";

const Logout = ({ handleEvent }) => {
  return (
    <button className="btn btn-error" onClick={e => handleEvent(false)}>
      Sign out
    </button>
  );
};

export default Logout;