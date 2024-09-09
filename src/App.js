import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  BlogPage,
  NotFoundPage,
  Settings,
  Articole,
  EditPage,
} from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { Navigate } from "react-router-dom";
import DD from "./pages/DD";
import BlogItem from "./components/blog/BlogItem";
import Navbar from "./components/navbar/Navbar";
import ArticoleItem from "./components/articole/ArticoleItem";
import Flori from "./pages/flori";
import Peisaje from "./pages/peisaje";
import Evenimente from "./pages/evenimente";
import Video from "./pages/video";

function App() {
  const { user } = useSelector((state) => state.user);
  const { token } = user;

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
            path="/settings"
            element={!token ? <Login /> : <Settings />}
          />
          <Route
            exact
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/edit-page/:id"
            element={token && user.isAdmin ? <EditPage /> : <Navigate to="/" />}
          />
          <Route path="/blog/:blogId" element={<BlogItem />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/article/:articleId" element={<ArticoleItem />} />
          <Route path="/article" element={<Articole />} />
          <Route path="/evenimente" element={<Evenimente />} />
          <Route path="/peisaje" element={<Peisaje />} />
          <Route path="/flori" element={<Flori />} />
          <Route path="/videos" element={<Video />} />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
