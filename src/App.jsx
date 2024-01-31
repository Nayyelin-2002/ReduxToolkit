// import Counter from "./Components/Counter";
// import Navbar from "./Components/Navbar";
// import Welcome from "./Components/Welcome";
// import { useSelector } from "react-redux";
// function App() {
//   const login = useSelector((state) => state.auth.islogin);

//   return (
//     <div>
//       <Navbar />
//       {!login && <Welcome />}
//       {login && <Counter />}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Todo from "./Components/Todo";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}

export default App;
