import React from "react";

const SignIn = ({ handleEvent }) => {
  return (
    <button className="btn btn-success" onClick={e => handleEvent(true)}>
      Sign In
    </button>
  );
};

export default SignIn;