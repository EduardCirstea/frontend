import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./search.scss";
import { blog } from "../../blog.js";
import BlogSearchItem from "./BlogSearchItem.jsx";

export default function SearchButton() {
  const [text, setText] = useState("");

  // useEffect(() => {

  //   }
  // }, [text]);
  return (
    <div className="searchd">
      <div className="search-button">
        <div className="div">
          <input
            type="text"
            value={text}
            placeholder="Cautare"
            onChange={(e) => setText(e.target.value)}
          />
          <button>
            <IoMdSearch />
          </button>
        </div>
        {blog.map((blogItem, i) => {
          if (
            blogItem.title.toLowerCase().startsWith(text.toLowerCase()) &&
            text !== ""
          ) {
            return <BlogSearchItem key={i} blog={blogItem} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
