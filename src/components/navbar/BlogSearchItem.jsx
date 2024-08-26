import React from "react";

export default function BlogSearchItem({ blog }) {
  return (
    <div className="search-result">
      <h2>Articole</h2>
      <a href={blog.title} className="divul">
        <img src={blog.image} alt="" />
        <div className="info">
          <h4>{blog.title}</h4>
          <p>{blog.body}</p>
        </div>
      </a>
    </div>
  );
}
