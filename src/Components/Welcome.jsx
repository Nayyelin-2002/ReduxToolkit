import React from "react";
import { useDispatch } from "react-redux";
import { counterAuthActions } from "../Store";

const Welcome = () => {
  const logindispatch = useDispatch();
  const loginbutton = () => {
    logindispatch(counterAuthActions.login());
  };
  return (
    <>
      <div className="wel">
        <button onClick={loginbutton}>Login to react counter</button>
      </div>
    </>
  );
};

export default Welcome;
