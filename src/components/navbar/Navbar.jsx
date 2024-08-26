import { useState } from "react";
import { useSelector } from "react-redux";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchButton from "./SearchButton";
import "./navbar.scss";

export default function Navbar() {
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const [hover, setHover] = useState(false);
  const [search, setSearch] = useState(false);
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="navbar">
      <div className="containers">
        <div className="logo">
          <Link to="/">
            <h2>Logo</h2>
          </Link>
        </div>
        <nav className="navbar-list">
          <ul className={`${navbar ? "" : "right-500"}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/articole">Articole</Link>
            </li>
            <li
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Link to="#">Foto Diverse</Link>
            </li>

            <ul
              className={`nested-li  ${hover ? "" : "display-none"}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <li>
                <Link to="#">Foto Evenimente</Link>
              </li>
              <li>
                <Link to="#">Peisaje Natura</Link>
              </li>
              <li>
                <Link to="#">Flori Salbatice</Link>
              </li>
            </ul>

            <li>
              <Link to="#">Europa</Link>
            </li>
            {token ? (
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            ) : null}
            {!token ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">logout</Link>
              </li>
            )}

            {/* <ul
              className={`nested-li  ${hover ? "" : "display-none"}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <li>
                <Link to="#">Foto Evenimente</Link>
              </li>
              <li>
                <Link to="#">Peisaje Natura</Link>
              </li>
              <li>
                <Link to="#">Flori Salbatice</Link>
              </li>
            </ul> */}
          </ul>
          <div className="menus" onClick={() => setNavbar((prev) => !prev)}>
            <IoMenuOutline />
          </div>
          <div className="search" onClick={() => setSearch((prev) => !prev)}>
            <IoMdSearch />
          </div>
          {search && <SearchButton />}
          <div className="line"></div>
          <div className="links">
            <Link to="#">
              <FaFacebook />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
            <Link to="#">
              <FaYoutube />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
