import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register, NotFoundPage } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/userSlice";

function App() {
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const dispatch = useDispatch();
  console.log("user: " + user.name);
  console.log("token: " + token);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <button onClick={() => dispatch(logout())}>logout</button>
    </>
  );
}

export default App;
