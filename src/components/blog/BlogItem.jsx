import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import "./style/blog.scss";
import { getBlog } from "../../features/blogSlice.js";
import { getComments } from "../../features/commentSlice.js";
import { getReviews } from "../../features/reviewSlice.js";
import FeedbackStars from "./FeedbackStars.jsx";

export default function BlogItem() {
  const dispatch = useDispatch();
  const params = useParams();
  const { blogId } = params;
  const { blog } = useSelector((state) => state.blog);
  const { comments } = useSelector((state) => state.comment);
  const { reviews } = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(getBlog(blogId));
    dispatch(getComments(blogId));
    dispatch(getReviews(blogId));
    // dispatch(getNotes(ticketId));
  }, [blogId, dispatch]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="containers">
        <div className="blog-item">
          <div className="left">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
          <div className="right">
            <img
              src={
                blog.files && blog.files.length > 0
                  ? blog.files[0].file.url
                  : ""
              }
              alt="Blog"
            />
          </div>
        </div>
        <div className="photo-gallery">
          {blog?.files?.map((f, i) => (
            <img
              key={i}
              style={{ width: "200px" }}
              src={f.file.secure_url}
              alt={`Gallery image ${f.id}`}
            />
          ))}
        </div>
        <FeedbackStars />
      </div>
    </div>
  );
}
