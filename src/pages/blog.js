import React from "react";
import { blog } from "../blog.js";
import "./style/blog.scss";
import Navbar from "../components/navbar/Navbar.jsx";
import Footer from "../components/home/Footer.jsx";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="blog">
        <div>
          <h1>Blog</h1>
        </div>
        <div className="containers">
          <div>
            <h1>Articole</h1>
          </div>
          {blog.map((post) => (
            <div key={post.id} className="blog-page">
              <h2>{post.title}</h2>
              <h3>{post.locatie} Grecia</h3>
              <a href="#">
                <img src={post.image} alt={post.title} />
              </a>
              <p>{post.body}</p>
              <a href={post.url} className="citeste">
                Citeste mai mult{" "}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
