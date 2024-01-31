import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countersliceActions } from "../Store/index";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const toogle = useSelector((state) => state.counter.isshow);
  const dispatch = useDispatch();
  const incc = () => {
    dispatch(countersliceActions.inc());
  };
  const decc = () => {
    dispatch(countersliceActions.dec());
  };
  const tooglec = () => {
    dispatch(countersliceActions.toogel());
  };
  const incby5 = () => {
    dispatch(countersliceActions.incby5(5));
  };

  return (
    <>
      <div>
        <h3>Redux counter</h3>
        {toogle && <h1>{counter}</h1>}
        <br />
        <div className="btns">
          <button onClick={incc}>Increase</button>
          <button onClick={incby5}>Increase By 5</button>
          <button onClick={decc}>Decrease</button>
          <button onClick={tooglec}>Toggle</button>
        </div>
      </div>
    </>
  );
}

export default Counter;
