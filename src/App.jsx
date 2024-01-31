import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import { useSelector } from "react-redux";
function App() {
  const login = useSelector((state) => state.auth.islogin);

  return (
    <div>
      <Navbar />
      {!login && <Welcome />}
      {login && <Counter />}
    </div>
  );
}

export default App;
