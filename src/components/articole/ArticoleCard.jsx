import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { deleteArticle, reportArticle } from "../../features/articleSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function ArticoleCard({ post }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const [hover, setHover] = useState(false);

  const canEditOrDelete = user?.isAdmin || user?._id === post.user;
  const navigate = useNavigate();

  const values2 = {
    token,
    articleId: post._id,
  };

  const handleReport = () => {
    const val = {
      token,
      articleId: post._id,
      reported: true,
    };
    dispatch(reportArticle(val));
  };
  return (
    <div>
      <div className="blog-page" style={{ position: "relative" }}>
        <h2>{post.title}</h2>
        <Link
          to={"/article/" + post._id}
          style={{ display: "flex", gap: "5px" }}
        >
          <h3>{post.country}, </h3>
          <h3>{post.season},</h3>
          <h3>{post.activity}</h3>
        </Link>
        <Link to={"/article/" + post._id} className="imgs">
          <img src={post.files[0]?.file.secure_url} alt={post.title} />
        </Link>
        <span style={{ fontSize: "10px", color: "#114dcc" }}>
          Created at {post.createdAt.substring(0, 10)}
        </span>
        <p>{post.content.substring(0, 400)}...</p>
        <a href={"/article/" + post._id} className="citeste">
          Citeste mai mult{" "}
        </a>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "105px",
            cursor: "pointer",
          }}
          onMouseLeave={() => setHover(false)}
          onMouseEnter={() => setHover(true)}
        >
          <HiOutlineDotsHorizontal size={25} />
          {hover ? (
            <p
              style={{
                color: "red",
                background: "#ccc",
                padding: "10px 15px",
              }}
              onClick={handleReport}
            >
              Report
            </p>
          ) : null}
        </div>
        {canEditOrDelete && (
          <>
            <button
              onClick={() =>
                post && post._id && navigate(`/edit-page/${post._id}`)
              }
              className="top-absolute"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => dispatch(deleteArticle(values2))}
              className="top-absolute"
            >
              <FaTrashAlt />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
