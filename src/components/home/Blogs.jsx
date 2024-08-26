import { blog } from "../../blog.js";
import Blog from "./Blog.jsx";

export default function Blogs() {
  return (
    <div>
      <div className="blog-home">
        <div className="center-text">
          <h2>Trasee recente/ peisaje din România</h2>
        </div>

        <div className="row">
          {blog.slice(0, 9).map((b, i) => (
            <Blog b={b} key={i} />
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
