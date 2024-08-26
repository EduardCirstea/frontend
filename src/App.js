import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  BlogPage,
  NotFoundPage,
  Articole,
} from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { Navigate } from "react-router-dom";
import DD from "./pages/DD";
import BlogItem from "./components/blog/BlogItem";
import Navbar from "./components/navbar/Navbar";
import ArticolItem from "./components/articole/ArticolItem";

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
          {/* <Route path="/dd" element={<DD />} /> */}
          <Route
            exact
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />
          <Route path="/blog/:blogId" element={<BlogItem />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/articole/:articolId" element={<ArticolItem />} />
          <Route path="/articole" element={<Articole />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <button onClick={() => dispatch(logout())}>logout</button>
    </>
  );
}

export default App;
