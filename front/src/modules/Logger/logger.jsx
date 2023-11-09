import React, { useState } from "react";
import SignIn from "./SignIn";
import Logout from "./Logout";

const Logger = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) return <SignIn handleEvent={setIsLoggedIn} />;

  return <Logout handleEvent={setIsLoggedIn} />;
};

export default Logger;