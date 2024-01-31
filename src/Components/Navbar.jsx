import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAuthActions } from "../Store";

const Navbar = () => {
  const logout = useSelector((state) => state.auth.islogout);
  const logoutdispatch = useDispatch();
  const logoutbutton = () => {
    logoutdispatch(counterAuthActions.logout());
  };
  return (
    <nav>
      <h1>Redux Counter</h1>

      <ul className="ull">
        <li>My records</li>
        <li>Profile</li>
        <li>{!logout && <button onClick={logoutbutton}>Logout</button>}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
