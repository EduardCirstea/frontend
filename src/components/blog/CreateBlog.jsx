import { useDispatch, useSelector } from "react-redux";
import PhotoAtt from "./actions/PhotoAtt";
import Preview from "./actions/Preview";
import "./style/blog.scss";
import { useState } from "react";
import Viewer from "./actions/Viewer";
import { uploadFiles } from "../../utils/upload";
import { clearFiles, createBlog } from "../../features/blogSlice";
import { createArticle } from "../../features/articleSlice";

export default function CreateBlog({ setShowCreateBlog }) {
  const { files } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    // locatii: "",
  });
  const { title, content } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const uploaded_files = await uploadFiles(files);
    const values = {
      token,
      files: uploaded_files.length > 0 ? uploaded_files : [],
      title,
      content,
      // locatii,
    };

    console.log(values);
    await dispatch(createBlog(values));

    setLoading(false);
    setShowCreateBlog(false);
  };
  const existHandler = () => {
    setShowCreateBlog(false);
    dispatch(clearFiles());
  };
  if (loading) return <h1>Loading....</h1>;
  return (
    <div className="blur">
      <div className="register">
        <div className="register_header">
          <i className="exit_icon" onClick={() => existHandler()}>
            x
          </i>
          <p>Create a blog post</p>
        </div>
        <form className="register_form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Nume Firma</label>
            <input
              type="text"
              name="title"
              placeholder="Titlu blog"
              value={title}
              onChange={onChange}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="locatii">Locatie</label>
            <select
              name="locatii"
              id="locatii"
              value={locatii}
              onChange={onChange}
            >
              <option value="Romania">iPhone</option>
              <option value="Bulgaria">Samsung</option>
              <option value="Venezuela">iPad</option>
              <option value="MackBook Pro">MackBook Pro</option>
            </select>
          </div> */}
          <div className="form-group">
            <label htmlFor="content">Description of the issue</label>
            <textarea
              name="content"
              id="content"
              className="form-control"
              placeholder="Descriere"
              value={content}
              onChange={onChange}
            ></textarea>
          </div>

          <label htmlFor="poze">Poze</label>
          {!files.length > 0 ? (
            <PhotoAtt />
          ) : (
            <Preview
              files={files}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          )}
          {files && <Viewer activeIndex={activeIndex} />}
          {/* <div
            onClick={(e) => sendMessageHandler(e)}
            className="bg-green_1 w-16 h-16 mt-2 rounded-full flex items-center justify-center cursor-pointer"
          >
            {loading ? (
              <p color="#E9EDEF" size={25}>
                Loading..
              </p>
            ) : (
              <p color="#E9EDEF" size={25}>
                Send
              </p>
            )}
          </div> */}
          <button className="btn-register" type="submit">
            Adauga
          </button>
        </form>
      </div>
    </div>
  );
}
